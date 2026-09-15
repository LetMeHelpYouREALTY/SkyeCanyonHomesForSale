/**
 * Cloudflare is the primary image CDN. Git-hosted files under /public/images
 * are the backup and the local/dev fallback.
 *
 * Set one of:
 *   NEXT_PUBLIC_CF_IMAGES_BASE_URL  e.g. https://images.skyecanyonhomesforsale.com
 *   NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH + IDs in IMAGE_IDS (Cloudflare Images)
 */
export const GIT_IMAGE_PREFIX = '/images';

const CF_BASE = process.env.NEXT_PUBLIC_CF_IMAGES_BASE_URL?.replace(/\/$/, '');
const CF_HASH = process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH;

/** Cloudflare Images custom IDs — populated by scripts/cloudflare-images-sync.mjs */
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
    const idKey = key.replace(/-mobile/, '').replace(/\.(webp|jpe?g|png)$/i, '.jpg');
    const id = IMAGE_IDS[idKey];
    if (id) {
      return `https://imagedelivery.net/${CF_HASH}/${id}/public`;
    }
  }

  return `${GIT_IMAGE_PREFIX}/${key}`;
}

export function siteImageWebp(src: string): string {
  return siteImage(src.replace(/\.jpe?g$/i, '.webp'));
}

export function absoluteSiteImage(src: string, origin: string): string {
  const resolved = siteImage(src);
  if (resolved.startsWith('http')) {
    return resolved;
  }
  return `${origin.replace(/\/$/, '')}${resolved}`;
}
