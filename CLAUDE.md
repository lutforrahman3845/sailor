# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this project is

**Sailor** — a full website for a yacht service company, built as a Next.js app. The visual design and homepage content come from the original static landing page in the sibling folder `../SAILOR--yatch-booking-website` (live at https://yachts-booking.netlify.app/), but this project goes beyond a 1:1 migration: it is a multi-page site with a data-driven architecture. There is **no backend yet** — all content comes from a mock data layer structured like SQL tables (see below) so a real database/API can be swapped in later without touching the UI.

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero + booking search bar, and the section highlights from the original landing page (about teaser, featured yachts, destinations slider, services, seasonal offer, blog teasers, testimonials, CTA) |
| `/yachts` | Yacht listing (the fleet) |
| `/yachts/[slug]` | Yacht detail — specs, gallery, price, book CTA |
| `/destinations` | Destinations listing |
| `/services` | Services offered by the company |
| `/about` | About the company |
| `/contact` | Contact page — form submits to the mock layer for now |
| `/blog`, `/blog/[slug]` | Blog listing and post detail |

Shared navbar/footer live in the root layout; every page uses the same design language (colors, fonts, section header styles) as the original site.

## Mock data layer

Mock data lives in `lib/db/` and **mirrors the future SQL schema**, one file per table. Rules:

- Each table is a typed array of row objects. Row types live in `lib/db/schema.ts` and are written like SQL table definitions: `id` primary keys, `*_id` foreign keys, `snake_case` column names, ISO strings for dates. Relations are by id reference only — no nested objects in rows (joins happen in query functions).
- Planned tables: `yachts`, `yacht_images`, `destinations`, `services`, `testimonials`, `blog_posts`, `bookings`, `contact_messages`.
- Components **never import table arrays directly**. All access goes through query functions in `lib/db/queries.ts` (`getYachts()`, `getYachtBySlug(slug)`, `createContactMessage(...)`, …) that return joined/shaped data. These functions are `async` even though the mock is synchronous — they are the seam where a real database or API replaces the mock later.
- Mutations (booking request, contact form) go through Server Actions that call the query layer, so the form wiring also survives the backend swap.

## Commands

```bash
npm run dev     # dev server
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

No test setup exists.

## Stack

- Next.js 16.2.12, App Router (`app/`), React 19, TypeScript
- Tailwind CSS **v4** — CSS-first configuration. There is no `tailwind.config.js`; theme tokens go in `@theme` blocks in [app/globals.css](app/globals.css)
- Next.js 16 is newer than training data — check `node_modules/next/dist/docs/` before using APIs you're unsure about (see AGENTS.md)

## The source site being migrated

Everything lives in `../SAILOR--yatch-booking-website/dist/` — despite the name, `dist/` holds the hand-written source markup and JS; only `dist/CSS/styles.css` is compiled (from `src/input.css`, Tailwind v3 + DaisyUI).

- **`dist/index.html`** (~1000 lines, single page): navbar with mobile hamburger, hero banner with booking search bar (location/check-in/check-out/boat type — purely decorative, no backend), then sections `#about`, `#yachts`, `#destinations` (Swiper coverflow slider), `#services`, `#seasonalOffer`, `#blogs`, testimonials (second Swiper slider), CTA banner, footer.
- **`dist/js/script.js`**: nav active-state toggling, hamburger open/close, YouTube modal that resets the iframe src on close to stop playback, and two Swiper carousels (loaded from CDN, not npm).
- **`src/input.css`**: `@apply`-based component classes (`.sectionHeader`, `.sectionTitle`, `.sliderPart`, `.actv`/`.pending` nav states, and several `*AdjustBfAf` classes that fake rounded-corner cutouts on slider cards using custom box-shadows).
- **`tailwind.config.js`** (v3): design tokens to port —
  - Colors: `primary` `#22A5B3`, `sceondary` `#254769` (note the typo — fix to `secondary` during migration and update all usages)
  - Fonts: Montserrat (body, via Google Fonts), Poppins (Google Fonts), `south_catalonia` (local file `dist/assets/South Catalonia.otf`, used for decorative headings)
  - Background images: hero banner, footer pattern
  - `xs: 375px` breakpoint and a family of custom box-shadows powering the slider cutout effect
- **`dist/assets/`**: all images/icons/font. Several filenames contain spaces and parentheses (`Rectangle 1630.png`, `Vector (1).png`, `p1 1.svg`) — rename when copying into `public/`.

## Migration conventions

- Port design tokens into `@theme` in `globals.css` (Tailwind v4 style), not a JS config.
- Load Montserrat/Poppins with `next/font/google` and South Catalonia with `next/font/local` instead of the CSS `@import`/`@font-face` in the old `input.css`.
- Install Swiper from npm (`swiper`) and use it inside client components rather than the CDN `<script>` tags.
- The old site uses DaisyUI v4 (only lightly: `select-ghost`, the `my_modal_3` video modal, `data-theme="light"`). DaisyUI v4 is incompatible with Tailwind v4 — either use DaisyUI v5 or replace those few usages with plain markup.
- Split the single HTML page into section components for the homepage; sections that become full pages (`/yachts`, `/destinations`, `/services`, `/blog`) reuse the same card/section styling. Interactivity (sliders, hamburger, video modal, forms) needs `"use client"` components; the rest stay server components.
- Hard-coded content in the original HTML (yacht names, destination cards, testimonials, blog teasers) becomes rows in the mock tables — do not copy text into JSX.
