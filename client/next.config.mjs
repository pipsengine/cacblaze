import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: true,
    },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'img.rocket.new',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/homepage',
        destination: '/',
        permanent: false,
      },
      // Lifestyle root-to-category redirects
      {
        source: '/healthy-living',
        destination: '/lifestyle/healthy-living',
        permanent: false,
      },
      {
        source: '/nutrition',
        destination: '/lifestyle/nutrition',
        permanent: false,
      },
      {
        source: '/fitness',
        destination: '/lifestyle/fitness',
        permanent: false,
      },
      {
        source: '/mental-wellness',
        destination: '/lifestyle/mental-wellness',
        permanent: false,
      },
      {
        source: '/stress-management',
        destination: '/lifestyle/stress-management',
        permanent: false,
      },
      {
        source: '/sleep',
        destination: '/lifestyle/sleep',
        permanent: false,
      },
      {
        source: '/hygiene',
        destination: '/lifestyle/hygiene',
        permanent: false,
      },
      {
        source: '/habits',
        destination: '/lifestyle/habits',
        permanent: false,
      },
      {
        source: '/home-wellness',
        destination: '/lifestyle/home-wellness',
        permanent: false,
      },
      {
        source: '/pregnancy',
        destination: '/lifestyle/pregnancy',
        permanent: false,
      },
      {
        source: '/newborn-care',
        destination: '/lifestyle/newborn-care',
        permanent: false,
      },
      {
        source: '/child-development',
        destination: '/lifestyle/child-development',
        permanent: false,
      },
      {
        source: '/parenting-tips',
        destination: '/lifestyle/parenting-tips',
        permanent: false,
      },
      {
        source: '/education-support',
        destination: '/lifestyle/education-support',
        permanent: false,
      },
      {
        source: '/family-budgeting',
        destination: '/lifestyle/family-budgeting',
        permanent: false,
      },
      {
        source: '/home-routines',
        destination: '/lifestyle/home-routines',
        permanent: false,
      },
      {
        source: '/parenting-resources',
        destination: '/lifestyle/parenting-resources',
        permanent: false,
      },
      {
        source: '/travel-planning',
        destination: '/lifestyle/accommodation-guides',
        permanent: false,
      },
      {
        source: '/lifestyle/travel-planning',
        destination: '/lifestyle/accommodation-guides',
        permanent: false,
      },
      {
        source: '/budget-travel',
        destination: '/lifestyle/budget-travel',
        permanent: false,
      },
      {
        source: '/travel-safety',
        destination: '/lifestyle/travel-safety',
        permanent: false,
      },
      {
        source: '/accommodation',
        destination: '/lifestyle/travel-planning',
        permanent: false,
      },
      {
        source: '/transportation',
        destination: '/lifestyle/travel-planning',
        permanent: false,
      },
      {
        source: '/living-abroad',
        destination: '/lifestyle/living-abroad',
        permanent: false,
      },
      {
        source: '/education/exam-preparation',
        destination: '/education/exam-prep',
        permanent: false,
      },
      {
        source: '/education/school-resources',
        destination: '/education',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/ai-publishing/:path*',
          destination: 'http://localhost:3001/api/ai-publishing/:path*',
        },
      ];
    }
    return [];
  }
,
  turbopack: {
    root: path.resolve(__dirname, '..'),
  },
};

export default nextConfig;
