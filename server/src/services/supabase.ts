import crypto from 'crypto';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Op } from 'sequelize';
import { User } from '../models';

export type AppRole = 'admin' | 'author' | 'user';

export interface SupabaseIdentity {
  id: string;
  email: string | null;
  full_name?: string;
  role: AppRole;
  is_active: boolean;
}

let supabase: SupabaseClient | null = null;

function normalizeRole(role: unknown): AppRole {
  return role === 'admin' || role === 'author' ? role : 'user';
}

function usernameSeed(value?: string | null): string {
  const normalized = (value || 'user')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 24);

  return normalized || `user-${crypto.randomBytes(3).toString('hex')}`;
}

async function generateUniqueUsername(base: string): Promise<string> {
  const seed = usernameSeed(base);
  let candidate = seed;
  let suffix = 1;

  while (await User.findOne({ where: { username: candidate } })) {
    candidate = `${seed}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}

export function getSupabase() {
  if (supabase) return supabase;

  const url =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_Cacblaze_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  supabase = createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return supabase;
}

export async function getUserProfileByEmail(email: string) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('user_profiles')
    .select('id, full_name, email, role, is_active')
    .eq('email', email)
    .single();

  if (error) return null;
  return data;
}

export async function getUserProfileById(id: string) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('user_profiles')
    .select('id, full_name, email, role, is_active')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
}

export async function verifySupabaseAccessToken(
  accessToken: string
): Promise<SupabaseIdentity | null> {
  const client = getSupabase();
  if (!client) return null;

  const {
    data: { user },
    error,
  } = await client.auth.getUser(accessToken);

  if (error || !user) {
    return null;
  }

  const profile =
    (await getUserProfileById(user.id)) ||
    (user.email ? await getUserProfileByEmail(user.email) : null);

  return {
    id: user.id,
    email: user.email ?? null,
    full_name:
      profile?.full_name ||
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      undefined,
    role: normalizeRole(profile?.role),
    is_active: profile?.is_active !== false,
  };
}

export async function ensureLocalUserFromIdentity(identity: SupabaseIdentity) {
  const existing = await User.findOne({
    where: identity.email
      ? {
          [Op.or]: [{ email: identity.email }, { username: identity.email }],
        }
      : undefined,
  });

  if (existing) {
    let changed = false;

    if (identity.email && existing.email !== identity.email) {
      existing.email = identity.email;
      changed = true;
    }

    if (
      (existing.role === 'user' && identity.role !== 'user') ||
      identity.role === 'admin'
    ) {
      existing.role = identity.role;
      changed = true;
    }

    if (changed) {
      await existing.save();
    }

    return existing;
  }

  const username = await generateUniqueUsername(
    identity.email?.split('@')[0] || identity.full_name || identity.id
  );

  return User.create({
    username,
    email: identity.email,
    password: crypto.randomBytes(24).toString('hex'),
    role: identity.role,
  });
}

export async function upsertUserProfile(payload: {
  email: string;
  full_name?: string;
  role?: AppRole;
  is_active?: boolean;
}) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('user_profiles')
    .upsert(
      {
        email: payload.email,
        full_name: payload.full_name || null,
        role: payload.role || 'user',
        is_active: typeof payload.is_active === 'boolean' ? payload.is_active : true,
      },
      { onConflict: 'email' }
    )
    .select()
    .single();

  if (error) return null;
  return data;
}
