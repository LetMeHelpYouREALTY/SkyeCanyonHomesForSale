import { siteConfig } from '@/config/site.config';
import { absoluteSiteImage } from '@/lib/cloudflare-images';

/** Canonical hosted images for JSON-LD — never use missing headshots or Unsplash. */
export const schemaImages = {
  og: absoluteSiteImage('og/skye-canyon-homes.jpg', siteConfig.url),
  home: absoluteSiteImage('heroes/home.jpg', siteConfig.url),
  office: absoluteSiteImage('gbp/cover.jpg', siteConfig.url),
  listings: absoluteSiteImage('sections/listings.jpg', siteConfig.url),
  profile: absoluteSiteImage('gbp/profile.jpg', siteConfig.url),
  park: absoluteSiteImage('gbp/park.jpg', siteConfig.url),
  recreation: absoluteSiteImage('gbp/recreation.jpg', siteConfig.url),
  clubhouse: absoluteSiteImage('gbp/clubhouse.jpg', siteConfig.url),
};

export const schemaImageList = [
  schemaImages.office,
  schemaImages.profile,
  schemaImages.park,
  schemaImages.recreation,
  schemaImages.clubhouse,
  schemaImages.home,
];
