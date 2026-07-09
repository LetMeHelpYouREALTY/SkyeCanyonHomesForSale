import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { getAllSubdivisionSlugs } from '@/data/hyperlocal/subdivisions';
import { getAllParkSlugs } from '@/data/hyperlocal/parks';
import { getAllBuilderSlugs } from '@/data/hyperlocal/builders';

const baseUrl = siteConfig.url;

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/properties', priority: 0.9, changeFrequency: 'daily' as const },
  { path: '/market-analysis', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/northwest-las-vegas', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/las-vegas-real-estate', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/luxury-homes-las-vegas', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/skye-canyon-guide', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/skye-canyon-communities', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/skye-canyon-parks', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/skye-canyon-schools', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/neighborhood-analysis', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/89166-homes-for-sale', priority: 0.9, changeFrequency: 'daily' as const },
  { path: '/89149-homes-for-sale', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/89144-homes-for-sale', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/centennial-hills-homes-for-sale', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/services/buyer-agent', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/seller-agent', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/first-time-buyer', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/services/luxury-properties', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/services/new-construction', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/services/relocation', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const dynamicRoutes = [
    ...getAllSubdivisionSlugs().map((slug) => ({
      path: `/skye-canyon/${slug}`,
      priority: 0.85,
      changeFrequency: 'weekly' as const,
    })),
    ...getAllParkSlugs().map((slug) => ({
      path: `/skye-canyon-parks/${slug}`,
      priority: 0.75,
      changeFrequency: 'monthly' as const,
    })),
    ...getAllBuilderSlugs().map((slug) => ({
      path: `/builders/${slug}`,
      priority: 0.75,
      changeFrequency: 'monthly' as const,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
