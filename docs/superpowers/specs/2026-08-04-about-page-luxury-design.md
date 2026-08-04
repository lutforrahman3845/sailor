# About page — editorial coastal luxury redesign

Date: 2026-08-04 — Status: approved by user

## Goal

Rework `/about` into a premium brand-story page in an "editorial coastal
luxury" style: luxury through typography, whitespace and one dramatic navy
band — staying inside the existing teal/navy brand and font stack. No new
dependencies.

## Page structure (top to bottom)

1. **Header** — existing `PageHero` with `page-hero-about.webp`, unchanged.
2. **Story intro (restyled)** — editorial split:
   - Left: offset photo gallery — `about-1` tall, `about-2` overlapping and
     raised, rounded corners, plus a floating "10 years at sea" badge.
   - Right: wide-tracked uppercase `OUR STORY` eyebrow, large two-line
     headline, existing paragraphs with wider leading, South Catalonia
     script sign-off ("— the Sailor crew"), "Meet the Fleet" link becomes a
     quiet text link with arrow (the big CTA moves to the navy band).
3. **Editorial stats row** — replaces gray stat boxes: one airy row of
   oversized extrabold numerals (10 · 10k+ · 5 · 7) separated by hairlines,
   tiny uppercase tracked labels beneath.
4. **Navy quote band (new)** — deep-navy rounded band, `page-hero-about.webp`
   at low opacity behind, centered oversized South Catalonia pull-quote
   *"the boat is only half the holiday"*, one supporting line, primary
   "Meet the Fleet" CTA.
5. **Values row (new)** — "why sail with us": three numbered columns
   (01/02/03) under hairline top rules — Crafted itineraries / Crewed to
   perfection / Privacy & calm — thin react-icons, short copy. Content in a
   `VALUES` const in the page file (same pattern as `STATS`).
6. **Testimonials** — existing slider kept, spacing refined.

## Interactions

All sections wrapped in the existing `Reveal` scroll-reveal with stagger.
No new libraries.

## Verification

`npm run lint`, `npm run build`, headless-Chrome screenshot of `/about`.
