'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { useAuth } from '@/contexts/AuthContext';

function formatRole(role: 'admin' | 'author' | 'user') {
  return role.charAt(0).toUpperCase() + role.slice(1);
}

export default function UserAccountMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  const displayName = user.full_name || user.username || user.email.split('@')[0] || 'Account';
  const initial = displayName.slice(0, 1).toUpperCase();

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 items-center gap-3 rounded-full border border-gray-200 bg-white px-3.5 py-2 shadow-sm transition hover:border-gray-300 hover:shadow-md"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          {initial}
        </div>
        <div className="hidden min-w-0 text-left xl:block">
          <p className="max-w-[8.5rem] truncate text-sm font-semibold leading-5 text-foreground 2xl:max-w-[10rem]">
            {displayName}
          </p>
          <div className="mt-0.5 hidden 2xl:flex">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              {formatRole(user.role)}
            </span>
          </div>
        </div>
        <Icon
          name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={16}
          className="shrink-0 text-secondary"
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-[21rem] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          <div className="border-b border-gray-100 bg-slate-50 px-5 py-5">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
                {initial}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-semibold text-foreground">{displayName}</p>
                <p className="truncate text-sm text-secondary">{user.email}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {formatRole(user.role)}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Active Session
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="space-y-1">
              <Link
                href="/account/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-50"
              >
                <Icon name="UserCircleIcon" size={18} />
                <div>
                  <p>Profile</p>
                  <p className="text-xs text-secondary">
                    Manage your identity, avatar, and account details.
                  </p>
                </div>
              </Link>
              <Link
                href="/account/security"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-50"
              >
                <Icon name="KeyIcon" size={18} />
                <div>
                  <p>Change Password</p>
                  <p className="text-xs text-secondary">
                    Update your password and review session security.
                  </p>
                </div>
              </Link>
              <Link
                href="/preferences"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-50"
              >
                <Icon name="AdjustmentsHorizontalIcon" size={18} />
                <div>
                  <p>Preferences</p>
                  <p className="text-xs text-secondary">
                    Personalization, notification, and reading preferences.
                  </p>
                </div>
              </Link>
              <Link
                href="/bookmarks"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-50"
              >
                <Icon name="BookmarkIcon" size={18} />
                <div>
                  <p>Library</p>
                  <p className="text-xs text-secondary">
                    Saved articles, bookmarks, and reading shortcuts.
                  </p>
                </div>
              </Link>
              {user.role === 'admin' && (
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-gray-50"
                >
                  <Icon name="ShieldCheckIcon" size={18} />
                  <div>
                    <p>Admin Workspace</p>
                    <p className="text-xs text-secondary">
                      System management, users, automation, and governance.
                    </p>
                  </div>
                </Link>
              )}
            </div>

            <div className="mt-3 border-t border-gray-100 pt-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  void signOut();
                }}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
              >
                <Icon name="ArrowLeftStartOnRectangleIcon" size={18} />
                <div>
                  <p>Sign Out</p>
                  <p className="text-xs text-red-400">End this session securely.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
