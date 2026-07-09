import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

/** Open Graph / Twitter card image — 1200×630 per platform specs */
export const defaultOgImage = {
  url: '/images/og/skye-canyon-homes.jpg',
  width: 1200,
  height: 630,
  alt: 'Skye Canyon luxury homes for sale Las Vegas NV 89166 — Dr. Jan Duffy REALTOR®',
  type: 'image/jpeg',
} as const;

const defaultTitle =
  'Dr. Jan Duffy REALTOR® | Skye Canyon Real Estate Expert Las Vegas NV 89166';

const defaultDescription =
  'Expert Skye Canyon real estate agent Dr. Jan Duffy specializes in luxury homes, new construction & golf course properties in Las Vegas NV 89166. Call (702) 500-1902!';

const ogDescription =
  'Expert Skye Canyon real estate agent specializing in luxury homes in Las Vegas NV 89166.';

/** Shared Open Graph + Twitter metadata for root layout */
export function buildSiteMetadata(): Metadata {
  return {
    title: {
      default: defaultTitle,
      template: '%s | Dr. Jan Duffy REALTOR®',
    },
    description: defaultDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: '/' },
    openGraph: {
      title: defaultTitle,
      description: ogDescription,
      url: siteConfig.url,
      siteName: siteConfig.businessName,
      locale: 'en_US',
      type: 'website',
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: ogDescription,
      images: [defaultOgImage.url],
    },
    robots: { index: true, follow: true },
  };
}

/** Merge page-specific metadata with default OG/Twitter images */
export function pageMetadata(
  title: string,
  description: string,
  path = '/',
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path === '/' ? '' : path}`,
      siteName: siteConfig.businessName,
      locale: 'en_US',
      type: 'website',
      images: [defaultOgImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}
