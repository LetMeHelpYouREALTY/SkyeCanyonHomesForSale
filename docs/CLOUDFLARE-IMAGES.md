# Cloudflare Images delivery

Status as of **2026-09-15**: production still serves the git backup.

```json
{"status":"ok","imageCdn":"git-backup","sampleImage":"/images/gbp/cover.jpg"}
```

`siteImage()` is wired for Cloudflare. The remaining flip is adding GitHub secrets and running `.github/workflows/cloudflare-images-sync.yml`. Do not fake this with Cloudinary, jsDelivr, or an orange-cloud Vercel `www` record.

## How delivery works

`src/lib/cloudflare-images.ts` resolves every heading, hero, OG, and GBP photo in this order:

1. `NEXT_PUBLIC_CF_IMAGES_BASE_URL` → custom host (optional, DNS-only CNAME). Health: `cloudflare-base`.
2. Committed `CF_IMAGES_ACCOUNT_HASH` in `src/lib/cloudflare-account-hash.ts` (or `NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH`) → `https://imagedelivery.net/{hash}/skye-canyon/{path}/public`. Health: `cloudflare-images`.
3. Git files under `public/images/`. Health: `git-backup`.

Custom IDs match `scripts/cloudflare-image-id.mjs`: `heroes/home.jpg` → `skye-canyon/heroes/home`. Cloudflare Images transcodes JPEG/PNG to WebP/AVIF from the `public` variant, so git `.webp` copies are not uploaded when a JPEG original exists. `-mobile` files share the desktop custom ID.

Git stays the source of truth. Vercel keeps serving `/images/...` until the hash file is non-null.

## Remaining flip

Cloudflare MCP auth is desktop-only. Cursor Cloud cannot create these secrets.

1. In Cloudflare, create an API token with **Account / Cloudflare Images / Edit**. Copy the account ID from the Images dashboard.
2. GitHub repo **Settings → Secrets and variables → Actions**, add:
   - `CF_ACCOUNT_ID`
   - `CF_IMAGES_TOKEN` (the Images-edit token)
   - Optional: `CLOUDFLARE_API_TOKEN` if that token already has Images Edit (the workflow accepts either token).
3. **Actions → Cloudflare Images Sync → Run workflow**. Leave `require_secrets` unchecked the first time only if you are still testing the skip path. After secrets exist, check **Fail if secrets are missing** so a bad token or empty secret fails the job.
4. The Action uploads `public/images/**` (JPEG/PNG, skip `-mobile` and WebP-with-JPEG) and commits `src/lib/cloudflare-account-hash.ts` when the account hash is new. Vercel then rebuilds and `siteImage()` switches to `imagedelivery.net`.
5. Confirm:

```bash
curl -sS https://www.skyecanyonhomesforsale.com/api/health
# want: "imageCdn":"cloudflare-images"
# want: "sampleImage":"https://imagedelivery.net/<hash>/skye-canyon/gbp/cover/public"
```

6. Optional custom domain (not required for the flip):
   - Cloudflare Images → Custom Domains → `images.skyecanyonhomesforsale.com`
   - DNS **CNAME** to the host Cloudflare shows, **DNS only (gray cloud)**
   - Vercel env `NEXT_PUBLIC_CF_IMAGES_BASE_URL=https://images.skyecanyonhomesforsale.com`
   - Health then reports `cloudflare-base`

Do **not** orange-cloud the Vercel `www` / apex records. That breaks SSL with Vercel.

## GitHub Action

Workflow: `.github/workflows/cloudflare-images-sync.yml`

| Step | Always? | What a green check means |
|------|---------|--------------------------|
| `npm run test:images` | Yes | Custom IDs match and git backup files exist |
| Dry-run upload plan | Yes | Walker lists `skye-canyon/...` IDs; no API call |
| Detect secrets | Yes | Job summary says **blocked** or **secrets present** |
| Upload + commit hash | Only when secrets exist | Real Cloudflare hosting |

Missing secrets used to warn and still `exit 0` after a no-op upload, which looked like a successful CDN flip. The job still exits 0 on `main` when secrets are empty (so production CI is not red), but it now **skips upload and hash commit** and writes **Cloudflare Images — blocked** to the job summary.

Push paths that trigger the workflow: `public/images/**`, the sync scripts, this doc, `src/lib/cloudflare-images.ts`, and the hash file.

## Local commands

```bash
npm run test:images
CF_IMAGES_DRY_RUN=1 npm run images:cf-sync
CF_ACCOUNT_ID=... CF_IMAGES_TOKEN=... npm run images:cf-sync
```

Dry-run does not need credentials. A real sync without credentials prints the same blocked warning and exits 0.

## GBP photography and copy

Live GBP (verified 2026-09-15): **Skye Canyon Real Estate | Homes by Dr. Jan Duffy**, Place ID `ChIJ_yrcejWTyIARVpnwxqlS0Wg`, Maps CID `7552908939217639766`, street `10111 W Skye Canyon Park Dr` (no period), phone `(702) 500-1902`, hours Mo–Fr 09:00–18:00, Sa 09:00–17:00, Su 11:00–16:00.

Heading photos live in git:

- `public/images/gbp/` — cover, profile, park, recreation, clubhouse, community-map, review QR
- `public/images/heroes/` — page heroes (schools, northwest, new-construction, …)
- `public/images/sections/` — listings, valuation, golf, interiors
- `public/images/og/skye-canyon-homes.jpg`

Rules:

- Match the heading. School pages use the schools photo, not parks or a generic guide shot.
- Homepage GBP cards use live Google-hosted post photos with git fallbacks, **headlines only**. Do not copy post bodies that include expired prices, invented medians, or Fair Housing proxies (including 55+ community copy).
- Do not invent review counts, star ratings, or headshots.
- Search CTAs go to `https://drjanduffy.realscout.com/onboarding`.

## Files

| Path | Role |
|------|------|
| `src/lib/cloudflare-images.ts` | `siteImage()` / `getImageCdnStatus()` |
| `src/lib/cloudflare-account-hash.ts` | Committed hash (`null` until first successful upload) |
| `scripts/cloudflare-images-sync.mjs` | Upload + hash write |
| `scripts/cloudflare-image-id.mjs` | Custom ID helper shared with tests |
| `src/app/api/health/route.ts` | `imageCdn` + `sampleImage` |
| `next.config.ts` | `imagedelivery.net` and `images.skyecanyonhomesforsale.com` in `images.remotePatterns`; CSP `img-src` already allows `https:` |
