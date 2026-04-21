import { NextResponse } from 'next/server';
import { getSupabaseAdminClient, requireAdminAccess } from '@/lib/auth/adminAccess';

export async function GET() {
  const { errorResponse } = await requireAdminAccess();
  if (errorResponse) return errorResponse;

  const supabase = await getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase admin client is unavailable.' }, { status: 500 });
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .select('id,email,full_name,bio,role,is_active,created_at,updated_at')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const users = data || [];

  return NextResponse.json({
    users,
    stats: {
      totalUsers: users.length,
      activeUsers: users.filter((user) => user.is_active).length,
      adminCount: users.filter((user) => user.role === 'admin').length,
      authorCount: users.filter((user) => user.role === 'author').length,
      regularUserCount: users.filter((user) => user.role === 'user').length,
      newUsersThisMonth: users.filter((user) => {
        const createdAt = user.created_at ? new Date(user.created_at) : null;
        if (!createdAt) return false;
        const now = new Date();
        return (
          createdAt.getFullYear() === now.getFullYear() && createdAt.getMonth() === now.getMonth()
        );
      }).length,
    },
  });
}
