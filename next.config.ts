import type { NextConfig } from 'next';

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://embed.homebotapp.com https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com",
  "style-src 'self' 'unsafe-inline' https://em.realscout.com https://assets.calendly.com https://fonts.googleapis.com",
  "connect-src 'self' https://em.realscout.com https://www.realscout.com https://*.homebotapp.com https://calendly.com https://www.google-analytics.com https://*.supabase.co https://maps.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
  "frame-src 'self' https://em.realscout.com https://www.realscout.com https://*.homebotapp.com https://calendly.com",
].join('; ');

const nextConfig: NextConfig = {
  // Vercel project still has Output Directory = "dist" from legacy Vite setup.
  // Next.js defaults to ".next"; align build output until dashboard is cleared.
  distDir: 'dist',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.realscout.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'Content-Security-Policy', value: csp }],
      },
    ];
  },
};

export default nextConfig;
