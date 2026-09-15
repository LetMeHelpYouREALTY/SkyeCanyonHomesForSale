import { siteConfig } from '@/config/site.config';
import {
  areaImageKey,
  parkImageKey,
  subdivisionImageKey,
  zipImageKey,
} from '@/data/topic-images';
import { absoluteSiteImage } from '@/lib/cloudflare-images';

export function hostedImage(key: string): string {
  return absoluteSiteImage(key, siteConfig.url);
}

/** Heading-appropriate photography listed in the image sitemap for each public URL. */
const STATIC_PAGE_IMAGE_KEYS: Record<string, string[]> = {
  '/': ['heroes/home.jpg', 'gbp/cover.jpg', 'sections/listings.jpg', 'gbp/park.jpg'],
  '/about': ['heroes/about.jpg', 'gbp/profile.jpg', 'gbp/cover.jpg'],
  '/contact': ['gbp/cover.jpg', 'gbp/profile.jpg', 'heroes/contact.jpg'],
  '/properties': ['sections/listings.jpg', 'heroes/properties.jpg', 'gbp/cover.jpg'],
  '/search': ['sections/listings.jpg', 'heroes/properties.jpg'],
  '/market-analysis': ['heroes/market.jpg', 'gbp/cover.jpg'],
  '/neighborhood-analysis': ['heroes/neighborhood.jpg', 'gbp/community-map.jpg'],
  '/northwest-las-vegas': ['heroes/northwest.jpg', 'gbp/cover.jpg'],
  '/las-vegas-real-estate': ['heroes/las-vegas.jpg', 'gbp/cover.jpg'],
  '/luxury-homes-las-vegas': ['heroes/luxury.jpg', 'sections/luxury-interior.jpg'],
  '/skye-canyon-guide': ['heroes/community.jpg', 'gbp/community-map.jpg', 'gbp/clubhouse.jpg'],
  '/skye-canyon-communities': [
    'sections/new-construction.jpg',
    'heroes/new-construction.jpg',
    'gbp/community-map.jpg',
  ],
  '/skye-canyon-parks': ['gbp/park.jpg', 'gbp/recreation.jpg', 'gbp/clubhouse.jpg'],
  '/skye-canyon-schools': ['heroes/schools.jpg', 'gbp/community-map.jpg'],
  '/89166-homes-for-sale': [zipImageKey('89166'), 'gbp/cover.jpg', 'sections/listings.jpg'],
  '/89149-homes-for-sale': [zipImageKey('89149'), 'sections/listings.jpg'],
  '/89144-homes-for-sale': [zipImageKey('89144'), 'sections/listings.jpg'],
  '/centennial-hills-homes-for-sale': [areaImageKey(), 'heroes/northwest.jpg'],
  '/services/buyer-agent': ['sections/listings.jpg', 'gbp/profile.jpg'],
  '/services/seller-agent': ['sections/valuation.jpg', 'gbp/cover.jpg'],
  '/services/first-time-buyer': ['heroes/home.jpg', 'sections/listings.jpg'],
  '/services/luxury-properties': ['sections/luxury-interior.jpg', 'heroes/luxury.jpg'],
  '/services/new-construction': ['sections/new-construction.jpg', 'heroes/new-construction.jpg'],
  '/services/relocation': ['heroes/northwest.jpg', 'gbp/cover.jpg'],
  '/voice-search': ['heroes/voice-search.jpg', 'sections/listings.jpg'],
  '/privacy-policy': ['gbp/cover.jpg'],
  '/terms-of-service': ['gbp/cover.jpg'],
};

export function imageKeysForPath(path: string): string[] {
  return STATIC_PAGE_IMAGE_KEYS[path] ?? ['og/skye-canyon-homes.jpg'];
}

export function sitemapImagesForPath(path: string): string[] {
  return imageKeysForPath(path).map(hostedImage);
}

export function ogImageUrlForPath(path: string): string {
  return hostedImage(imageKeysForPath(path)[0] ?? 'og/skye-canyon-homes.jpg');
}

export function parkSitemapImages(slug: string): string[] {
  return [hostedImage(parkImageKey(slug)), hostedImage('gbp/park.jpg')];
}

export function subdivisionSitemapImages(slug: string): string[] {
  return [hostedImage(subdivisionImageKey(slug)), hostedImage('sections/listings.jpg')];
}

export function builderSitemapImages(): string[] {
  return [
    hostedImage('sections/new-construction.jpg'),
    hostedImage('heroes/new-construction.jpg'),
  ];
}
