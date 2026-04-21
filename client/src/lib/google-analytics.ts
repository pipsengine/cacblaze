'use client';

const DEFAULT_GA_MEASUREMENT_ID = 'G-EB3LB77X4H';
const GA_MEASUREMENT_ID_PATTERN = /G-[A-Z0-9]+/i;

const ANALYTICS_ENV_CANDIDATES = [
  {
    source: 'NEXT_PUBLIC_GA_MEASUREMENT_ID',
    value: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  {
    source: 'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID',
    value: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },
] as const;

export interface AnalyticsStatus {
  enabled: boolean;
  measurementId: string;
  configuredSource: string;
  usingFallback: boolean;
}

function resolveMeasurementId() {
  for (const candidate of ANALYTICS_ENV_CANDIDATES) {
    const trimmedCandidate = candidate.value?.trim();
    if (!trimmedCandidate) {
      continue;
    }

    const matchedMeasurementId = trimmedCandidate.match(GA_MEASUREMENT_ID_PATTERN)?.[0];
    if (matchedMeasurementId) {
      return {
        measurementId: matchedMeasurementId.toUpperCase(),
        configuredSource: candidate.source,
        usingFallback: false,
      };
    }
  }

  return {
    measurementId: DEFAULT_GA_MEASUREMENT_ID,
    configuredSource: 'default_fallback',
    usingFallback: true,
  };
}

const analyticsResolution = resolveMeasurementId();

export const GA_MEASUREMENT_ID = analyticsResolution.measurementId;

export const PAGE_TYPES = [
  'home',
  'hub',
  'category',
  'topic',
  'article',
  'search',
  'contributor',
  'newsletter',
  'contact',
  'support',
  'legal',
  'static_page',
] as const;

export type PageType = (typeof PAGE_TYPES)[number];

export type UserStatus = 'anonymous' | 'known';

export type AnalyticsPrimitive = string | number | boolean;
export type AnalyticsParams = Record<string, AnalyticsPrimitive | null | undefined>;

export interface CACBLAZEAnalyticsParams extends AnalyticsParams {
  page_type?: PageType;
  content_type?: string;
  category_name?: string;
  topic_name?: string;
  article_title?: string;
  article_slug?: string;
  author_name?: string;
  content_group?: string;
  search_term?: string;
  search_results_count?: number;
  result_position?: number;
  newsletter_topic?: string;
  newsletter_frequency?: string;
  cta_location?: string;
  section_name?: string;
  link_text?: string;
  destination_url?: string;
  user_status?: UserStatus;
  contributor_interest_area?: string;
}

export interface PageViewPayload extends CACBLAZEAnalyticsParams {
  page_path: string;
  page_title?: string;
  page_location?: string;
}

type GtagCommand = 'config' | 'event' | 'set' | 'js' | 'consent';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, params?: AnalyticsParams) => void;
  }
}

export function isAnalyticsEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

export function getAnalyticsStatus(): AnalyticsStatus {
  return {
    enabled: isAnalyticsEnabled(),
    measurementId: analyticsResolution.measurementId,
    configuredSource: analyticsResolution.configuredSource,
    usingFallback: analyticsResolution.usingFallback,
  };
}

export function sanitizeAnalyticsParams<T extends AnalyticsParams>(params?: T): Partial<T> {
  if (!params) {
    return {} as Partial<T>;
  }

  return Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== ''
    )
  ) as Partial<T>;
}

export function getPageType(pathname: string): PageType {
  if (pathname === '/' || pathname === '/homepage') return 'home';
  if (pathname.startsWith('/search')) return 'search';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/support')) return 'support';
  if (
    pathname.startsWith('/privacy') ||
    pathname.startsWith('/terms') ||
    pathname.startsWith('/cookies')
  ) {
    return 'legal';
  }
  if (pathname.startsWith('/guides/') || pathname.startsWith('/howto/')) return 'article';
  if (
    pathname === '/guides' ||
    pathname === '/howto' ||
    pathname === '/reviews' ||
    pathname === '/technology'
  ) {
    return 'category';
  }
  if (pathname.startsWith('/topics')) return 'topic';
  if (pathname.includes('contributors') || pathname.includes('contributor')) return 'contributor';
  if (pathname.includes('newsletter')) return 'newsletter';
  if (pathname === '/education' || pathname === '/local-resources' || pathname === '/job-market') {
    return 'hub';
  }
  return 'static_page';
}

function canTrack(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function' && isAnalyticsEnabled();
}

function logDebug(eventName: string, params: AnalyticsParams) {
  if (process.env.NODE_ENV !== 'production') {
    console.info('[GA disabled]', eventName, params);
  }
}

export function trackPageView(payload: PageViewPayload): void {
  const safePayload = sanitizeAnalyticsParams({
    page_type: payload.page_type ?? getPageType(payload.page_path),
    ...payload,
  });

  if (!canTrack()) {
    logDebug('page_view', safePayload);
    return;
  }

  window.gtag?.('event', 'page_view', safePayload);
}

export function trackEvent<T extends CACBLAZEAnalyticsParams = CACBLAZEAnalyticsParams>(
  eventName: string,
  params?: T
): void {
  const safeParams = sanitizeAnalyticsParams(params);

  if (!canTrack()) {
    logDebug(eventName, safeParams);
    return;
  }

  window.gtag?.('event', eventName, safeParams);
}

export function trackInternalSearch(params: {
  searchTerm: string;
  searchResultsCount?: number;
  pagePath?: string;
  sectionName?: string;
  searchType?: 'standard' | 'advanced' | 'filter_refined';
  emptyResults?: boolean;
}) {
  trackEvent('internal_search', {
    page_type: 'search',
    search_term: params.searchTerm,
    search_results_count: params.searchResultsCount,
    section_name: params.sectionName,
    content_type: params.searchType ?? 'standard',
    page_path: params.pagePath,
    empty_results: params.emptyResults,
  });
}

export function trackSearchResultClick(params: {
  searchTerm: string;
  resultTitle: string;
  resultUrl: string;
  resultPosition: number;
  categoryName?: string;
}) {
  trackEvent('search_result_click', {
    page_type: 'search',
    search_term: params.searchTerm,
    article_title: params.resultTitle,
    destination_url: params.resultUrl,
    result_position: params.resultPosition,
    category_name: params.categoryName,
  });
}

export function trackArticleView(articleData: {
  articleId: string;
  title: string;
  category: string;
  author: string;
  readTime: string;
  slug?: string;
}) {
  trackEvent('article_view', {
    page_type: 'article',
    content_type: 'article',
    article_id: articleData.articleId,
    article_title: articleData.title,
    article_slug: articleData.slug,
    category_name: articleData.category,
    author_name: articleData.author,
    estimated_read_time: articleData.readTime,
    content_group: articleData.category,
  });
}

export function trackEngagement(
  articleId: string,
  timeSpent: number,
  params?: CACBLAZEAnalyticsParams
) {
  trackEvent('engaged_reading_session', {
    article_id: articleId,
    page_type: 'article',
    engagement_time_seconds: timeSpent,
    engagement_level: timeSpent < 30 ? 'low' : timeSpent < 120 ? 'medium' : 'high',
    ...params,
  });
}

export function trackScrollDepth(
  articleId: string,
  depth: number,
  params?: CACBLAZEAnalyticsParams
) {
  trackEvent('scroll_depth', {
    article_id: articleId,
    page_type: 'article',
    percent_scrolled: depth,
    content_completion: depth >= 90,
    ...params,
  });
}

export function trackCommentAction(
  action: 'post' | 'reply' | 'edit' | 'delete' | 'reaction',
  data: {
    articleId: string;
    commentId?: string;
    reactionType?: string;
  }
) {
  trackEvent('comment_action', {
    page_type: 'article',
    article_id: data.articleId,
    comment_id: data.commentId,
    reaction_type: data.reactionType,
    action_type: action,
  });
}

export function trackContentInteraction(
  interactionType: string,
  data: CACBLAZEAnalyticsParams = {}
) {
  trackEvent('content_interaction', {
    interaction_type: interactionType,
    ...data,
  });
}

export function trackSearch(query: string, resultsCount?: number) {
  trackInternalSearch({
    searchTerm: query,
    searchResultsCount: resultsCount,
  });
}

export function trackNewsletterSignup(source: string, frequency: string, topicsCount: number) {
  trackEvent('newsletter_signup_completed', {
    page_type: 'newsletter',
    cta_location: source,
    newsletter_frequency: frequency,
    selected_topic_count: topicsCount,
  });
}

export const CACBLAZE_EVENT_EXAMPLES = {
  homepageCtaClick: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('homepage_cta_click', {
      page_type: 'home',
      cta_location: 'homepage_hero',
      ...params,
    }),
  exploreGuidesClick: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('explore_guides_click', {
      page_type: 'home',
      section_name: 'homepage_guides',
      ...params,
    }),
  topicHubView: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('topic_hub_view', {
      page_type: 'hub',
      ...params,
    }),
  categoryView: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('category_view', {
      page_type: 'category',
      ...params,
    }),
  featuredArticleClick: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('featured_article_click', params),
  topGuideClick: (params: CACBLAZEAnalyticsParams = {}) => trackEvent('top_guide_click', params),
  newsletterStarted: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('newsletter_signup_started', {
      page_type: 'newsletter',
      ...params,
    }),
  newsletterTopicSelected: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('newsletter_topic_selected', {
      page_type: 'newsletter',
      ...params,
    }),
  newsletterFrequencySelected: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('newsletter_frequency_selected', {
      page_type: 'newsletter',
      ...params,
    }),
  contributorCtaClick: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('contributor_cta_click', {
      page_type: 'contributor',
      ...params,
    }),
  contributorApplicationStarted: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('contributor_application_started', {
      page_type: 'contributor',
      ...params,
    }),
  contributorApplicationSubmitted: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('contributor_application_submitted', {
      page_type: 'contributor',
      ...params,
    }),
  contactFormSubmitted: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('contact_form_submitted', {
      page_type: 'contact',
      ...params,
    }),
  supportRequestSubmitted: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('support_request_submitted', {
      page_type: 'support',
      ...params,
    }),
  footerLinkClick: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('footer_link_click', params),
  legalPageView: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('legal_page_view', {
      page_type: 'legal',
      ...params,
    }),
  fileDownload: (params: CACBLAZEAnalyticsParams = {}) => trackEvent('file_download', params),
  outboundLinkClick: (params: CACBLAZEAnalyticsParams = {}) =>
    trackEvent('outbound_link_click', params),
  shareContent: (params: CACBLAZEAnalyticsParams = {}) => trackEvent('share_content', params),
};
