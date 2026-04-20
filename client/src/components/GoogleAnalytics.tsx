'use client';
import Script from 'next/script';
import { useGoogleAnalytics } from '@/lib/analytics';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-MKC05QTFGE';

export default function GoogleAnalytics() {
  useGoogleAnalytics();

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
