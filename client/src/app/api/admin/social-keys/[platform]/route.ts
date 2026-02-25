import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { encryptJson } from '@/lib/crypto';

type Platform =
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | 'whatsapp';

const REQUIRED_FIELDS: Record<Platform, string[]> = {
  facebook: ['appId', 'appSecret', 'accessToken'],
  twitter: ['clientId', 'clientSecret', 'accessToken'],
  linkedin: ['clientId', 'clientSecret', 'accessToken'],
  instagram: ['appId', 'appSecret', 'accessToken'],
  youtube: ['apiKey', 'clientId', 'clientSecret'],
  whatsapp: ['businessId', 'accessToken', 'phoneNumberId'],
};

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };
  }
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role,is_active')
    .eq('id', user.id)
    .single();
  if (!profile || !profile.is_active || profile.role !== 'admin') {
    return { error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) };
  }
  return { supabase, user };
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ platform: Platform }> }
) {
  const { supabase, user, error } = await requireAdmin();
  if (error || !supabase || !user) return error!;

  const { platform } = await params;
  const body = await req.json();
  const enabled = !!body?.enabled;
  const credentials = (body?.credentials || {}) as Record<string, string>;

  let encrypted: string | null = null;
  if (Object.keys(credentials).length > 0) {
    try {
      encrypted = encryptJson(credentials);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Encryption error';
      return NextResponse.json({ error: msg }, { status: 500 });
    }
  }

  // Upsert row; only overwrite credentials if provided
  const updates: Record<string, unknown> = {
    platform,
    enabled,
    updated_by: user.id,
  };
  if (encrypted) updates.data = encrypted;

  const { error: dbError } = await supabase
    .from('social_api_credentials')
    .upsert(updates, { onConflict: 'platform' });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ platform: Platform }> }
) {
  // Test connection: basic validation that required keys are present in the payload.
  const { error } = await requireAdmin();
  if (error) return error;

  const { platform } = await params;
  const body = await req.json();
  const credentials = (body?.credentials || {}) as Record<string, string>;
  const required = REQUIRED_FIELDS[platform] || [];
  const missing = required.filter((k) => !credentials[k] || credentials[k].trim() === '');
  if (missing.length > 0) {
    return NextResponse.json({ ok: false, missing }, { status: 200 });
  }

  // In this manual-keys module, we do not call external APIs. Consider success if required present.
  return NextResponse.json({ ok: true });
}
