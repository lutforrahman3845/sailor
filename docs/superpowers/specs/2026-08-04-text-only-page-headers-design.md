# Text-only inner-page headers

Date: 2026-08-04 — Status: approved by user
Revised same day: user chose pure text with no panel at all (was: navy
gradient panel).

## Goal

Remove the background photos from the six inner-page headers. Headers become
plain text on the white page — no card or panel.

## Changes

- `components/page-hero.tsx`: no `<Image>`, no scrim, no panel background.
  Centered text block: South Catalonia eyebrow in teal, uppercase navy
  title, muted subtitle, thin hairline underneath. Fade-up entrance
  animations kept.
- The six pages (`/yachts`, `/destinations`, `/services`, `/about`, `/blog`,
  `/contact`) stop passing `image`.
- Untouched: home hero (keeps its photo) and the About navy quote band
  (keeps `page-hero-about.webp`). Other `page-hero-*.webp` files stay in
  `public/assets` for possible reuse.

## Verification

`npm run lint`, `npm run build`, headless-Chrome screenshots.
