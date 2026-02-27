import 'dotenv/config';
import { Client } from 'pg';

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return v;
}

async function run() {
  // Prefer NON_POOLING URL when available (works through Supabase pooler DNS)
  const url =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_URL ||
    process.env.Cacblaze_POSTGRES_URL_NON_POOLING ||
    process.env.Cacblaze_POSTGRES_URL;

  let client: Client;
  if (url) {
    client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  } else {
    const host = requireEnv('POSTGRES_HOST');
    const database = requireEnv('POSTGRES_DATABASE');
    const user = requireEnv('POSTGRES_USER');
    const password = requireEnv('POSTGRES_PASSWORD');
    client = new Client({
      host,
      port: 5432,
      user,
      password,
      database,
      ssl: { rejectUnauthorized: false },
    });
  }
  await client.connect();
  console.log('Connected to Supabase Postgres');

  const statements: string[] = [
    // Enable gen_random_uuid
    `create extension if not exists pgcrypto;`,

    // Roles enum
    `do $$
    begin
      if not exists (select 1 from pg_type where typname = 'user_role') then
        create type public.user_role as enum ('admin','author','user');
      end if;
    end $$;`,

    // user_profiles mirrors auth.users with extra fields
    `create table if not exists public.user_profiles (
      id uuid primary key references auth.users(id) on delete cascade,
      email text unique,
      full_name text,
      role public.user_role not null default 'user',
      is_active boolean not null default true,
      created_at timestamptz not null default now()
    );`,
    `alter table public.user_profiles enable row level security;`,
    `drop policy if exists "Users can read own profile" on public.user_profiles;`,
    `create policy "Users can read own profile" on public.user_profiles
      for select using (auth.uid() = id);`,
    `drop policy if exists "Users can update own profile" on public.user_profiles;`,
    `create policy "Users can update own profile" on public.user_profiles
      for update using (auth.uid() = id);`,
    `drop policy if exists "Admins can read all profiles" on public.user_profiles;`,
    `create policy "Admins can read all profiles" on public.user_profiles
      for select using (exists (select 1 from public.user_profiles p where p.id = auth.uid() and p.role = 'admin'));`,
    `drop policy if exists "Admins can update all profiles" on public.user_profiles;`,
    `create policy "Admins can update all profiles" on public.user_profiles
      for update using (exists (select 1 from public.user_profiles p where p.id = auth.uid() and p.role = 'admin'));`,
    `create index if not exists idx_user_profiles_email on public.user_profiles(email);`,

    // admin/audit logs table for ActivityLog.tsx
    `create table if not exists public.audit_logs (
      id uuid primary key default gen_random_uuid(),
      admin_user_id uuid references public.user_profiles(id) on delete set null,
      target_user_id uuid references public.user_profiles(id) on delete set null,
      action_type text not null,
      details jsonb,
      created_at timestamptz not null default now()
    );`,
    `alter table public.audit_logs enable row level security;`,
    `drop policy if exists "Admins can read audit logs" on public.audit_logs;`,
    `create policy "Admins can read audit logs" on public.audit_logs
      for select using (exists (select 1 from public.user_profiles p where p.id = auth.uid() and p.role = 'admin'));`,
    `drop policy if exists "Admins can insert audit logs" on public.audit_logs;`,
    `create policy "Admins can insert audit logs" on public.audit_logs
      for insert with check (exists (select 1 from public.user_profiles p where p.id = auth.uid() and p.role = 'admin'));`,
    `create index if not exists idx_audit_logs_admin_created on public.audit_logs(admin_user_id, created_at desc);`,

    // separate admin_audit_logs table (used by AuditLog.tsx with named FKs)
    `create table if not exists public.admin_audit_logs (
      id uuid primary key default gen_random_uuid(),
      admin_id uuid references public.user_profiles(id) on delete set null,
      target_user_id uuid references public.user_profiles(id) on delete set null,
      action_type text not null,
      details jsonb,
      created_at timestamptz not null default now()
    );`,
    `alter table public.admin_audit_logs enable row level security;`,
    `drop policy if exists "Admins can read admin audit logs" on public.admin_audit_logs;`,
    `create policy "Admins can read admin audit logs" on public.admin_audit_logs
      for select using (exists (select 1 from public.user_profiles p where p.id = auth.uid() and p.role = 'admin'));`,
    `drop policy if exists "Admins can insert admin audit logs" on public.admin_audit_logs;`,
    `create policy "Admins can insert admin audit logs" on public.admin_audit_logs
      for insert with check (exists (select 1 from public.user_profiles p where p.id = auth.uid() and p.role = 'admin'));`,
    `create index if not exists idx_admin_audit_logs_admin_created on public.admin_audit_logs(admin_id, created_at desc);`,

    // RPC to log admin actions (writes to both tables for compatibility)
    `create or replace function public.log_admin_action(
      p_action_type text,
      p_target_user_id uuid default null,
      p_details jsonb default null
    )
    returns void
    language plpgsql
    security definer
    as $$
    declare
      v_admin_id uuid := auth.uid();
    begin
      -- only allow admins
      if not exists (select 1 from public.user_profiles p where p.id = v_admin_id and p.role = 'admin') then
        raise exception 'not authorized';
      end if;
      insert into public.audit_logs (admin_user_id, target_user_id, action_type, details)
      values (v_admin_id, p_target_user_id, p_action_type, p_details);
      insert into public.admin_audit_logs (admin_id, target_user_id, action_type, details)
      values (v_admin_id, p_target_user_id, p_action_type, p_details);
      return;
    end;
    $$;`,

    // Enums
    `do $$
    begin
      if not exists (select 1 from pg_type where typname = 'notification_type') then
        create type public.notification_type as enum ('new_content','trending','personalized','system');
      end if;
    end $$;`,
    `do $$
    begin
      if not exists (select 1 from pg_type where typname = 'notification_status') then
        create type public.notification_status as enum ('unread','read','dismissed');
      end if;
    end $$;`,

    // Table
    `create table if not exists public.user_notifications (
      id uuid primary key default gen_random_uuid(),
      user_id uuid not null references auth.users(id) on delete cascade,
      notification_type public.notification_type not null,
      title text not null,
      message text not null,
      article_id uuid,
      category text,
      status public.notification_status not null default 'unread',
      created_at timestamptz not null default now(),
      read_at timestamptz
    );`,

    // RLS & policies
    `alter table public.user_notifications enable row level security;`,
    `drop policy if exists "Users can read own notifications" on public.user_notifications;`,
    `create policy "Users can read own notifications" on public.user_notifications
      for select using (auth.uid() = user_id);`,
    `drop policy if exists "Users can insert own notifications" on public.user_notifications;`,
    `create policy "Users can insert own notifications" on public.user_notifications
      for insert with check (auth.uid() = user_id);`,
    `drop policy if exists "Users can update own notifications" on public.user_notifications;`,
    `create policy "Users can update own notifications" on public.user_notifications
      for update using (auth.uid() = user_id);`,
    `drop policy if exists "Users can delete own notifications" on public.user_notifications;`,
    `create policy "Users can delete own notifications" on public.user_notifications
      for delete using (auth.uid() = user_id);`,

    // Index
    `create index if not exists idx_user_notifications_user_status
      on public.user_notifications(user_id, status);`
  ];

  for (const sql of statements) {
    console.log('Executing:', sql.split('\n')[0].slice(0, 80));
    await client.query(sql);
  }

  // Verify
  const res = await client.query(`
    select
      to_regclass('public.user_profiles') as user_profiles,
      to_regclass('public.audit_logs') as audit_logs,
      to_regclass('public.admin_audit_logs') as admin_audit_logs,
      to_regclass('public.user_notifications') as user_notifications
  `);
  console.log('Verification:', res.rows[0]);

  await client.end();
  console.log('Supabase schema setup complete');
}

run().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
