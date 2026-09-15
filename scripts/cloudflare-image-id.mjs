/**
 * Shared Cloudflare Images custom IDs.
 * Must match src/lib/cloudflare-images.ts cloudflareImageId().
 */

export function cloudflareImageId(rel) {
  const key = String(rel)
    .replace(/^\//, '')
    .replace(/^images\//, '')
    .replace(/-mobile/g, '');
  const withoutExt = key.replace(/\.(webp|jpe?g|png)$/i, '');
  return `skye-canyon/${withoutExt}`;
}

export function shouldUploadToCloudflare(rel, allRels) {
  if (/\.webp$/i.test(rel)) {
    const jpg = rel.replace(/\.webp$/i, '.jpg');
    const jpeg = rel.replace(/\.webp$/i, '.jpeg');
    if (allRels.has(jpg) || allRels.has(jpeg)) {
      return false;
    }
  }
  return true;
}

export function hashFromVariantUrl(url) {
  const match = String(url).match(/imagedelivery\.net\/([^/]+)\//);
  return match?.[1] ?? null;
}
