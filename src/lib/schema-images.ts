import { siteConfig } from '@/config/site.config';
import { absoluteSiteImage } from '@/lib/cloudflare-images';

/** Canonical hosted images for JSON-LD — never use missing headshots or Unsplash. */
export const schemaImages = {
  og: absoluteSiteImage('og/skye-canyon-homes.jpg', siteConfig.url),
  home: absoluteSiteImage('heroes/home.jpg', siteConfig.url),
  office: absoluteSiteImage('sections/office-exterior.jpg', siteConfig.url),
  listings: absoluteSiteImage('sections/listings.jpg', siteConfig.url),
};

export const schemaImageList = [schemaImages.og, schemaImages.home, schemaImages.office];
