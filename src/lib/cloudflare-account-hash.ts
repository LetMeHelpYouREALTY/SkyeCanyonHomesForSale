/**
 * Cloudflare Images account hash used to build imagedelivery.net URLs.
 * Overwritten by `scripts/cloudflare-images-sync.mjs` after a successful upload.
 * Leave null until GitHub secrets CF_ACCOUNT_ID + CF_IMAGES_TOKEN exist.
 */
export const CF_IMAGES_ACCOUNT_HASH: string | null = null;
