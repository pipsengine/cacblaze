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
  // Prefer NON_POOLING for DDL
  const host = requireEnv('POSTGRES_HOST');
  const database = requireEnv('POSTGRES_DATABASE');
  const user = requireEnv('POSTGRES_USER');
  const password = requireEnv('POSTGRES_PASSWORD');

  const client = new Client({
    host,
    port: 5432,
    user,
    password,
    database,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();
  console.log('Connected to Supabase Postgres');

  const statements: string[] = [
    // Enable gen_random_uuid
    `create extension if not exists pgcrypto;`,

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
    select to_regclass('public.user_notifications') as table_exists
  `);
  console.log('Verification:', res.rows[0]);

  await client.end();
  console.log('Supabase schema setup complete');
}

run().catch((err) => {
  console.error('Setup failed:', err);
  process.exit(1);
});
