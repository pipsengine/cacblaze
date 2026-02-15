import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/homepage');
  }

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role,is_active')
    .eq('id', user.id)
    .single();

  if (!profile || !profile.is_active || profile.role !== 'admin') {
    redirect('/homepage');
  }

  return <>{children}</>;
}
