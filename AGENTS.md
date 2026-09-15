# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single Next.js 15 App Router site for Skye Canyon real estate (Dr. Jan Duffy). The previous Vite + React + Express stack lives under `legacy/` and is **not** the active deploy target.

### Services

| Service | Required | Command | Port |
|---------|----------|---------|------|
| Next.js dev server | Yes | `npm run dev` | 3000 |
| PostgreSQL | Optional | Only for Prisma `db:push` / DB-backed features | 5432 |

No Docker, Redis, or separate Express API is required for local dev — API routes are in `src/app/api/`.

### Standard commands

See `README.md` and `package.json` scripts. Primary workflow:

```bash
npm install
npm run dev          # development
npm run build        # production build verification
npm run lint         # Next.js ESLint
npm run check        # tsc --noEmit (legacy components may have TS warnings)
```

### Non-obvious caveats

1. **Page content vs routes**: Route files are in `src/app/(marketing)/`; page UI lives in `src/page-components/` (renamed from `pages/` to avoid conflicting with Next.js Pages Router).
2. **Dynamic rendering**: `(marketing)/layout.tsx` exports `dynamic = 'force-dynamic'` because migrated pages use client hooks / `useSearchParams`.
3. **RealScout script**: Loaded once in `src/app/layout.tsx` via `next/script`. CSP allows both `em.realscout.com` and `www.realscout.com` in `next.config.ts`.
4. **Build flags**: `next.config.ts` currently sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` while legacy migrated components are cleaned up — compile still succeeds.
5. **Prisma**: `postinstall` runs `prisma generate`. A placeholder `DATABASE_URL` in `.env` is enough for generate; real DB only needed for persistence features.
6. **Legacy folder**: `legacy/client`, `legacy/server`, `legacy/vite.config.ts` — reference only; do not run `vite` from root.
7. **Cloudflare Images**: `siteImage()` falls back to git `/images/` until GitHub secrets `CF_ACCOUNT_ID` + `CF_IMAGES_TOKEN` exist. `.github/workflows/cloudflare-images-sync.yml` uploads `public/images` and commits `src/lib/cloudflare-account-hash.ts` so production can serve `imagedelivery.net`. Optional: Vercel `NEXT_PUBLIC_CF_IMAGES_BASE_URL` and a DNS-only CNAME for `images.skyecanyonhomesforsale.com`. Do not orange-cloud the Vercel `www` record. Cloudflare MCP auth is desktop-only; this environment cannot create those secrets.

### Hello-world verification

1. `curl http://localhost:3000/` → 200
2. `curl http://localhost:3000/api/health` → `{"status":"ok","imageCdn":"git-backup"| "cloudflare-images" | "cloudflare-base",...}`
3. Open `/` in browser — hero, MLS listings widget area, navigation with phone CTA
4. POST `/api/leads` with JSON body → `{ "success": true, ... }`

### Vercel production deploy

Project: **sky-canyon-homes** (`prj_KuUJDVnFXb80VcgEKpNj5MRwWdHp`), team `janet-duffys-projects`.

If git push does not auto-deploy (common after GitHub repo rename):

1. Reconnect Git in Vercel: **Settings → Git** → `LetMeHelpYouREALTY/SkyeCanyonHomesForSale`, branch `main`
2. Set **Framework Preset** to **Next.js** (was Vite)
3. Or use GitHub Action `.github/workflows/vercel-production.yml` with `VERCEL_TOKEN` secret

Full audit: `docs/VERCEL-DEPLOY-AUDIT.md`
