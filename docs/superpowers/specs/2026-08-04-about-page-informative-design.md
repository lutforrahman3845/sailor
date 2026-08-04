# About page — make it actually informative

Date: 2026-08-04 — Status: approved by user

## Problem

The About page sells but does not inform. It says Sailor is "the leading brand
for luxury performance motor yachts" without explaining what the company does,
how a charter works, or what a customer gets. The six real services in
`lib/db/services.ts` are never shown on the page. The existing 01/02/03 values
row numbers three items that are not a sequence, so the numbering carries no
information.

## New page order

1. **Header** — `PageHero`, unchanged.
2. **Story (rewritten copy)** — same offset gallery and "10 years at sea"
   badge. Copy replaced with concrete facts: Sailor operates its own crewed
   fleet (rather than broking third-party boats), five yachts across seven
   coastlines, and what "crewed" means for the guest.
3. **Stats row** — unchanged.
4. **How a charter works (new)** — a real four-step sequence, so the numbering
   encodes order that the reader needs: 01 Choose your yacht → 02 Send an
   enquiry → 03 Plan the route → 04 Step aboard. Steps live in a `STEPS` const
   in the page, matching the existing `STATS` pattern.
5. **What we take care of (new)** — the six services from `getServices()`,
   rendered with the existing `ServiceItem` component so the styling matches
   `/services` and the homepage, plus a link to `/services`. No duplicated copy.
6. **What's included (new)** — two columns, `INCLUDED` and `NOT_INCLUDED`
   consts: crew, bedding and towels, welcome provisioning, water toys,
   itinerary planning and 24/7 support versus fuel, marina and mooring fees,
   food and drink beyond the welcome pack, and crew gratuity.
7. **Navy quote band** — unchanged.
8. **Testimonials** — unchanged.
9. **Removed** — the generic values row; the real services cover its content.

## Data

Services come through `getServices()` (the page is already `async`), so nothing
that belongs in a table is hard-coded. Steps and inclusion lists are About-page
copy and live as page-level consts, consistent with the existing `STATS`.

## Incidental fix

`components/home/services-section.tsx` kept `py-14` when the other sections
were tightened to `py-10`; brought in line.

## Verification

`npm run lint`, `npm run build`, headless-Chrome screenshots of `/about`.
