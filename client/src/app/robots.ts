import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://cacblaze.com');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/auth/',
          '/account/',
          '/bookmarks/',
          '/preferences/',
          '/login',
          '/register',
          '/search',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/auth/',
          '/account/',
          '/bookmarks/',
          '/preferences/',
          '/login',
          '/register',
          '/search',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
