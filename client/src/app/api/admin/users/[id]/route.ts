import { NextResponse } from 'next/server';
import { getSupabaseAdminClient, logAdminAction, requireAdminAccess } from '@/lib/auth/adminAccess';

const allowedRoles = new Set(['admin', 'author', 'user']);

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { errorResponse } = await requireAdminAccess();
  if (errorResponse) return errorResponse;

  const { id } = await params;
  const supabase = await getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase admin client is unavailable.' }, { status: 500 });
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .select('id,email,full_name,bio,role,is_active,created_at,updated_at')
    .eq('id', id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ user: data });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { session, errorResponse } = await requireAdminAccess();
  if (errorResponse || !session) return errorResponse!;

  const { id } = await params;
  const supabase = await getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase admin client is unavailable.' }, { status: 500 });
  }

  let body: {
    full_name?: string;
    bio?: string;
    role?: string;
    is_active?: boolean;
  };

  try {
    body = (await request.json()) as {
      full_name?: string;
      bio?: string;
      role?: string;
      is_active?: boolean;
    };
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { data: targetUser, error: targetError } = await supabase
    .from('user_profiles')
    .select('id,email,full_name,bio,role,is_active,created_at,updated_at')
    .eq('id', id)
    .single();

  if (targetError || !targetUser) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 });
  }

  const nextRole = body.role ?? targetUser.role;
  const nextIsActive = typeof body.is_active === 'boolean' ? body.is_active : targetUser.is_active;

  if (!allowedRoles.has(nextRole)) {
    return NextResponse.json({ error: 'Invalid user role.' }, { status: 400 });
  }

  if (targetUser.role === 'admin' && nextRole !== 'admin') {
    const { count } = await supabase
      .from('user_profiles')
      .select('id', { count: 'exact', head: true })
      .eq('role', 'admin');

    if ((count || 0) <= 1) {
      return NextResponse.json(
        { error: 'Cannot change role of the last admin user.' },
        { status: 400 }
      );
    }
  }

  if (targetUser.role === 'admin' && targetUser.is_active && !nextIsActive) {
    const { count } = await supabase
      .from('user_profiles')
      .select('id', { count: 'exact', head: true })
      .eq('role', 'admin')
      .eq('is_active', true);

    if ((count || 0) <= 1) {
      return NextResponse.json(
        { error: 'Cannot deactivate the last active admin user.' },
        { status: 400 }
      );
    }
  }

  const updates = {
    full_name:
      typeof body.full_name === 'string' && body.full_name.trim().length > 0
        ? body.full_name.trim()
        : targetUser.full_name,
    bio: typeof body.bio === 'string' ? body.bio.trim() || null : targetUser.bio,
    role: nextRole,
    is_active: nextIsActive,
  };

  const { data: updatedUser, error: updateError } = await supabase
    .from('user_profiles')
    .update(updates)
    .eq('id', id)
    .select('id,email,full_name,bio,role,is_active,created_at,updated_at')
    .single();

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: session.identity.id,
    targetUserId: id,
    actionType: 'user_updated',
    details: {
      previous_role: targetUser.role,
      new_role: updatedUser.role,
      previous_status: targetUser.is_active,
      new_status: updatedUser.is_active,
    },
  });

  return NextResponse.json({ user: updatedUser });
}
