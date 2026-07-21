import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/collections',
        destination: '/products',
      },
      {
        source: '/gold-jewellery-jaunpur',
        destination: '/products?material=Gold',
      },
      {
        source: '/bridal-jewellery-jaunpur',
        destination: '/products?occasion=Bridal',
      },
      {
        source: '/diamond-jewellery-jaunpur',
        destination: '/products?material=Diamond',
      },
      {
        source: '/mangalsutra-collection-jaunpur',
        destination: '/products?category=Mangalsutra',
      },
      {
        source: '/gold-bangles-jaunpur',
        destination: '/products?category=Bangles&material=Gold',
      },
      {
        source: '/earrings-collection-jaunpur',
        destination: '/products?category=Earrings',
      },
      {
        source: '/gold-rings-jaunpur',
        destination: '/products?category=Rings&material=Gold',
      },
      {
        source: '/silver-jewellery-jaunpur',
        destination: '/products?material=Silver',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.vcjjewellers.com',
          },
        ],
        destination: 'https://vcjjewellers.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
