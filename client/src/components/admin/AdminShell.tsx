'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { adminNavigationSections, getAdminNavItem } from '@/lib/admin/navigation';

type AdminShellProps = {
  children: React.ReactNode;
  identity: {
    full_name?: string;
    email: string;
    role: 'admin' | 'author' | 'user';
    isDevAuthSession: boolean;
  };
};

function formatRole(role: AdminShellProps['identity']['role']) {
  return role.charAt(0).toUpperCase() + role.slice(1);
}

export default function AdminShell({ children, identity }: AdminShellProps) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const activeItem = useMemo(() => getAdminNavItem(pathname), [pathname]);
  const pageTitle = activeItem?.label || 'Admin';
  const pageDescription =
    activeItem?.description ||
    'Operational command center for CACBLAZE administration and system governance.';

  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <div className="relative flex min-h-screen">
        <aside className="hidden w-80 shrink-0 border-r border-gray-200 bg-white xl:flex xl:flex-col">
          <div className="border-b border-gray-200 px-7 py-7">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 ring-1 ring-sky-400/30">
                <Icon name="ShieldCheckIcon" size={22} className="text-sky-300" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-600/80">CACBLAZE</p>
                <h1 className="text-xl font-semibold text-gray-900">Admin Command</h1>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              A dedicated operations workspace for user governance, publishing controls, analytics,
              and integrations.
            </p>
          </div>

          <div className="flex-1 space-y-8 overflow-y-auto px-5 py-6">
            {adminNavigationSections.map((section) => (
              <div key={section.id}>
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                  {section.label}
                </p>
                <div className="mt-3 space-y-1.5">
                  {section.items.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== '/admin' && pathname.startsWith(`${item.href}/`));

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`group block rounded-2xl border px-4 py-3 transition ${
                          isActive
                            ? 'border-sky-200 bg-sky-50 text-gray-900 shadow-sm'
                            : 'border-transparent bg-gray-50 text-gray-700 hover:border-gray-200 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl ${
                              isActive
                                ? 'bg-sky-100 text-sky-700'
                                : 'bg-white text-gray-600 border border-gray-200'
                            }`}
                          >
                            <Icon name={item.icon} size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <span className="font-semibold">{item.label}</span>
                              {item.badge && (
                                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gray-600">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                  {(identity.full_name || identity.email || 'A').slice(0, 1).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">
                    {identity.full_name || 'Administrator'}
                  </p>
                  <p className="truncate text-sm text-gray-500">{identity.email}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                  {formatRole(identity.role)}
                </span>
                {identity.isDevAuthSession && (
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                    Dev Session
                  </span>
                )}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-gray-200 bg-gray-50/95 backdrop-blur-xl">
            <div className="flex items-center gap-4 px-5 py-4 md:px-8 xl:px-10">
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 xl:hidden"
              >
                <Icon name="Bars3Icon" size={20} />
              </button>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
                  Operations Console
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{pageTitle}</h2>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                    Future-ready administration workspace
                  </span>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">{pageDescription}</p>
              </div>

              <div className="hidden items-center gap-3 lg:flex">
                <Link
                  href="/account/profile"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  <Icon name="UserCircleIcon" size={18} />
                  Account
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                  View Site
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 px-5 py-6 md:px-8 xl:px-10 xl:py-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>

      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
            aria-label="Close admin navigation"
          />
          <div className="relative h-full w-[88%] max-w-sm border-r border-gray-200 bg-white p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-sky-600/80">CACBLAZE</p>
                <h3 className="text-lg font-semibold text-gray-900">Admin Navigation</h3>
              </div>
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700"
              >
                <Icon name="XMarkIcon" size={18} />
              </button>
            </div>
            <div className="space-y-8 overflow-y-auto pb-10">
              {adminNavigationSections.map((section) => (
                <div key={section.id}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                    {section.label}
                  </p>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileSidebarOpen(false)}
                        className={`flex items-start gap-3 rounded-2xl px-4 py-3 ${
                          pathname === item.href || pathname.startsWith(`${item.href}/`)
                            ? 'bg-sky-50 text-gray-900'
                            : 'bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600">
                          <Icon name={item.icon} size={18} />
                        </div>
                        <div>
                          <p className="font-semibold">{item.label}</p>
                          <p className="mt-1 text-xs leading-5 text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
