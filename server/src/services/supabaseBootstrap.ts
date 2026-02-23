import 'dotenv/config';
import { Client } from 'pg';

function hasSupabaseEnv(): boolean {
  return !!(
    process.env.POSTGRES_HOST &&
    process.env.POSTGRES_DATABASE &&
    process.env.POSTGRES_USER &&
    process.env.POSTGRES_PASSWORD
  );
}

async function getClient(): Promise<Client | null> {
  if (!hasSupabaseEnv()) return null;
  const client = new Client({
    host: process.env.POSTGRES_HOST!,
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    user: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DATABASE!,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  return client;
}

export async function runSupabaseBootstrap(): Promise<boolean> {
  if (process.env.SUPABASE_AUTO_MIGRATE !== 'true') {
    return false;
  }
  let client: Client | null = null;
  try {
    client = await getClient();
  } catch (e) {
    console.warn('[SupabaseBootstrap] Connection skipped:', e instanceof Error ? e.message : e);
    return false;
  }
  if (!client) {
    console.warn('[SupabaseBootstrap] Skipped: missing POSTGRES_* env vars');
    return false;
    }
  try {
    const statements: string[] = [
      `create extension if not exists pgcrypto;`,
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
      `create index if not exists idx_user_notifications_user_status
        on public.user_notifications(user_id, status);`,
    ];
    for (const sql of statements) {
      await client.query(sql);
    }
    const res = await client.query(`select to_regclass('public.user_notifications') as t`);
    const ok = !!res.rows[0]?.t;
    console.log('[SupabaseBootstrap] Completed:', ok ? 'OK' : 'Unknown state');
    return ok;
  } catch (e) {
    console.error('[SupabaseBootstrap] Failed:', e);
    return false;
  } finally {
    await client.end().catch(() => {});
  }
}
