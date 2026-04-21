import { createHash } from 'crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createClient as createSupabaseUserClient } from '@/lib/supabase/server';
import { createClient as createSupabaseAdminClient } from '@supabase/supabase-js';

export type AppRole = 'admin' | 'author' | 'user';

export interface AdminAccessIdentity {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: AppRole;
  is_active: boolean;
  isDevAuthSession: boolean;
}

export const DEV_ADMIN_COOKIE_NAME = 'cacblaze_dev_admin_token';

function getSupabaseUrl() {
  return (
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_Cacblaze_SUPABASE_URL
  );
}

function getSupabasePrivilegedKey() {
  return (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );
}

function normalizeRole(role: unknown): AppRole {
  return role === 'admin' || role === 'author' ? role : 'user';
}

function isDevAdminEnabled() {
  return process.env.NODE_ENV !== 'production' && process.env.DEV_ADMIN_ENABLED === 'true';
}

export function buildExpectedDevAdminToken() {
  if (!isDevAdminEnabled()) return null;

  const configuredEmail = process.env.DEV_ADMIN_EMAIL;
  const configuredPassword = process.env.DEV_ADMIN_PASSWORD;

  if (!configuredEmail || !configuredPassword) {
    return null;
  }

  return createHash('sha256')
    .update(`${configuredEmail}:${configuredPassword}:${process.env.NODE_ENV}`)
    .digest('hex');
}

export function buildDevAdminIdentity(): AdminAccessIdentity | null {
  if (!isDevAdminEnabled()) return null;

  const configuredEmail = process.env.DEV_ADMIN_EMAIL;
  const configuredName = process.env.DEV_ADMIN_NAME || 'Local Admin';

  if (!configuredEmail) return null;

  return {
    id: 'dev-admin',
    email: configuredEmail,
    full_name: configuredName,
    role: 'admin',
    is_active: true,
    isDevAuthSession: true,
  };
}

export async function getSupabaseAdminClient() {
  const url = getSupabaseUrl();
  const key = getSupabasePrivilegedKey();

  if (!url || !key) {
    return null;
  }

  return createSupabaseAdminClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function getAuthenticatedIdentity(): Promise<{
  identity: AdminAccessIdentity;
  supabase: Awaited<ReturnType<typeof createSupabaseUserClient>> | null;
} | null> {
  const cookieStore = await cookies();
  const devToken = cookieStore.get(DEV_ADMIN_COOKIE_NAME)?.value;
  const expectedDevToken = buildExpectedDevAdminToken();
  const devIdentity = buildDevAdminIdentity();

  if (devToken && expectedDevToken && devIdentity && devToken === expectedDevToken) {
    return {
      identity: devIdentity,
      supabase: null,
    };
  }

  const supabase = await createSupabaseUserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('email, full_name, avatar_url, role, is_active')
    .eq('id', user.id)
    .single();

  return {
    identity: {
      id: user.id,
      email: profile?.email || user.email || '',
      full_name:
        profile?.full_name ||
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        undefined,
      avatar_url: profile?.avatar_url || undefined,
      role: normalizeRole(profile?.role),
      is_active: profile?.is_active !== false,
      isDevAuthSession: false,
    },
    supabase,
  };
}

export async function requireAdminAccess() {
  const session = await getAuthenticatedIdentity();

  if (!session) {
    return {
      session: null,
      errorResponse: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  if (!session.identity.is_active || session.identity.role !== 'admin') {
    return {
      session: null,
      errorResponse: NextResponse.json({ error: 'Forbidden' }, { status: 403 }),
    };
  }

  return {
    session,
    errorResponse: null,
  };
}

export async function logAdminAction(params: {
  adminUserId: string;
  targetUserId?: string;
  actionType: string;
  details?: Record<string, unknown>;
}) {
  const supabase = await getSupabaseAdminClient();
  if (!supabase) return;

  try {
    const { error } = await supabase.from('audit_logs').insert({
      admin_user_id: params.adminUserId,
      target_user_id: params.targetUserId || null,
      action_type: params.actionType,
      details: params.details || null,
    });

    if (error) {
      throw error;
    }
  } catch {
    // Audit logging is best-effort so admin mutations do not fail if logging is unavailable.
  }
}