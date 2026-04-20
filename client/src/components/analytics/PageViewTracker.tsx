'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getPageType, trackEvent, trackPageView } from '@/lib/google-analytics';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrlRef = useRef<string>('');

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const search = searchParams?.toString() ?? '';
    const pagePath = search ? `${pathname}?${search}` : pathname;

    if (lastTrackedUrlRef.current === pagePath) {
      return;
    }

    lastTrackedUrlRef.current = pagePath;

    trackPageView({
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
      page_type: getPageType(pathname),
    });

    const pageType = getPageType(pathname);

    if (pageType === 'legal') {
      trackEvent('legal_page_view', {
        page_type: 'legal',
        page_path: pagePath,
        page_title: document.title,
      });
    }

    if (pageType === 'support') {
      trackEvent('support_page_view', {
        page_type: 'support',
        page_path: pagePath,
        page_title: document.title,
      });
    }

    if (pageType === 'contact') {
      trackEvent('contact_page_view', {
        page_type: 'contact',
        page_path: pagePath,
        page_title: document.title,
      });
    }

    if (pageType === 'hub') {
      trackEvent('topic_hub_view', {
        page_type: 'hub',
        page_path: pagePath,
        page_title: document.title,
      });
    }

    if (pageType === 'category') {
      trackEvent('category_view', {
        page_type: 'category',
        page_path: pagePath,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}