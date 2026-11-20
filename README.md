# Azuma Solutions website (Next.js)

New site for **azumasolution.com**, replacing the WordPress build. The decisions behind it live in the
Project Bible (Claude Docs): palette, type, sitemap, SEO and hosting.

Status: **All pages built**: Home, Services (one page, six categories), About, Contact (working form on Netlify), Careers,
Insights + article, Privacy, Terms, Disclaimer, 404. Pricing is left out until the client confirms prices
(`/pricing` redirects to `/contact`). The old per-service URLs redirect (308) to `/services#<category>`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static home page)
```

## Stack

- Next.js 16.3 (App Router, Turbopack) + React 19.2, TypeScript, same versions as the HiScale site
- CSS Modules with design tokens in `src/app/globals.css` (Ink & Teal palette from the logo)
- Plus Jakarta Sans (headings) + Inter (body), self-hosted from `@fontsource-variable` via `next/font/local`
- lucide-react icons
- cobe (WebGL dotted globe, ~5 KB) for the Worldwide section
- `output: "standalone"` + `server.js` for Hostinger Node.js hosting (same setup as HiScale)

## Where things are

| Path | What |
| --- | --- |
| `src/lib/site.ts` | **Single source of truth**: phone, WhatsApp, email, nav, service categories, regions/cities for the globe, audiences, process, founders, FAQ |
| `src/app/layout.tsx` | Fonts and site-wide metadata |
| `src/app/page.tsx` | Home page + Organization/AccountingService JSON-LD |
| `src/components/site/` | Shared design system: Shell (nav, footer, tab bar, WhatsApp button, reveal), PageHero, CategoryCards, Worldwide + WorldGlobe, Steps, Audiences, Why, ContactForm, LegalPage, home sections |
| `src/components/site/site.module.css` | All styles (one CSS module) |
| `src/app/**/page.tsx` | One file per page; article pages are generated from `site.ts` |
| `public/__forms.html` | Netlify Forms registration for the consultation form |
| `public/brand/`, `public/people/` | Logo files and founder photos (from the live site) |
| `public/photos/` | Stock photos from Unsplash (free licence); credits in `public/photos/CREDITS.md` |
| `docs/screens/` | Screenshots of the current build |

## Design notes

- The home page is short and keyword-first (owner feedback): hero, trust bar, keyword marquee, a bento of 6 service
  categories (40+ services as keyword chips, plus "Don't see your need? Ask us"), the Worldwide globe, 4 audience
  photo cards, Why Azuma, founders, CTA. Process, FAQ and insights move to inner pages (data stays in `site.ts`).
- "Alive" like HiScale: drifting light in the hero and page background, a team photo that tilts with the pointer and
  slowly zooms, a notification card cycling client updates, breathing cash-flow bars, floating pills, a two-row keyword
  marquee, photo tiles that zoom on hover, staggered scroll reveal and a pulsing WhatsApp button.

- Services read as broad, not a short list: six categories, each listing its services; the Services page shows
  every category with a photo and full list, with a sticky category bar.
- Worldwide section: a slowly rotating dotted globe (cobe) with 23 city markers and amber arcs between the hubs.
  The region list auto-cycles every few seconds (USA, Canada, Europe, Middle East, Pakistan, Southeast Asia);
  clicking a region turns the globe to it and shows city labels (CSS anchor positioning on cobe's marker anchors).
  Drag to spin. Starts only when scrolled near; static under reduced motion.

- Follows the house style of the HiScale, Fecto and ASINAS sites: floating glass pill nav, glass panels over a
  soft colour field, sticky section headings, a scroll-linked process rail, scroll reveal, dark CTA card and an
  iOS-style tab bar on phones.
- Motion respects `prefers-reduced-motion`; glass respects `prefers-reduced-transparency`.
- Backgrounds are never flat white: a fixed teal/ink colour field with a fine ledger grid behind the glass, a dark
  photographic hero (photo + ink overlay + teal glow + grid), a tinted band behind "How it works" and a photo CTA.
- `Tight` wraps `. , -` in large headings to pull in Plus Jakarta Sans' wide punctuation spacing.

## To confirm with the client before launch

- [ ] Services marked `// confirm` in `SERVICE_CATEGORIES` (`site.ts`): not on the current site, added to show range
- [ ] Globe: the regions and cities in `REGIONS`, and the "Clients across 6 regions" line
- [ ] Careers copy
- [ ] Privacy, Terms and Disclaimer: plain-English drafts, have the client (ideally counsel) review
- [ ] Article: the Solo 401(k) figure ($69,000) is the 2024 limit; the 2025 limit is $70,000
- [ ] Contact form: in Netlify, turn on form notifications (Forms → consultation → Email) so requests reach info@

- [ ] Which number is WhatsApp (`site.ts` uses +1 (920) 473-1934, as the live hero button does)
- [ ] "Free consultation" wording and the FAQ answers on pricing and the consultation
- [ ] Pillar promises: "Price confirmed before work starts", "Compliance checked before anything is filed"
- [ ] "Bookkeeping" as a named service (the current site only says financial statements and reporting)
- [ ] Founder bios and titles
- [ ] The hero's workspace visual is illustrative only; confirm the client is comfortable with it
- [ ] Stock photos (hero, audiences, article, CTA): replace with real Azuma photos when available

## Forms

The consultation form posts to Netlify Forms (registered in `public/__forms.html`). Submissions appear in the
Netlify dashboard under Forms; add an email notification there. On another host (e.g. Hostinger) the post fails
gracefully and visitors are shown the email and WhatsApp alternatives; switch it to a Server Action + SMTP then.

## Deploy (Hostinger Business plan, Node.js)

Push to a GitHub repo, connect GitHub in hPanel, then deploy the branch as a Node.js app to a staging
subdomain first. See the Project Bible's "Hosting, deployment & security" section.
