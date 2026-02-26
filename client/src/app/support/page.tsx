'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useAuth } from '@/contexts/AuthContext';

export default function SupportPage() {
  const { user, userRole } = useAuth();
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Support', href: '/support' },
  ];

  const isAdmin = !!user && userRole === 'admin';
  const adminHref = isAdmin ? '/admin' : `/login?next=${encodeURIComponent('/admin')}`;
  const socialKeysHref = isAdmin
    ? '/admin/settings/social-keys'
    : `/login?next=${encodeURIComponent('/admin/settings/social-keys')}`;
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Support</h1>
            <p className="text-gray-600">
              Quick access to account, administration, and help resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/login"
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <Icon name="ArrowRightOnRectangleIcon" className="text-indigo-600" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Sign In</h3>
              </div>
              <p className="text-sm text-gray-600">
                Access your account to manage preferences and saved content.
              </p>
            </Link>

            <Link
              href={adminHref}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Icon name="ShieldCheckIcon" className="text-emerald-600" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Admin Dashboard</h3>
              </div>
              <p className="text-sm text-gray-600">
                Restricted to administrators. Sign in with admin access to continue.
              </p>
            </Link>

            <Link
              href={socialKeysHref}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Icon name="Cog6ToothIcon" className="text-amber-600" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Social API Keys</h3>
              </div>
              <p className="text-sm text-gray-600">
                Admin-only page for managing encrypted social media credentials.
              </p>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900 mb-2">Help & Contact</h4>
              <p className="text-sm text-gray-600">
                Having trouble signing in or need elevated access? Reach out to your site
                administrator or contact support at{' '}
                <a className="text-primary font-semibold" href="mailto:support@cacblaze.com">
                  support@cacblaze.com
                </a>
                .
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900 mb-2">Privacy & Security</h4>
              <p className="text-sm text-gray-600">
                Your credentials are encrypted and never displayed after saving. Review our{' '}
                <Link href="/privacy" className="text-primary font-semibold">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms" className="text-primary font-semibold">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
