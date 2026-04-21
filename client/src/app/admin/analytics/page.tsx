'use client';

import { useAdminWorkspaceData } from '@/components/admin/useAdminWorkspaceData';

export default function AdminAnalyticsPage() {
  const { report, stats, loading } = useAdminWorkspaceData();

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-sky-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-4">
        {[
          ['Published Articles', stats?.published_articles ?? 0],
          ['Average Word Count', stats?.average_word_count ?? 0],
          ['Success Rate', `${Math.round((stats?.success_rate ?? 0) * 100)}%`],
          ['Weekly Target', report?.automation.total_weekly_publish_events ?? 14],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="mt-4 text-4xl font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Category Mix
          </p>
          <div className="mt-6 space-y-4">
            {Object.entries(stats?.category_breakdown || {})
              .sort((left, right) => right[1] - left[1])
              .slice(0, 8)
              .map(([category, count]) => {
                const total = Math.max(1, stats?.published_articles || 1);
                const width = Math.max(8, Math.round((count / total) * 100));
                return (
                  <div key={category}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900">{category}</span>
                      <span className="text-gray-600">{count} articles</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-sky-400" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Interpretation
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              Publishing analytics are most useful when paired with editorial intention; high output
              only matters if category balance, quality, and discoverability remain healthy.
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              Use average word count and success rate together to decide whether quality controls
              are too loose or too restrictive.
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              Future extension should add trend charts, author-level drilldowns, and exception
              reporting for underperforming categories.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
