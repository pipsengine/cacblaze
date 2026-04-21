'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

const DOWNLOAD_FILE_PATTERN = /\.(pdf|doc|docx|xls|xlsx|csv|zip|ppt|pptx)$/i;

export default function GlobalAnalyticsListeners() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute('href') || anchor.href || '';
      const linkText =
        anchor.textContent?.trim().slice(0, 120) || anchor.getAttribute('aria-label') || 'link';
      const footerAncestor = anchor.closest('footer');
      const sectionName =
        anchor.dataset.analyticsSection || (footerAncestor ? 'footer' : undefined);
      const isExternal = Boolean(anchor.href && !anchor.href.startsWith(window.location.origin));
      const isDownload = DOWNLOAD_FILE_PATTERN.test(href);

      if (isDownload) {
        trackEvent('file_download', {
          link_text: linkText,
          destination_url: anchor.href || href,
          section_name: anchor.dataset.analyticsSection || 'content',
        });
      }

      if (isExternal) {
        trackEvent('outbound_link_click', {
          link_text: linkText,
          destination_url: anchor.href,
          section_name: sectionName,
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
