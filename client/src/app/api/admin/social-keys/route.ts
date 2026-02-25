import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

type Platform =
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | 'whatsapp';

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role,is_active')
    .eq('id', user.id)
    .single();
  if (!profile || !profile.is_active || profile.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { data, error } = await supabase
    .from('social_api_credentials')
    .select('platform, enabled, updated_at')
    .order('platform', { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const platforms: Platform[] = [
    'facebook',
    'twitter',
    'linkedin',
    'instagram',
    'youtube',
    'whatsapp',
  ];

  const index: Record<string, { enabled: boolean; updated_at: string | null }> = {};
  for (const row of data || []) {
    index[row.platform] = { enabled: !!row.enabled, updated_at: row.updated_at || null };
  }

  const result = platforms.map((p) => ({
    platform: p,
    enabled: index[p]?.enabled ?? false,
    configured: !!index[p],
    updatedAt: index[p]?.updated_at ?? null,
  }));

  return NextResponse.json({ items: result });
}
