'use client';
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type AnalyticsValue = string | number | boolean | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

function getMeasurementId() {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-MKC05QTFGE';
}

function isAnalyticsEnabled() {
  const measurementId = getMeasurementId();
  return Boolean(
    process.env.NODE_ENV === 'production' &&
      measurementId &&
      measurementId !== 'your-google-analytics-id-here'
  );
}

function sanitizeParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));
}

// Initialize Google Analytics
export function useGoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageStartTimeRef = useRef<number>(Date.now());
  const trackedMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const measurementId = getMeasurementId();
    if (!measurementId) return;

    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
    pageStartTimeRef.current = Date.now();
    trackedMilestonesRef.current = new Set();

    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });

    const query = searchParams.get('q') || searchParams.get('query') || searchParams.get('search');
    if (query) {
      window.gtag('event', 'search', {
        search_term: query,
        page_path: pathname,
      });
    }

    const clickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const clickable = target?.closest('a, button') as HTMLAnchorElement | HTMLButtonElement | null;
      if (!clickable) return;

      const text = clickable.textContent?.trim()?.slice(0, 80) || undefined;
      const analyticsName = clickable.getAttribute('data-analytics');

      if (clickable instanceof HTMLAnchorElement) {
        const href = clickable.href;
        if (href && !href.startsWith(window.location.origin)) {
          window.gtag('event', 'click', {
            link_url: href,
            link_text: text,
            outbound: true,
          });
        }
      }

      if (analyticsName) {
        window.gtag('event', 'select_content', {
          content_type: 'cta',
          item_id: analyticsName,
          item_name: text,
          page_path: pathname,
        });
      }
    };

    const scrollListener = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const depth = Math.round((window.scrollY / maxScroll) * 100);
      const milestones = [25, 50, 75, 90];

      milestones.forEach((milestone) => {
        if (depth >= milestone && !trackedMilestonesRef.current.has(milestone)) {
          trackedMilestonesRef.current.add(milestone);
          window.gtag('event', 'scroll', {
            percent_scrolled: milestone,
            page_path: pathname,
          });
        }
      });
    };

    const sendEngagement = () => {
      const timeSpentSeconds = Math.round((Date.now() - pageStartTimeRef.current) / 1000);
      if (timeSpentSeconds >= 10) {
        window.gtag('event', 'user_engagement', {
          engagement_time_msec: timeSpentSeconds * 1000,
          page_path: pathname,
        });
      }
    };

    const loadListener = () => {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as
        | PerformanceNavigationTiming
        | undefined;

      if (navigationEntry) {
        const loadTime = Math.round(navigationEntry.loadEventEnd - navigationEntry.startTime);
        window.gtag('event', 'page_load_time', {
          page_path: pathname,
          value: loadTime,
        });
      }
    };

    document.addEventListener('click', clickListener);
    window.addEventListener('scroll', scrollListener, { passive: true });
    window.addEventListener('load', loadListener);
    window.addEventListener('pagehide', sendEngagement);

    return () => {
      document.removeEventListener('click', clickListener);
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('load', loadListener);
      window.removeEventListener('pagehide', sendEngagement);
      sendEngagement();
    };
  }, [pathname, searchParams]);
}

// Track custom events
export function trackEvent(eventName: string, eventParams: AnalyticsParams = {}) {
  const safeParams = sanitizeParams(eventParams);

  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[Analytics Event]', eventName, safeParams);
    }
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, safeParams);
  }
}

// Track article views with metadata
export function trackArticleView(articleData: {
  articleId: string;
  title: string;
  category: string;
  author: string;
  readTime: string;
}) {
  trackEvent('article_view', {
    article_id: articleData.articleId,
    article_title: articleData.title,
    article_category: articleData.category,
    article_author: articleData.author,
    read_time: articleData.readTime,
  });
}

// Track reader engagement (time spent)
export function trackEngagement(articleId: string, timeSpent: number) {
  trackEvent('article_engagement', {
    article_id: articleId,
    time_spent_seconds: timeSpent,
    engagement_level: timeSpent < 30 ? 'low' : timeSpent < 120 ? 'medium' : 'high',
  });
}

// Track scroll depth
export function trackScrollDepth(articleId: string, depth: number) {
  trackEvent('scroll_depth', {
    article_id: articleId,
    scroll_percentage: depth,
    scroll_milestone: depth >= 75 ? 'deep' : depth >= 50 ? 'medium' : 'shallow',
  });
}

// Track comment interactions
export function trackCommentAction(
  action: 'post' | 'reply' | 'edit' | 'delete' | 'reaction',
  data: {
    articleId: string;
    commentId?: string;
    reactionType?: string;
  }
) {
  trackEvent('comment_action', {
    action_type: action,
    article_id: data.articleId,
    comment_id: data.commentId,
    reaction_type: data.reactionType,
  });
}

// Track content interactions
export function trackContentInteraction(interactionType: string, data: AnalyticsParams) {
  trackEvent('content_interaction', {
    interaction_type: interactionType,
    ...data,
  });
}

export function trackSearch(query: string, resultsCount?: number) {
  trackEvent('search', {
    search_term: query,
    results_count: resultsCount,
  });
}

export function trackNewsletterSignup(source: string, frequency: string, topicsCount: number) {
  trackEvent('generate_lead', {
    source,
    frequency,
    topics_count: topicsCount,
  });
}

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
