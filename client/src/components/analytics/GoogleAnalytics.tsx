'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, getAnalyticsStatus, isAnalyticsEnabled } from '@/lib/google-analytics';

export default function GoogleAnalytics() {
  const analyticsStatus = getAnalyticsStatus();

  useEffect(() => {
    if (!analyticsStatus.enabled) {
      console.warn('[GA4] Analytics is disabled because no valid measurement ID was resolved.');
      return;
    }

    if (analyticsStatus.usingFallback) {
      console.warn(
        `[GA4] Using fallback measurement ID ${analyticsStatus.measurementId}. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in deployment to avoid silent config drift.`
      );
    }

    const timeoutId = window.setTimeout(() => {
      if (typeof window.gtag !== 'function') {
        console.warn(
          `[GA4] gtag is not available after script initialization. Check CSP, ad blockers, consent tooling, or blocked requests to googletagmanager.com. Measurement ID: ${analyticsStatus.measurementId}.`
        );
      }
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [analyticsStatus.enabled, analyticsStatus.measurementId, analyticsStatus.usingFallback]);

  if (!isAnalyticsEnabled()) {
    return null;
  }

  return (
    <>
      <Script
        id="ga4-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onError={() => {
          console.error(
            `[GA4] Failed to load gtag.js for measurement ID ${analyticsStatus.measurementId}. Verify network access, CSP, and script blocking.`
          );
        }}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}