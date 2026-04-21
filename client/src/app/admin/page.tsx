'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import UserList from '@/app/admin/components/UserList';
import UserProfile from '@/app/admin/components/UserProfile';
import ActivityLog from '@/app/admin/components/ActivityLog';
import StatsCards from '@/app/admin/components/StatsCards';
import PermissionsView from '@/app/admin/components/PermissionsView';
import { UserStats } from '@/types/user';

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

interface StatsResponse {
  total_articles: number;
  total_tips: number;
  published_articles: number;
  draft_articles: number;
  success_rate: number;
  average_word_count: number;
  minimum_target_word_count: number;
  category_breakdown: Record<string, number>;
}

export default function AdminDashboard() {
  const { user, userRole, loading } = useAuth();
  const [report, setReport] = useState<OverviewResponse | null>(null);
  const [scheduler, setScheduler] = useState<SchedulerStatus | null>(null);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [showPermissions, setShowPermissions] = useState(false);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [reportRes, schedulerRes, statsRes] = await Promise.all([
          fetch('/api/ai-publishing/report/overview', { cache: 'no-store' }),
          fetch('/api/ai-publishing/scheduler/status', { cache: 'no-store' }),
          fetch('/api/ai-publishing/stats', { cache: 'no-store' }),
        ]);

        if (reportRes.ok) {
          setReport(await reportRes.json());
        }

        if (schedulerRes.ok) {
          setScheduler(await schedulerRes.json());
        }

        if (statsRes.ok) {
          setStats(await statsRes.json());
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Average Word Count</p>
                  <p className="text-3xl font-bold text-foreground">{stats?.average_word_count ?? 0}</p>
                  <p className="text-xs text-secondary mt-2">
                    Target: {stats?.minimum_target_word_count ?? 2000}+ words
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Publishing Success Rate</p>
                  <p className="text-3xl font-bold text-foreground">
                    {Math.round((stats?.success_rate ?? 0) * 100)}%
                  </p>
                  <p className="text-xs text-secondary mt-2">Quality and approval readiness snapshot</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm text-secondary mb-2">Tips Generated</p>
                  <p className="text-3xl font-bold text-foreground">{stats?.total_tips ?? 0}</p>
                  <p className="text-xs text-secondary mt-2">Additional short-form engagement inventory</p>
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

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Growth and SEO Snapshot</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-secondary">Indexed-ready long form</p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{stats?.average_word_count ?? 0}</p>
                      <p className="text-xs text-secondary mt-1">average words per published article</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-secondary">Weekly output</p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{report?.automation.total_weekly_publish_events ?? 14}</p>
                      <p className="text-xs text-secondary mt-1">planned content releases every week</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-secondary">Published inventory</p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{stats?.published_articles ?? 0}</p>
                      <p className="text-xs text-secondary mt-1">articles available for search and readers</p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-secondary">Quality pass rate</p>
                      <p className="mt-2 text-2xl font-bold text-foreground">{Math.round((stats?.success_rate ?? 0) * 100)}%</p>
                      <p className="text-xs text-secondary mt-1">content flow accepted for publishing</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Top Category Mix</h2>
                  <div className="space-y-4">
                    {Object.entries(stats?.category_breakdown || {})
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 6)
                      .map(([category, count]) => {
                        const total = Math.max(1, stats?.published_articles || 1);
                        const width = Math.max(8, Math.round((count / total) * 100));

                        return (
                          <div key={category}>
                            <div className="mb-1 flex items-center justify-between text-sm">
                              <span className="font-medium text-foreground">{category}</span>
                              <span className="text-secondary">{count} articles</span>
                            </div>
                            <div className="h-2 rounded-full bg-gray-100">
                              <div className="h-2 rounded-full bg-primary" style={{ width: `${width}%` }} />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              <section className="mt-10 space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">User Administration</h2>
                    <p className="text-secondary">
                      Manage roles, activation state, and audit visibility through server-protected admin APIs.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPermissions(true)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-foreground hover:bg-gray-50"
                  >
                    <Icon name="ShieldCheckIcon" size={18} />
                    View Roles & Permissions
                  </button>
                </div>

                {userStats && <StatsCards stats={userStats} />}

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6">
                    <h3 className="mb-4 text-xl font-bold text-foreground">Users</h3>
                    <UserList
                      onUserSelect={setSelectedUserId}
                      onStatsChange={setUserStats}
                      selectedUserId={selectedUserId}
                    />
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-6">
                    <UserProfile userId={selectedUserId} />
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <ActivityLog />
                </div>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
      {showPermissions && <PermissionsView onClose={() => setShowPermissions(false)} />}
    </>
  );
}
