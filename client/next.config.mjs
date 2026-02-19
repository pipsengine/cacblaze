/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: true,
    },

  eslint: {
    ignoreDuringBuilds: true,
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
  }
};

export default nextConfig;
