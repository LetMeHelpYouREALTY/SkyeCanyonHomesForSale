# Vercel Deploy Audit — 2026-07-09

## Summary

**Git push to `main` succeeded, but Vercel did not create a new production deployment.**

Production is still serving the **old Vite SPA** from **2026-07-02**, not the Next.js 15 migration pushed on **2026-07-09**.

## Evidence

| Check | Result |
|-------|--------|
| GitHub `main` at | `bd4ad8f` — Next.js migration |
| Vercel project | `sky-canyon-homes` (`prj_KuUJDVnFXb80VcgEKpNj5MRwWdHp`) |
| Vercel framework preset | **Still `vite`** (not Next.js) |
| Last production deployment | **2026-02-13** (`dpl_EzjLBim9Y4n93uN5nE25Xa8Tarme`) |
| Deployments since today's push | **0** |
| Live HTML at www.skyecanyonhomesforsale.com | Vite bundle: `/assets/index-*.js`, `<div id="root">` |
| `last-modified` header | `Thu, 02 Jul 2026 10:14:41 GMT` |

## Root causes (likely)

### 1. GitHub → Vercel webhook not firing

GitHub reported the repo moved:

- Old: `letmehelpyourealty/skyecanyonhomesforsale`
- New: `LetMeHelpYouREALTY/SkyeCanyonHomesForSale`

If Vercel is still linked to the old path or the integration was disconnected, **pushes will not trigger builds**.

### 2. Vercel project still configured as Vite

Even after a deploy triggers, the dashboard settings are stale:

| Setting | Current (wrong) | Required |
|---------|-----------------|----------|
| Framework Preset | **Vite** | **Next.js** |
| Output Directory | **`dist`** (old Vite) | **empty / default** |

GitHub Actions deploy **built successfully** but failed with:

```
Error: The Next.js output directory "dist" was not found at "/vercel/path0/dist"
```

Fix in [Project Settings → General](https://vercel.com/janet-duffys-projects/sky-canyon-homes/settings/general) (recommended long-term):

1. **Framework Preset** → **Next.js**
2. **Output Directory** → clear the field (remove `dist` or `dist/public`)

**Repo workaround (active):** `next.config.ts` sets `distDir: 'dist'` so builds match the legacy Vercel output path until the dashboard is updated.

### 3. No CI deploy fallback

There was no GitHub Actions workflow deploying to Vercel on `main` push. Added: `.github/workflows/vercel-production.yml`.

## Fix checklist (do in order)

### A. Reconnect Git in Vercel (required for auto-deploy)

1. [Vercel Dashboard](https://vercel.com/janet-duffys-projects/sky-canyon-homes/settings/git)
2. **Settings → Git**
3. Confirm repo: `LetMeHelpYouREALTY/SkyeCanyonHomesForSale`
4. If wrong or disconnected → **Disconnect** → **Connect Git Repository** → select correct repo
5. Production branch: **`main`**
6. **Settings → General → Framework Preset** → **Next.js**

### B. Add GitHub Actions secrets (backup deploy path)

Repository → **Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|--------|
| `VERCEL_TOKEN` | [Vercel account token](https://vercel.com/account/tokens) |

Org/project IDs are in `.vercel/project.json` (used by `vercel pull`).

After secrets are set, run **Actions → Vercel Production Deploy → Run workflow** or push to `main`.

### C. Optional: Deploy Hook (manual trigger URL)

Vercel → Project → **Settings → Git → Deploy Hooks** → create hook for `main` → `curl` the URL to deploy without a git push.

### D. Verify after deploy

```bash
curl -sI https://www.skyecanyonhomesforsale.com/ | grep -i last-modified
curl -s https://www.skyecanyonhomesforsale.com/ | head -20
```

Next.js HTML should **not** contain `<div id="root">` or `/assets/index-*.js` as the main entry.

## Repo changes in this audit

- `.vercel/project.json` — links CLI/Actions to the correct Vercel project
- `.github/workflows/vercel-production.yml` — production deploy on `main` when `VERCEL_TOKEN` is set
- `.gitignore` — allow committing `.vercel/project.json`
