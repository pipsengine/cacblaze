'use client';

import { useAdminWorkspaceData } from '@/components/admin/useAdminWorkspaceData';
import Icon from '@/components/ui/AppIcon';
import { adminCardThemes } from '@/components/admin/cardThemes';

export default function AdminAutomationPage() {
  const { report, scheduler, loading } = useAdminWorkspaceData();
  const schedulerThemes = [
    adminCardThemes.emerald,
    adminCardThemes.indigo,
    adminCardThemes.sky,
    adminCardThemes.amber,
  ] as const;
  const schedulerIcons = ['BoltIcon', 'ShieldCheckIcon', 'RocketLaunchIcon', 'DocumentTextIcon'] as const;
  const cadenceThemes = [adminCardThemes.violet, adminCardThemes.rose, adminCardThemes.cyan] as const;

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-sky-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Scheduler Health
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['System Status', scheduler?.status || 'active'],
              ['Approval Mode', scheduler?.approval_mode || 'Automatic'],
              ['Automation', scheduler?.automation_enabled ? 'Enabled' : 'Disabled'],
              ['Min Word Count', `${scheduler?.minimum_target_word_count ?? 2000}+`],
            ].map(([label, value], index) => {
              const theme = schedulerThemes[index];

              return (
                <div key={String(label)} className={`rounded-3xl border p-5 ${theme.surface}`}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-gray-600">{label}</p>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl ${theme.iconWrap} ${theme.iconColor}`}
                    >
                      <Icon name={schedulerIcons[index]} size={18} />
                    </div>
                  </div>
                  <p className={`mt-3 text-2xl font-semibold ${theme.value}`}>{value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Cadence
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600">
            <div className={`rounded-3xl border p-5 ${cadenceThemes[0].surface}`}>
              Next article generation: {scheduler?.next_article_generation || 'Not scheduled'}
            </div>
            <div className={`rounded-3xl border p-5 ${cadenceThemes[1].surface}`}>
              Next publishing run: {scheduler?.next_publishing || 'Not scheduled'}
            </div>
            <div className={`rounded-3xl border p-5 ${cadenceThemes[2].surface}`}>
              Weekly target: {report?.automation.total_weekly_publish_events ?? 14} releases.
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
          Future-ready automation process
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            'Separate generation, quality scoring, and publishing approval into independent controls so each stage can evolve without breaking the pipeline.',
            'Introduce alerting around scheduler misses, stalled drafts, and declining success rate so automation failure becomes visible before it affects output.',
            'Move from report-only monitoring toward controlled interventions such as pause, retry, defer, and priority overrides when operational maturity requires it.',
          ].map((item, index) => {
            const theme = cadenceThemes[index];

            return (
            <div key={item} className={`rounded-3xl border p-5 text-sm leading-7 text-gray-600 ${theme.surface}`}>
              {item}
            </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
