import AdminShell from '@/components/admin/AdminShell';
import { getAuthenticatedIdentity } from '@/lib/auth/adminAccess';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAuthenticatedIdentity();

  if (!session) {
    redirect('/login');
  }

  if (!session.identity.is_active || session.identity.role !== 'admin') {
    redirect('/');
  }

  return <AdminShell identity={session.identity}>{children}</AdminShell>;
}
