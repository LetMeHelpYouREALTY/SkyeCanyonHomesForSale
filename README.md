# Skye Canyon Homes - Real Estate Website

A Next.js 15 real estate website for Dr. Jan Duffy, REALTOR®, specializing in Skye Canyon Las Vegas properties (89166).

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui (Radix)
- **Database**: PostgreSQL + Prisma ORM
- **Deployment**: Vercel
- **Integrations**: RealScout MLS, Homebot, Calendly, Google Analytics

## Project Structure

```
src/
├── app/                    # Next.js App Router (routes + API)
│   ├── (marketing)/        # Public site pages
│   └── api/                # Route handlers
├── components/             # UI components (nav, widgets, shadcn)
├── page-components/        # Page content (migrated from Vite pages)
├── lib/                    # Utilities and integrations
├── hooks/                  # React hooks
└── types/                  # TypeScript definitions
legacy/                     # Previous Vite + Express stack (archived)
shared/                     # Shared Drizzle schema types
public/                     # Static assets
prisma/                     # Prisma schema
```

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
cp env.example .env   # optional: set DATABASE_URL for Prisma
npm run dev           # http://localhost:3000
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint (Next.js) |
| `npm run check` | TypeScript check |
| `npm run lint:biome` | Biome linter |

## Deployment

Push to `main` — Vercel auto-deploys using the Next.js framework preset (`vercel.json` sets `"framework": "nextjs"`).

## Contact

**Dr. Jan Duffy, REALTOR®**
- Phone: (702) 500-1902
- Email: DrDuffy@SkyeCanyonHomesForSale.com
- Office: 10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166
