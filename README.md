# Azuma Solutions website (Next.js)

New site for **azumasolution.com**, replacing the WordPress build. The decisions behind it live in the
Project Bible (Claude Docs): palette, type, sitemap, SEO and hosting.

Status: **Home page done.** Other pages (Services, About, Insights, Careers, Contact, legal) are linked
but not built yet, so those links 404 for now.

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
- `output: "standalone"` + `server.js` for Hostinger Node.js hosting (same setup as HiScale)

## Where things are

| Path | What |
| --- | --- |
| `src/lib/site.ts` | **Single source of truth**: phone, WhatsApp, email, nav, services, audiences, process, founders, FAQ |
| `src/app/layout.tsx` | Fonts and site-wide metadata |
| `src/app/page.tsx` | Home page + JSON-LD (Organization/AccountingService, FAQPage) |
| `src/components/home/` | Home sections: Nav, Hero (+ LiveVisual), Marquee, Services, Audiences, Why, Sections (Founders, CTA, Footer), TabBar, Reveal |
| `src/components/home/home.module.css` | All home styles |
| `public/brand/`, `public/people/` | Logo files and founder photos (from the live site) |
| `public/photos/` | Stock photos from Unsplash (free licence); credits in `public/photos/CREDITS.md` |
| `docs/screens/` | Screenshots of the current build |

## Design notes

- The home page is short and keyword-first (owner feedback): hero, trust bar, keyword marquee, 6 service photo tiles,
  4 audience photo cards, Why Azuma, founders, CTA. Process, FAQ and insights move to inner pages (data stays in `site.ts`).
- "Alive" like HiScale: drifting light in the hero and page background, a team photo that tilts with the pointer and
  slowly zooms, a notification card cycling client updates, breathing cash-flow bars, floating pills, a two-row keyword
  marquee, photo tiles that zoom on hover, staggered scroll reveal and a pulsing WhatsApp button.

- Follows the house style of the HiScale, Fecto and ASINAS sites: floating glass pill nav, glass panels over a
  soft colour field, sticky section headings, a scroll-linked process rail, scroll reveal, dark CTA card and an
  iOS-style tab bar on phones.
- Motion respects `prefers-reduced-motion`; glass respects `prefers-reduced-transparency`.
- Backgrounds are never flat white: a fixed teal/ink colour field with a fine ledger grid behind the glass, a dark
  photographic hero (photo + ink overlay + teal glow + grid), a tinted band behind "How it works" and a photo CTA.
- `Tight` wraps `. , -` in large headings to pull in Plus Jakarta Sans' wide punctuation spacing.

## To confirm with the client before launch

- [ ] Which number is WhatsApp (`site.ts` uses +1 (920) 473-1934, as the live hero button does)
- [ ] "Free consultation" wording and the FAQ answers on pricing and the consultation
- [ ] Pillar promises: "Price confirmed before work starts", "Compliance checked before anything is filed"
- [ ] "Bookkeeping" as a named service (the current site only says financial statements and reporting)
- [ ] Founder bios and titles
- [ ] The hero's workspace visual is illustrative only; confirm the client is comfortable with it
- [ ] Stock photos (hero, audiences, article, CTA): replace with real Azuma photos when available

## Deploy (Hostinger Business plan, Node.js)

Push to a GitHub repo, connect GitHub in hPanel, then deploy the branch as a Node.js app to a staging
subdomain first. See the Project Bible's "Hosting, deployment & security" section.
