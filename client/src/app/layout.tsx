import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import '../styles/index.css';
import { AuthProvider } from '@/contexts/AuthContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { generateOrganizationSchema } from '@/utils/schemaMarkup';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'CACBLAZE - Nigerian Knowledge Platform',
    template: '%s | CACBLAZE',
  },
  description: 'Comprehensive guides across technology, education, lifestyle, finance, and more. Expert-verified content for Nigerians.',
  keywords: ['guides', 'tutorials', 'how-to', 'education', 'technology', 'Nigeria', 'knowledge platform'],
  authors: [{ name: 'CACBLAZE Team' }],
  creator: 'CACBLAZE',
  publisher: 'CACBLAZE',
  metadataBase: new URL('https://cacblaze.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://cacblaze.com',
    siteName: 'CACBLAZE',
    title: 'CACBLAZE - Nigerian Knowledge Platform',
    description: 'Comprehensive guides across technology, education, lifestyle, finance, and more.',
    images: ['/assets/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CACBLAZE - Nigerian Knowledge Platform',
    description: 'Comprehensive guides across technology, education, lifestyle, finance, and more.',
    images: ['/assets/images/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
</head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
