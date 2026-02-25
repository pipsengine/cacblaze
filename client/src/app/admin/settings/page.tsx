'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Breadcrumb from '@/components/common/Breadcrumb';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function AdminSettingsIndexPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/homepage' },
    { name: 'Admin', href: '/admin' },
    { name: 'Settings', href: '/admin/settings' },
  ];

  const items = [
    {
      id: 'settings_social_keys',
      label: 'Social Media API Keys',
      description: 'Manage encrypted credentials for social platforms.',
      href: '/admin/settings/social-keys',
      icon: 'Cog6ToothIcon' as const,
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Admin Settings</h1>
            <p className="text-gray-600">Configure administrative features and integrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}
                  >
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
