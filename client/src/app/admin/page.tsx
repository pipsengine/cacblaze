'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { adminNavigationItems } from '@/lib/admin/navigation';
import { useAdminWorkspaceData } from '@/components/admin/useAdminWorkspaceData';
import { adminCardThemes } from '@/components/admin/cardThemes';

function formatPercentage(value: number | undefined) {
  return `${Math.round((value || 0) * 100)}%`;
}

export default function AdminOverviewPage() {
  const { report, scheduler, stats, loading } = useAdminWorkspaceData();
  const overviewMetricThemes = [
    adminCardThemes.sky,
    adminCardThemes.violet,
    adminCardThemes.amber,
    adminCardThemes.emerald,
  ] as const;
  const rhythmThemes = [adminCardThemes.indigo, adminCardThemes.rose, adminCardThemes.cyan] as const;
  const moduleThemes = [
    adminCardThemes.sky,
    adminCardThemes.emerald,
    adminCardThemes.violet,
    adminCardThemes.amber,
    adminCardThemes.rose,
    adminCardThemes.indigo,
  ] as const;

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-sky-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-[2rem] border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700/80">
                Executive Summary
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-gray-900">
                Operate CACBLAZE from one command surface
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
                This workspace separates governance, content operations, automation health,
                analytics, and system settings into durable modules so the administration model can
                grow without reworking navigation or responsibilities.
              </p>
            </div>
            <div className="rounded-3xl border border-sky-200 bg-sky-50 px-5 py-4 text-sm text-sky-800">
              <p className="font-semibold">Automation mode</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">
                {scheduler?.approval_mode || 'Automatic'}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-sky-700/80">
                {scheduler?.automation_enabled ? 'Automation enabled' : 'Automation disabled'}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: 'Published Articles',
                value: report?.totals.published_articles ?? 0,
                meta: 'Live inventory currently available to readers',
                icon: 'GlobeAltIcon',
              },
              {
                label: 'Generated Items',
                value: report?.totals.total_articles ?? 0,
                meta: 'Total generated long-form content in the system',
                icon: 'DocumentTextIcon',
              },
              {
                label: 'Draft Queue',
                value: report?.totals.draft_articles ?? 0,
                meta: 'Items waiting for review or publishing decisions',
                icon: 'QueueListIcon',
              },
              {
                label: 'Success Rate',
                value: formatPercentage(stats?.success_rate),
                meta: 'Current publishing quality acceptance snapshot',
                icon: 'ChartBarSquareIcon',
              },
            ].map((metric, index) => {
              const theme = overviewMetricThemes[index];

              return (
                <div key={metric.label} className={`rounded-3xl border p-5 ${theme.surface}`}>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${theme.iconWrap} ${theme.iconColor}`}
                  >
                    <Icon name={metric.icon} size={18} />
                  </div>
                </div>
                <p className={`mt-6 text-3xl font-semibold ${theme.value}`}>{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">{metric.meta}</p>
              </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Operating Rhythm
          </p>
          <div className="mt-6 space-y-5">
            <div className={`rounded-3xl border p-5 ${rhythmThemes[0].surface}`}>
              <p className="text-sm text-gray-600">Weekly release target</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {report?.automation.total_weekly_publish_events ?? 14}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                {report?.automation.weekly_article_target ?? 7} articles and{' '}
                {report?.automation.weekly_tip_target ?? 7} tips planned weekly.
              </p>
            </div>
            <div className={`rounded-3xl border p-5 ${rhythmThemes[1].surface}`}>
              <p className="text-sm text-gray-600">This week so far</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {report?.weekly_progress.published_articles_this_week ?? 0} /{' '}
                {report?.weekly_progress.published_tips_this_week ?? 0}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Articles published this week / tips published this week.
              </p>
            </div>
            <div className={`rounded-3xl border p-5 ${rhythmThemes[2].surface}`}>
              <p className="text-sm text-gray-600">Average word count</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900">
                {stats?.average_word_count ?? 0}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Target floor: {stats?.minimum_target_word_count ?? 2000}+ words.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                Workspace Modules
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-gray-900">
                Route-based admin functions
              </h3>
            </div>
            <Link
              href="/admin/users"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
            >
              <Icon name="ArrowRightIcon" size={16} />
              Open Users
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {adminNavigationItems
              .filter((item) => item.href !== '/admin')
              .map((item, index) => {
                const theme = moduleThemes[index % moduleThemes.length];

                return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`rounded-3xl border p-5 transition hover:bg-white ${theme.surface}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${theme.iconWrap} ${theme.iconColor}`}
                  >
                    <Icon name={item.icon} size={18} />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">{item.label}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </Link>
                );
              })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Recent Releases
          </p>
          <div className="mt-6 space-y-4">
            {(report?.latest_published || []).slice(0, 5).map((item, index) => {
              const theme = moduleThemes[index % moduleThemes.length];

              return (
              <div key={item.id} className={`rounded-3xl border p-5 ${theme.surface}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.category} • {item.word_count} words
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Published {new Date(item.published_at).toLocaleString()}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
