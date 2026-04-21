'use client';

import { useAdminWorkspaceData } from '@/components/admin/useAdminWorkspaceData';

export default function AdminContentPage() {
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
      <section className="grid gap-6 lg:grid-cols-3">
        {[
          [
            'Published Inventory',
            report?.totals.published_articles ?? 0,
            'Live articles currently available on the platform.',
          ],
          [
            'Draft Backlog',
            report?.totals.draft_articles ?? 0,
            'Items waiting for further review or publishing.',
          ],
          [
            'Tips Library',
            stats?.total_tips ?? 0,
            'Short-form content inventory supporting engagement.',
          ],
        ].map(([label, value, meta]) => (
          <div key={String(label)} className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="mt-4 text-4xl font-semibold text-gray-900">{value}</p>
            <p className="mt-3 text-sm leading-6 text-gray-600">{meta}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Latest Published
          </p>
          <div className="mt-6 space-y-4">
            {(report?.latest_published || []).map((item) => (
              <div key={item.id} className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.category} • {item.word_count} words
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Published {new Date(item.published_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
            Editorial Priorities
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              Focus on moving draft inventory through a clear approval path so generated work does
              not pile up faster than governance capacity.
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              Use category mix and word-count trends to rebalance editorial effort toward topics
              with strategic value and index-ready depth.
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
              Keep release review tied to quality thresholds rather than raw publishing cadence to
              avoid undermining platform trust.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
