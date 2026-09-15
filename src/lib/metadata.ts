import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { siteImage } from '@/lib/cloudflare-images';
import { ogImageUrlForPath } from '@/lib/page-images';

/** Open Graph / Twitter card image — 1200×630 per platform specs */
export const defaultOgImage = {
  url: siteImage('og/skye-canyon-homes.jpg'),
  width: 1200,
  height: 630,
  alt: 'Skye Canyon luxury homes for sale Las Vegas NV 89166 — Dr. Jan Duffy REALTOR®',
  type: 'image/jpeg',
} as const;

const defaultTitle =
  'Skye Canyon Real Estate | Homes by Dr. Jan Duffy | Las Vegas NV 89166';

const defaultDescription =
  'Skye Canyon homes for sale in Las Vegas NV 89166 with Dr. Jan Duffy, REALTOR®. Live MLS, new construction, and resale. Call (702) 500-1902.';

const ogDescription =
  'Skye Canyon homes in Las Vegas NV 89166 — live MLS with Dr. Jan Duffy, REALTOR®. Call (702) 500-1902.';

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
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }],
    },
    manifest: '/manifest.json',
    robots: { index: true, follow: true },
  };
}

function socialImage(path: string, imageUrl?: string) {
  const url = imageUrl ?? ogImageUrlForPath(path);
  return {
    url,
    width: 1200,
    height: 630,
    alt: defaultOgImage.alt,
    type: 'image/jpeg' as const,
  };
}

/** Merge page-specific metadata with heading-appropriate OG/Twitter images */
export function pageMetadata(
  title: string,
  description: string,
  path = '/',
  index = true,
  imageUrl?: string,
): Metadata {
  const image = socialImage(path, imageUrl);
  return {
    title,
    description,
    robots: { index, follow: index },
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path === '/' ? '' : path}`,
      siteName: siteConfig.businessName,
      locale: 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}

/** Open Graph + Twitter for App Router pages that set metadata locally. */
export function pageSocial(
  title: string,
  description: string,
  path: string,
  imageUrl?: string,
): Pick<Metadata, 'openGraph' | 'twitter'> {
  const image = socialImage(path, imageUrl);
  return {
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path === '/' ? '' : path}`,
      siteName: siteConfig.businessName,
      locale: 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
