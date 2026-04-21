import { NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAccess } from '@/lib/auth/adminAccess';

export async function GET(request: Request) {
  const { errorResponse } = await requireAdminAccess();
  if (errorResponse) return errorResponse;

  const supabase = await getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase admin client is unavailable.' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const limit = Math.min(Number(searchParams.get('limit') || '50') || 50, 500);

  const { data, error } = await supabase
    .from('audit_logs')
    .select(
      `
        id,
        action_type,
        details,
        created_at,
        admin_user_id,
        target_user_id,
        admin_profiles:user_profiles!audit_logs_admin_user_id_fkey(full_name,email),
        target_profiles:user_profiles!audit_logs_target_user_id_fkey(full_name,email)
      `
    )
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ logs: data || [] });
}

export async function DELETE() {
  const { errorResponse } = await requireAdminAccess();
  if (errorResponse) return errorResponse;

  const supabase = await getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase admin client is unavailable.' }, { status: 500 });
  }

  const { error } = await supabase.from('audit_logs').delete().neq('id', '');
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
