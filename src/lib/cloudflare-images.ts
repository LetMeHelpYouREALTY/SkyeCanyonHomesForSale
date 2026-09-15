/**
 * Cloudflare is the primary image CDN. Git-hosted files under /public/images
 * are the backup and the local/dev fallback.
 *
 * Set one of:
 *   NEXT_PUBLIC_CF_IMAGES_BASE_URL  e.g. https://images.skyecanyonhomesforsale.com
 *   NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH (or src/lib/cloudflare-account-hash.ts)
 *
 * Custom IDs match scripts/cloudflare-images-sync.mjs (skye-canyon/{path without ext}).
 * Cloudflare Images transcodes JPEG/PNG to WebP/AVIF from the public variant.
 */
import { CF_IMAGES_ACCOUNT_HASH as COMMITTED_HASH } from '@/lib/cloudflare-account-hash';

export const GIT_IMAGE_PREFIX = '/images';

const CF_BASE = process.env.NEXT_PUBLIC_CF_IMAGES_BASE_URL?.replace(/\/$/, '');
const CF_HASH =
  process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH || COMMITTED_HASH || undefined;

export type ImageCdnStatus = 'cloudflare-base' | 'cloudflare-images' | 'git-backup';

/** Cloudflare Images custom IDs — documented map; delivery uses cloudflareImageId(). */
export const IMAGE_IDS: Record<string, string> = {
  'heroes/home.jpg': 'skye-canyon/heroes/home',
  'heroes/contact.jpg': 'skye-canyon/heroes/contact',
  'heroes/about.jpg': 'skye-canyon/heroes/about',
  'heroes/properties.jpg': 'skye-canyon/heroes/properties',
  'heroes/market.jpg': 'skye-canyon/heroes/market',
  'heroes/neighborhood.jpg': 'skye-canyon/heroes/neighborhood',
  'heroes/las-vegas.jpg': 'skye-canyon/heroes/las-vegas',
  'heroes/luxury.jpg': 'skye-canyon/heroes/luxury',
  'heroes/northwest.jpg': 'skye-canyon/heroes/northwest',
  'heroes/community.jpg': 'skye-canyon/heroes/community',
  'heroes/parks.jpg': 'skye-canyon/heroes/parks',
  'heroes/schools.jpg': 'skye-canyon/heroes/schools',
  'heroes/voice-search.jpg': 'skye-canyon/heroes/voice-search',
  'heroes/new-construction.jpg': 'skye-canyon/heroes/new-construction',
  'og/skye-canyon-homes.jpg': 'skye-canyon/og/skye-canyon-homes',
  'sections/listings.jpg': 'skye-canyon/sections/listings',
  'sections/valuation.jpg': 'skye-canyon/sections/valuation',
  'sections/golf.jpg': 'skye-canyon/sections/golf',
  'sections/recreation.jpg': 'skye-canyon/sections/recreation',
  'sections/office-exterior.jpg': 'skye-canyon/sections/office-exterior',
  'sections/luxury-interior.jpg': 'skye-canyon/sections/luxury-interior',
  'sections/new-construction.jpg': 'skye-canyon/sections/new-construction',
  'properties/property-golf.jpg': 'skye-canyon/properties/property-golf',
  'properties/property-luxury.jpg': 'skye-canyon/properties/property-luxury',
  'properties/property-new.jpg': 'skye-canyon/properties/property-new',
  'properties/property-single.jpg': 'skye-canyon/properties/property-single',
  'gbp/cover.jpg': 'skye-canyon/gbp/cover',
  'gbp/profile.jpg': 'skye-canyon/gbp/profile',
  'gbp/park.jpg': 'skye-canyon/gbp/park',
  'gbp/recreation.jpg': 'skye-canyon/gbp/recreation',
  'gbp/community-map.jpg': 'skye-canyon/gbp/community-map',
  'gbp/clubhouse.jpg': 'skye-canyon/gbp/clubhouse',
  'gbp/google-review-qr.png': 'skye-canyon/gbp/google-review-qr',
};

function normalizeKey(src: string): string {
  return src.replace(/^\//, '').replace(/^images\//, '');
}

/** Custom ID uploaded by scripts/cloudflare-images-sync.mjs. */
export function cloudflareImageId(src: string): string {
  const key = normalizeKey(src).replace(/-mobile/g, '');
  const withoutExt = key.replace(/\.(webp|jpe?g|png)$/i, '');
  return `skye-canyon/${withoutExt}`;
}

export function getImageCdnStatus(): ImageCdnStatus {
  if (CF_BASE) {
    return 'cloudflare-base';
  }
  if (CF_HASH) {
    return 'cloudflare-images';
  }
  return 'git-backup';
}

/**
 * Resolve a site image path to Cloudflare (if configured) or the git backup.
 * Accepts keys like "heroes/home.jpg" or "/images/heroes/home.jpg".
 */
export function siteImage(src: string): string {
  const key = normalizeKey(src);

  if (CF_BASE) {
    return `${CF_BASE}/${key}`;
  }

  if (CF_HASH) {
    return `https://imagedelivery.net/${CF_HASH}/${cloudflareImageId(key)}/public`;
  }

  return `${GIT_IMAGE_PREFIX}/${key}`;
}

export function siteImageWebp(src: string): string {
  if (CF_BASE || CF_HASH) {
    return siteImage(src);
  }
  return siteImage(src.replace(/\.jpe?g$/i, '.webp'));
}

export function absoluteSiteImage(src: string, origin: string): string {
  const resolved = siteImage(src);
  if (resolved.startsWith('http')) {
    return resolved;
  }
  return `${origin.replace(/\/$/, '')}${resolved}`;
}
