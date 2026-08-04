# Luxury typography + size/spacing tightening

Date: 2026-08-04 — Status: approved by user

## Typography

- Load `Cormorant_Garamond` (400–700) via `next/font/google` as
  `--font-cormorant`; remove Poppins (loaded but unused).
- Global rule in `globals.css`: `h1, h2, h3` render in Cormorant serif.
  Element-level rule, so the South Catalonia utility class still wins where
  applied (home hero title, script accents).
- Heading components drop `uppercase` / `font-extrabold` in favor of
  Title Case serif at `font-semibold`. Body, nav, buttons, labels stay
  Montserrat. About stats numerals get `font-cormorant` for the editorial
  look.

## Tightening (one notch down)

- PageHero: `pt-14/20 → pt-10/14`, title `3xl/5xl → 3xl/4xl`.
- Home hero: vertical paddings reduced ~20%, title capped at `lg:text-8xl`
  (was 150px at xl).
- Sections: `py-14 → py-10` across home + inner pages; About page
  `py-20/28 → py-14/20`, gaps `16/20 → 12/16`.
- Numbers: About stats `5xl/6xl → 4xl/5xl`; navy quote `4xl/6xl → 3xl/5xl`.
- Banner headings (newsletter, seasonal offer): drop `2xl:text-5xl` cap and
  uppercase.
- Detail pages (`/yachts/[slug]`, `/blog/[slug]`): h1 `5xl → 4xl`, no
  uppercase/extrabold.
- Small serif titles bump one size for legibility (blog card `lg → xl`,
  values `lg → xl`).

## Verification

`npm run lint`, `npm run build`, headless-Chrome screenshots of home,
/about, /yachts.
