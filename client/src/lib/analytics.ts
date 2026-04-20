'use client';

export {
  CACBLAZE_EVENT_EXAMPLES,
  GA_MEASUREMENT_ID,
  PAGE_TYPES,
  getPageType,
  isAnalyticsEnabled,
  sanitizeAnalyticsParams,
  trackArticleView,
  trackCommentAction,
  trackContentInteraction,
  trackEngagement,
  trackEvent,
  trackInternalSearch,
  trackNewsletterSignup,
  trackPageView,
  trackScrollDepth,
  trackSearch,
  trackSearchResultClick,
} from '@/lib/google-analytics';

export type {
  AnalyticsParams,
  CACBLAZEAnalyticsParams,
  PageType,
  PageViewPayload,
  UserStatus,
} from '@/lib/google-analytics';
