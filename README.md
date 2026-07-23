# Morubisi Technologies — Website Redesign

A Next.js (App Router) + TypeScript rebuild of the Morubisi Technologies
website: a dark, high-authority corporate-tech design system in black,
white and orange.

## Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js Route Handlers (`src/app/api/*`) — acts as the Node.js
  backend for form submissions. Swap these for a standalone Express/Node
  service later if you need one; the `src/lib/api.ts` client code doesn't
  change either way.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project structure

- `src/app` — routes (App Router). Each folder under `app/` is a page;
  `app/api/*/route.ts` are backend endpoints.
- `src/components/layout` — Navbar, Footer, Container
- `src/components/sections` — page-level sections (Hero, Services, Stats…)
- `src/components/ui` — Button, Card, Badge, Input, Modal primitives
- `src/components/maps` / `src/components/charts` — dependency-free
  placeholders (CoverageMap, StatsChart) — swap in Mapbox/Leaflet or
  Recharts/D3 when you have real geo/analytics data to plug in
- `src/data` — static content for the prototype (services, projects, stats).
  Move this to a CMS or database when ready.
- `src/lib` — constants, fetch helpers, utilities
- `src/styles` — Tailwind entry point + CSS custom properties (design tokens)
- `src/hooks` — `useRevealOnScroll`, `useScrolled`

## Design system

- **Colors:** ink `#0A0A0A`, panel `#121212`, paper `#FAFAFA`, orange
  `#FF5A1F` (see `tailwind.config.ts` and `src/styles/variables.css`)
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels)
- Fonts load via `next/font/google` in `src/app/layout.tsx` — no manual
  `<link>` tags needed.

## Environment variables

Copy `.env.local` and fill in real values before wiring up email delivery
or a newsletter provider (see `src/app/api/contact/route.ts` and
`src/app/api/newsletter/route.ts` for the TODOs).

## Content still needed

- Real photography for `public/images/{hero,services,projects,logos}`
- Verified project case studies for `src/data/projects.ts`
- Confirmation that stats in `src/data/stats.ts` are current
