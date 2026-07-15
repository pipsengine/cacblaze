create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  avatar_url text,
  bio text,
  role text not null default 'user' check (role in ('admin','author','user')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.user_profiles
    where id = auth.uid() and role = 'admin' and is_active = true
  );
$$;

create or replace function public.protect_profile_privileges()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if auth.role() <> 'service_role' and not public.is_admin() then
    if tg_op = 'INSERT' then
      new.role = 'user';
      new.is_active = true;
    elsif new.role is distinct from old.role or new.is_active is distinct from old.is_active then
      raise exception 'Only administrators may change roles or account status';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_privileges on public.user_profiles;
create trigger protect_profile_privileges before insert or update on public.user_profiles
for each row execute function public.protect_profile_privileges();

drop trigger if exists user_profiles_updated_at on public.user_profiles;
create trigger user_profiles_updated_at before update on public.user_profiles
for each row execute function public.set_updated_at();

create table if not exists public.content_metadata (
  id uuid primary key default gen_random_uuid(),
  article_id text not null unique,
  title text not null,
  excerpt text,
  category text not null,
  tags text[] not null default '{}',
  author_name text,
  author_id uuid references auth.users(id) on delete set null,
  read_time integer check (read_time between 0 and 600),
  featured boolean not null default false,
  syndication_enabled boolean not null default true,
  published_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  article_id text not null, article_title text not null, article_category text, notes text,
  created_at timestamptz not null default now(), unique(user_id, article_id)
);
create table if not exists public.reading_progress (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  article_id text not null, progress integer not null default 0 check (progress between 0 and 100),
  category text, completed boolean not null default false, updated_at timestamptz not null default now(),
  unique(user_id, article_id)
);
create table if not exists public.reading_lists (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  name text not null, description text, is_public boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.reading_list_items (
  id uuid primary key default gen_random_uuid(), list_id uuid not null references public.reading_lists(id) on delete cascade,
  article_id text not null, article_title text not null, article_category text,
  created_at timestamptz not null default now(), unique(list_id, article_id)
);
create table if not exists public.user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  preferred_categories text[] not null default '{}', email_notifications boolean not null default true,
  push_notifications boolean not null default true, reading_history jsonb not null default '[]',
  updated_at timestamptz not null default now()
);
create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(), email text not null unique,
  user_id uuid references auth.users(id) on delete set null, subscribed_topics text[] not null default '{}',
  frequency text not null default 'weekly' check (frequency in ('daily','weekly','monthly')),
  status text not null default 'active' check (status in ('active','unsubscribed')),
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.user_notifications (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  notification_type text not null check (notification_type in ('new_content','trending','personalized','system')),
  title text not null, message text not null, article_id text, category text,
  status text not null default 'unread' check (status in ('unread','read','dismissed')),
  created_at timestamptz not null default now(), read_at timestamptz
);
create table if not exists public.social_shares (
  id uuid primary key default gen_random_uuid(), article_id text not null, platform text not null,
  user_id uuid references auth.users(id) on delete set null, created_at timestamptz not null default now()
);

create table if not exists public.qa_questions (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  category text not null, title text not null, content text not null, status text not null default 'open',
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.qa_answers (
  id uuid primary key default gen_random_uuid(), question_id uuid not null references public.qa_questions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade, content text not null,
  is_accepted boolean not null default false, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.qa_upvotes (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  question_id uuid references public.qa_questions(id) on delete cascade,
  answer_id uuid references public.qa_answers(id) on delete cascade, created_at timestamptz not null default now(),
  check ((question_id is not null)::int + (answer_id is not null)::int = 1)
);
create unique index if not exists qa_upvotes_question_unique on public.qa_upvotes(user_id, question_id) where question_id is not null;
create unique index if not exists qa_upvotes_answer_unique on public.qa_upvotes(user_id, answer_id) where answer_id is not null;

create table if not exists public.ama_sessions (
  id uuid primary key default gen_random_uuid(), expert_id uuid not null references public.user_profiles(id) on delete cascade,
  title text not null, description text not null, topic text, status text not null default 'scheduled',
  scheduled_at timestamptz not null, duration_minutes integer not null default 60,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.ama_questions (
  id uuid primary key default gen_random_uuid(), session_id uuid not null references public.ama_sessions(id) on delete cascade,
  user_id uuid not null references public.user_profiles(id) on delete cascade, question text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.ama_answers (
  id uuid primary key default gen_random_uuid(), question_id uuid not null references public.ama_questions(id) on delete cascade,
  expert_id uuid not null references public.user_profiles(id) on delete cascade, answer text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.social_api_credentials (
  platform text primary key, enabled boolean not null default false, data text,
  updated_by uuid references auth.users(id) on delete set null, updated_at timestamptz not null default now()
);
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(), admin_user_id uuid references public.user_profiles(id) on delete set null,
  target_user_id uuid references public.user_profiles(id) on delete set null, action_type text not null,
  details jsonb, created_at timestamptz not null default now()
);

do $$
declare table_name text;
begin
  foreach table_name in array array[
    'user_profiles','content_metadata','bookmarks','reading_progress','reading_lists','reading_list_items',
    'user_preferences','newsletter_subscriptions','user_notifications','social_shares','qa_questions',
    'qa_answers','qa_upvotes','ama_sessions','ama_questions','ama_answers','social_api_credentials','audit_logs'
  ] loop
    execute format('alter table public.%I enable row level security', table_name);
  end loop;
end $$;

create policy "profiles readable" on public.user_profiles for select using (true);
create policy "users create own profile" on public.user_profiles for insert with check (auth.uid() = id);
create policy "users update own profile or admins" on public.user_profiles for update using (auth.uid() = id or public.is_admin());
create policy "published metadata public" on public.content_metadata for select using (syndication_enabled or author_id = auth.uid() or public.is_admin());
create policy "authors create metadata" on public.content_metadata for insert with check (author_id = auth.uid() or public.is_admin());
create policy "authors update own metadata" on public.content_metadata for update using (author_id = auth.uid() or public.is_admin());
create policy "admins delete metadata" on public.content_metadata for delete using (public.is_admin());

create policy "own bookmarks" on public.bookmarks for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own progress" on public.reading_progress for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "read own or public lists" on public.reading_lists for select using (user_id = auth.uid() or is_public);
create policy "manage own lists" on public.reading_lists for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "read accessible list items" on public.reading_list_items for select using (
  exists (select 1 from public.reading_lists where id = list_id and (user_id = auth.uid() or is_public))
);
create policy "manage own list items" on public.reading_list_items for all using (
  exists (select 1 from public.reading_lists where id = list_id and user_id = auth.uid())
) with check (exists (select 1 from public.reading_lists where id = list_id and user_id = auth.uid()));
create policy "own preferences" on public.user_preferences for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "anonymous newsletter signup" on public.newsletter_subscriptions for insert with check (user_id is null or user_id = auth.uid());
create policy "manage own newsletter" on public.newsletter_subscriptions for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own notifications" on public.user_notifications for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "social share stats public" on public.social_shares for select using (true);
create policy "social shares accepted" on public.social_shares for insert with check (user_id is null or user_id = auth.uid());

create policy "qa public read questions" on public.qa_questions for select using (true);
create policy "qa users create questions" on public.qa_questions for insert with check (user_id = auth.uid());
create policy "qa owners manage questions" on public.qa_questions for update using (user_id = auth.uid() or public.is_admin());
create policy "qa public read answers" on public.qa_answers for select using (true);
create policy "qa users create answers" on public.qa_answers for insert with check (user_id = auth.uid());
create policy "qa owners manage answers" on public.qa_answers for update using (user_id = auth.uid() or public.is_admin());
create policy "qa own upvotes" on public.qa_upvotes for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "ama public read sessions" on public.ama_sessions for select using (true);
create policy "ama experts create sessions" on public.ama_sessions for insert with check (expert_id = auth.uid() and (public.is_admin() or exists (select 1 from public.user_profiles where id = auth.uid() and role = 'author' and is_active)));
create policy "ama public read questions" on public.ama_questions for select using (true);
create policy "ama users create questions" on public.ama_questions for insert with check (user_id = auth.uid());
create policy "ama public read answers" on public.ama_answers for select using (true);
create policy "ama experts create answers" on public.ama_answers for insert with check (expert_id = auth.uid());
create policy "admins manage social credentials" on public.social_api_credentials for all using (public.is_admin()) with check (public.is_admin());
create policy "admins read audit logs" on public.audit_logs for select using (public.is_admin());
create policy "admins write audit logs" on public.audit_logs for all using (public.is_admin()) with check (public.is_admin());

create index if not exists content_metadata_published_idx on public.content_metadata(syndication_enabled, published_at desc);
create index if not exists notifications_user_status_idx on public.user_notifications(user_id, status);
create index if not exists reading_progress_user_updated_idx on public.reading_progress(user_id, updated_at desc);
