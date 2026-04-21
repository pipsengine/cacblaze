'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function AdminSettingsIndexPage() {
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
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Configuration
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900">Administrative settings</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
          Keep sensitive integrations and system-level administration settings organized into
          dedicated modules so operational ownership can scale cleanly.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon name={item.icon} size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
