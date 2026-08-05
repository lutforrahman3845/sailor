# Sailor — Yacht Charter & Booking Website 

Sailor is a modern, multi-page yacht charter website built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It ships as a complete company website — fleet listing, destinations, services, blog, and contact — powered by a clean, data-driven architecture that is ready to connect to a real backend.

> **Licensing:** Sailor is a commercial template. See [LICENSE.md](LICENSE.md) for what you may and may not do with it.

## Features

- **9 pages** — home, yacht listing + detail, destinations, services, about, contact, blog listing + post detail
- **Data-driven** — all content (yachts, destinations, services, testimonials, blog posts) lives in a typed mock data layer that mirrors a SQL schema, so swapping in a real database or CMS later means touching one file, not the UI
- **Server Actions** — the booking and contact forms already submit through Next.js Server Actions into the data layer
- **App Router + Server Components** — only interactive pieces (carousels, forms, video modal, mobile nav) are client components
- **Tailwind CSS v4** — CSS-first theming; all design tokens live in one `@theme` block
- **Embla Carousel** — destinations and testimonials sliders with autoplay
- **Optimized fonts & images** — `next/font` (Plus Jakarta Sans, BBH Bartle, and a local decorative font) and `next/image` throughout
- **TypeScript everywhere** — fully typed rows, queries, and components
- **SEO-ready** — per-page metadata via the Next.js Metadata API

## Requirements

- Node.js 20.9 or later
- npm (or pnpm / yarn / bun)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
app/                    # Routes (App Router)
  page.tsx              # Home
  yachts/               # Fleet listing + /yachts/[slug] detail
  destinations/         # Destinations
  services/             # Services
  about/                # About
  contact/              # Contact (form wired to a Server Action)
  blog/                 # Blog listing + /blog/[slug] post detail
  layout.tsx            # Root layout: fonts, header, footer
  globals.css           # Tailwind v4 theme tokens + global styles
components/             # Shared UI (header, footer, cards, forms, carousels)
  home/                 # Homepage sections (hero, sliders, offers, …)
lib/
  db/                   # Mock data layer (see below)
    schema.ts           # Row types, written like SQL table definitions
    queries.ts          # The ONLY data access point used by the UI
    *.ts                # One file per table (yachts, destinations, …)
  actions.ts            # Server Actions (booking request, contact form)
public/                 # Images and static assets
```

## Customization

### Colors, fonts, and theme

All design tokens are defined in the `@theme` block at the top of [app/globals.css](app/globals.css):

```css
@theme {
  --color-primary: #22a5b3;   /* brand teal   */
  --color-secondary: #254769; /* deep navy    */
  --color-muted: #5b758e;
  --color-footer: #10283e;
  --color-footer-dark: #0c2032;
}
```

Change these values and the whole site follows — there is no `tailwind.config.js` (Tailwind v4 uses CSS-first configuration). Fonts are loaded in [app/layout.tsx](app/layout.tsx) with `next/font`; swap the Google fonts or the local display font there.

### Content

Every piece of content — yacht specs, prices, destination copy, testimonials, blog posts — lives in the table files under [lib/db/](lib/db/). Edit the row objects there; nothing is hard-coded in the components.

### Connecting a real backend

The mock layer is intentionally shaped like a database:

- Row types in [lib/db/schema.ts](lib/db/schema.ts) use `id` primary keys, `*_id` foreign keys, and `snake_case` columns — they translate 1:1 into SQL tables.
- Components never touch table arrays directly. All reads go through the `async` query functions in [lib/db/queries.ts](lib/db/queries.ts) (`getYachts()`, `getYachtBySlug()`, `getBlogPosts()`, …) and all writes go through Server Actions in [lib/actions.ts](lib/actions.ts) (`createBooking()`, `createContactMessage()`).

To go live, reimplement the functions in `queries.ts` against your database, ORM, or CMS — the pages, forms, and components need no changes.

## Deployment

Sailor is a standard Next.js app and deploys anywhere Next.js runs — [Vercel](https://vercel.com), Netlify, or any Node.js host:

```bash
npm run build
npm run start
```

## Support

If you purchased this template and run into an issue, contact the author through the marketplace or channel where you bought it.

## License

This template is sold under a commercial license — you may use it to build websites for yourself or your clients, but you may not redistribute or resell the template itself. Full terms in [LICENSE.md](LICENSE.md).
