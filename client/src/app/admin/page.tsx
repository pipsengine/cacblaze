'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';

interface OverviewResponse {
  totals: {
    total_articles: number;
    published_articles: number;
    draft_articles: number;
  };
  automation: {
    approval_mode: string;
    review_flow: string;
    minimum_target_word_count: number;
    weekly_article_target: number;
    weekly_tip_target: number;
    total_weekly_publish_events: number;
  };
  weekly_progress: {
    week_start: string;
    published_articles_this_week: number;
    published_tips_this_week: number;
  };
  latest_published: Array<{
    id: string;
    title: string;
    category: string;
    status: string;
    word_count: number;
    published_at: string;
    slug: string;
  }>;
}

interface SchedulerStatus {
  status: string;
  automation_enabled: boolean;
  approval_mode: string;
  next_article_generation: string;
  next_publishing: string;
  minimum_target_word_count: number;
}

export default function AdminDashboard() {
  const { user, userRole, loading } = useAuth();
  const [report, setReport] = useState<OverviewResponse | null>(null);
  const [scheduler, setScheduler] = useState<SchedulerStatus | null>(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [reportRes, schedulerRes] = await Promise.all([
          fetch('/api/ai-publishing/report/overview', { cache: 'no-store' }),
          fetch('/api/ai-publishing/scheduler/status', { cache: 'no-store' }),
        ]);

        if (reportRes.ok) {
          setReport(await reportRes.json());
        }

        if (schedulerRes.ok) {
          setScheduler(await schedulerRes.json());
        }
      } finally {
        setPageLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {loading || pageLoading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : !user || userRole !== 'admin' ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
                <Icon name="ShieldExclamationIcon" size={28} className="text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Access Restricted</h2>
              <p className="text-secondary">
                You need an administrator account to view the publishing status dashboard.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">Publishing Status Dashboard</h1>
                <p className="text-secondary">
                  Report-only visibility into autonomous generation, self-review, approval, and publishing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Published Articles</p>
                  <p className="text-3xl font-bold text-foreground">{report?.totals.published_articles ?? 0}</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Total Generated</p>
                  <p className="text-3xl font-bold text-foreground">{report?.totals.total_articles ?? 0}</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Approval Mode</p>
                  <p className="text-xl font-bold text-foreground">{scheduler?.approval_mode || 'Automatic'}</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Weekly Publish Target</p>
                  <p className="text-3xl font-bold text-foreground">{report?.automation.total_weekly_publish_events ?? 14}</p>
                  <p className="text-xs text-secondary mt-2">
                    {report?.automation.weekly_article_target ?? 7} articles + {report?.automation.weekly_tip_target ?? 7} tips
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Automation Summary</h2>
                  <div className="space-y-3 text-sm text-secondary">
                    <p><span className="font-semibold text-foreground">System status:</span> {scheduler?.status || 'active'}</p>
                    <p><span className="font-semibold text-foreground">Automation enabled:</span> {scheduler?.automation_enabled ? 'Yes' : 'No'}</p>
                    <p><span className="font-semibold text-foreground">Review flow:</span> {report?.automation.review_flow || scheduler?.next_publishing || 'Automatic pipeline'}</p>
                    <p><span className="font-semibold text-foreground">Draft queue:</span> {report?.totals.draft_articles ?? 0}</p>
                    <p><span className="font-semibold text-foreground">This week:</span> {report?.weekly_progress.published_articles_this_week ?? 0} articles and {report?.weekly_progress.published_tips_this_week ?? 0} tips</p>
                  </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Recently Published Content</h2>
                  <div className="space-y-4">
                    {(report?.latest_published || []).map((item) => (
                      <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between gap-3 border border-gray-100 rounded-xl p-4">
                        <div>
                          <p className="font-semibold text-foreground">{item.title}</p>
                          <p className="text-sm text-secondary">
                            {item.category} • {item.word_count} words • {new Date(item.published_at).toLocaleString()}
                          </p>
                        </div>
                        <span className="inline-flex px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
