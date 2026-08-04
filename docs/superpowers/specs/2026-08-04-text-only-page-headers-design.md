# Text-only inner-page headers

Date: 2026-08-04 — Status: approved by user

## Goal

Remove the background photos from the six inner-page headers. Headers become
text on a deep navy gradient panel.

## Changes

- `components/page-hero.tsx`: drop the `<Image>`, the scrim overlay, the
  Ken Burns class and the `image` prop. Panel background becomes a
  `secondary → footer` navy gradient; shape, text styles and fade-up
  entrance animations are unchanged.
- The six pages (`/yachts`, `/destinations`, `/services`, `/about`, `/blog`,
  `/contact`) stop passing `image`.
- Untouched: home hero (keeps its photo) and the About navy quote band
  (keeps `page-hero-about.webp`). Other `page-hero-*.webp` files stay in
  `public/assets` for possible reuse.

## Verification

`npm run lint`, `npm run build`, headless-Chrome screenshots.
