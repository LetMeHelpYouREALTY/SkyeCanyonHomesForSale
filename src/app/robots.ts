import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/private/',
        '/api/',
        '/leads',
        '/lead-dashboard',
        '/followup-boss-status',
        '/performance-dashboard',
        '/seo-management',
        '/home-simple',
        '/demo/',
        '/_vite/',
        '/src/',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
