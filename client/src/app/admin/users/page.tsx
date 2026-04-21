'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import UserList from '@/app/admin/components/UserList';
import UserProfile from '@/app/admin/components/UserProfile';
import ActivityLog from '@/app/admin/components/ActivityLog';
import StatsCards from '@/app/admin/components/StatsCards';
import PermissionsView from '@/app/admin/components/PermissionsView';
import { UserStats } from '@/types/user';

export default function AdminUsersPage() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [showPermissions, setShowPermissions] = useState(false);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              Identity Governance
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-gray-900">Users and access management</h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600">
              Control role assignment, activation state, user detail records, and auditable
              lifecycle changes from one section built around server-authorized administration APIs.
            </p>
          </div>
          <button
            onClick={() => setShowPermissions(true)}
            className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            <Icon name="ShieldCheckIcon" size={18} />
            Roles & Permissions
          </button>
        </div>
      </section>

      {userStats && <StatsCards stats={userStats} />}

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
          <UserList
            onUserSelect={setSelectedUserId}
            onStatsChange={setUserStats}
            selectedUserId={selectedUserId}
          />
        </div>
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
          <UserProfile userId={selectedUserId} />
        </div>
      </div>

      <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
        <ActivityLog />
      </div>

      {showPermissions && <PermissionsView onClose={() => setShowPermissions(false)} />}
    </div>
  );
}
