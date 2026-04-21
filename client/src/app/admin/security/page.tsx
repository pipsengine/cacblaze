'use client';

import { useState } from 'react';
import ActivityLog from '@/app/admin/components/ActivityLog';
import PermissionsView from '@/app/admin/components/PermissionsView';
import Icon from '@/components/ui/AppIcon';
import { adminCardThemes } from '@/components/admin/cardThemes';

export default function AdminSecurityPage() {
  const [showPermissions, setShowPermissions] = useState(false);

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Governance
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-gray-900">Security and access posture</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600">
            <div className={`rounded-3xl border p-5 ${adminCardThemes.rose.surface}`}>
              Protect the platform by making privileged actions auditable, role assignment
              deliberate, and last-admin scenarios impossible to create accidentally.
            </div>
            <div className={`rounded-3xl border p-5 ${adminCardThemes.amber.surface}`}>
              Centralize sensitive integration settings under server-side authorization instead of
              browser-issued mutations.
            </div>
            <div className={`rounded-3xl border p-5 ${adminCardThemes.indigo.surface}`}>
              Extend this section later with 2FA enforcement, session inventory, IP/device
              awareness, and credential rotation workflows.
            </div>
          </div>
          <button
            onClick={() => setShowPermissions(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400"
          >
            <Icon name="ShieldCheckIcon" size={18} />
            Review Role Access Model
          </button>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Operational Checklist
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              'Ensure there is always more than one viable admin path before changing elevated roles.',
              'Use the audit trail to review unexpected role, status, or settings changes.',
              'Keep development fallback authentication isolated from production deployment paths.',
              'Treat API key management, password management, and role governance as separate responsibilities.',
            ].map((item, index) => {
              const themes = [
                adminCardThemes.rose,
                adminCardThemes.sky,
                adminCardThemes.amber,
                adminCardThemes.emerald,
              ] as const;

              return (
                <div
                  key={item}
                  className={`rounded-3xl border p-5 text-sm leading-7 text-gray-600 ${themes[index].surface}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
        <ActivityLog />
      </div>

      {showPermissions && <PermissionsView onClose={() => setShowPermissions(false)} />}
    </div>
  );
}
