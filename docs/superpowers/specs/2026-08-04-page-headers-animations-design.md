# Page headers refresh + professional animations

Date: 2026-08-04 — Status: approved by user

## Goal

Replace the shared `hero-banner.webp` used by the home hero and all six inner-page
headers with fresh, unique imagery, and add subtle, professional animations across
the site — with zero new dependencies.

## 1. New images

Seven images downloaded from Unsplash's CDN (free license), served as webp,
~1920px wide, saved in `public/assets/`:

| File | Used by | Subject |
|---|---|---|
| `hero-banner-new.webp` | Home hero | Luxury yacht in turquoise bay (aerial) |
| `page-hero-yachts.webp` | /yachts | Marina / yacht fleet |
| `page-hero-destinations.webp` | /destinations | Iconic coastline aerial |
| `page-hero-services.webp` | /services | Yacht deck / crew detail |
| `page-hero-about.webp` | /about | Sailing at helm / open sea |
| `page-hero-blog.webp` | /blog | Moody ocean horizon |
| `page-hero-contact.webp` | /contact | Harbor at golden hour |

Each download is visually verified before use. The old `hero-banner.webp` stays in
place (used as the `PageHero` default fallback).

## 2. PageHero component

`components/page-hero.tsx` gains an optional `image` prop (default: current
banner). Each of the six pages passes its unique image. Design language is
unchanged: scrim gradient, South Catalonia eyebrow, uppercase title.

## 3. Animations — CSS + tiny helper

- **`app/globals.css`**: keyframes `fade-up`, `fade-in`, and a slow ~12s Ken
  Burns `hero-zoom`; utility classes with stagger delays. All disabled under
  `prefers-reduced-motion: reduce`.
- **`components/reveal.tsx`**: small `"use client"` IntersectionObserver wrapper
  that fades/slides children in when scrolled into view; `delay` prop for
  staggering. Server pages stay server components — only this wrapper is client.
- **Home hero**: background gets Ken Burns zoom; eyebrow → title → copy →
  buttons → stats strip enter with staggered fade-up on load.
- **Page headers**: same treatment (image zoom + staggered text entrance).
- **Scroll reveals**: homepage sections (about, yachts, destinations, services,
  offer, blog, testimonials, newsletter) and inner-page content blocks wrapped
  in `Reveal`.

## Verification

`npm run lint` and `npm run build` pass; visual check in dev server.
