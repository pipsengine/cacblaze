'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Initialize Google Analytics
export function useGoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run in production to avoid polluting data and ERR_ABORTED in dev
    if (process.env.NODE_ENV !== 'production') return;

    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!measurementId || measurementId === 'your-google-analytics-id-here') return;

    // Initialize gtag if not already loaded
    if (!window.dataLayer) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_path: pathname,
        send_page_view: false, // We'll send manually
      });
    }

    // Track page view
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);
}

// Track custom events
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
    return;
  }
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
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
export function trackCommentAction(action: 'post' | 'reply' | 'edit' | 'delete' | 'reaction', data: {
  articleId: string;
  commentId?: string;
  reactionType?: string;
}) {
  trackEvent('comment_action', {
    action_type: action,
    article_id: data.articleId,
    comment_id: data.commentId,
    reaction_type: data.reactionType,
  });
}

// Track content interactions
export function trackContentInteraction(interactionType: string, data: Record<string, any>) {
  trackEvent('content_interaction', {
    interaction_type: interactionType,
    ...data,
  });
}

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
