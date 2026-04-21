'use client';

import { useCallback, useEffect, useState } from 'react';

export interface OverviewResponse {
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

export interface SchedulerStatus {
  status: string;
  automation_enabled: boolean;
  approval_mode: string;
  next_article_generation: string;
  next_publishing: string;
  minimum_target_word_count: number;
}

export interface StatsResponse {
  total_articles: number;
  total_tips: number;
  published_articles: number;
  draft_articles: number;
  success_rate: number;
  average_word_count: number;
  minimum_target_word_count: number;
  category_breakdown: Record<string, number>;
}

export function useAdminWorkspaceData() {
  const [report, setReport] = useState<OverviewResponse | null>(null);
  const [scheduler, setScheduler] = useState<SchedulerStatus | null>(null);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const [reportRes, schedulerRes, statsRes] = await Promise.all([
        fetch('/api/ai-publishing/report/overview', { cache: 'no-store' }),
        fetch('/api/ai-publishing/scheduler/status', { cache: 'no-store' }),
        fetch('/api/ai-publishing/stats', { cache: 'no-store' }),
      ]);

      if (reportRes.ok) {
        setReport((await reportRes.json()) as OverviewResponse);
      }

      if (schedulerRes.ok) {
        setScheduler((await schedulerRes.json()) as SchedulerStatus);
      }

      if (statsRes.ok) {
        setStats((await statsRes.json()) as StatsResponse);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void reload();
  }, [reload]);

  return {
    report,
    scheduler,
    stats,
    loading,
    reload,
  };
}