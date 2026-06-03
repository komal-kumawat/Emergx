# EmergX — SEO TODOs

Items below need real information or assets before launch. Update `src/lib/data/site.data.ts` (and related files) once confirmed.

---

## Required information (confirm with team)

- [ ] **Production URL** — currently `https://emergx.ai` in `siteConfig.url`. Confirm final domain (with or without `www`) and update `metadataBase`, `robots.ts`, and `sitemap.ts`.
- [ ] **Twitter / X handle** — currently `@EmergX` (placeholder). Add the real handle to `siteConfig.twitterHandle`.
- [ ] **LinkedIn URL** — footer links to LinkedIn but URL is not in site config yet. Add to `siteConfig.social.linkedin`.
- [ ] **Instagram URL** — footer links to Instagram but URL is not in site config yet. Add to `siteConfig.social.instagram`.
- [ ] **Contact email** — only phone (`+91 91628 41781`) is set. Add a support or hello@ email for structured data and footer.
- [ ] **Brand colors** — `themeColor` is `#0a0a0a` and OG uses purple gradient (`#6366f1` → `#8b5cf6`). Confirm against the official brand guide.
- [ ] **Meta description** — review copy in `siteConfig.description` with marketing before go-live.
- [ ] **Keywords list** — review `siteConfig.keywords` with marketing; remove/add terms based on target search intent.

---

## Brand assets (replace placeholders)

Current favicons and OG images use a generated **“E” placeholder logo**. Replace with final EmergX brand files.

- [ ] **Logo SVG** — replace `public/icon.svg` with the official EmergX logo (optimized for small sizes).
- [ ] **favicon.ico** — replace `public/favicon.ico` (or regenerate via `npm run generate:seo-assets` after updating the script with real logo).
- [ ] **favicon-96x96.png** — replace placeholder in `public/`.
- [ ] **apple-touch-icon.png** — replace 180×180 placeholder in `public/`.
- [ ] **og-image.png** — replace 1200×630 static fallback in `public/` with a designed social preview (used by crawlers that don’t hit dynamic OG).
- [ ] **opengraph-image.tsx** — update `src/app/opengraph-image.tsx` to use the real logo, brand fonts, and approved layout/copy.
- [ ] **generate-seo-assets script** — update `scripts/generate-seo-assets.mjs` with final brand colors and logo source file, then run `npm run generate:seo-assets`.

---

## Sitemap & routes (add as pages ship)

`sitemapRoutes` in `site.data.ts` only includes the homepage. Add each indexable page when built:

- [ ] `/` — homepage (done)
- [ ] `/for-candidates` — For Candidates page
- [ ] `/try-eva` — Try Eva page
- [ ] `/request-demo` — Request Demo page (if standalone route)
- [ ] `/contact` — Contact page (if standalone route)
- [ ] Any blog, docs, or legal pages (privacy policy, terms of service)

For each new route, also add:
- Page-specific `metadata` export (title, description, canonical)
- Optional per-page `opengraph-image.tsx` if the share preview should differ from the default

---

## Search engine & analytics setup (post-deploy)

- [ ] **Google Search Console** — verify domain ownership; add verification meta tag or DNS record to `site.data.ts` / hosting.
- [ ] **Bing Webmaster Tools** — verify site and submit sitemap.
- [ ] **Submit sitemap** — manually submit `https://<domain>/sitemap.xml` in Search Console and Bing after deploy.
- [ ] **robots.txt review** — confirm `/api/` and `/_next/` disallow rules are correct for production; add any private/admin paths.
- [ ] **Analytics** — add Google Analytics 4 or preferred analytics (separate from core metadata, but needed for SEO reporting).

---

## Structured data (JSON-LD) — not yet implemented

Add to `layout.tsx` or a dedicated component once info above is confirmed:

- [ ] **Organization** — name, url, logo, contactPoint (phone, email), sameAs (LinkedIn, Instagram, Twitter).
- [ ] **WebSite** — name, url, potentialAction (SearchAction if site search exists).
- [ ] **SoftwareApplication** — for Eva / EmergX product (description, category, offers if applicable).
- [ ] **FAQPage** — match the FAQ section on the homepage (5 questions from page copy).

---

## Optional polish

- [ ] **Per-page Twitter image** — add `src/app/twitter-image.tsx` (must duplicate config; cannot re-export from `opengraph-image.tsx` in Next.js).
- [ ] **hreflang** — only needed if launching localized versions (e.g. `en-IN`, `en-US`).
- [ ] **Privacy / Terms pages** — often required for trust signals and ad/analytics compliance; add to sitemap when live.
- [ ] **LLMs.txt / ai.txt** — optional file describing how AI crawlers may use site content.
- [ ] **Pre-launch SEO audit** — run Lighthouse, check `/robots.txt`, `/sitemap.xml`, and `/opengraph-image` on staging; validate with [Google Rich Results Test](https://search.google.com/test/rich-results) and [opengraph.xyz](https://www.opengraph.xyz/).

---

## Quick reference — files to update

| What | Where |
|------|--------|
| Site config, metadata, sitemap routes | `src/lib/data/site.data.ts` |
| Dynamic OG image | `src/app/opengraph-image.tsx` |
| robots.txt | `src/app/robots.ts` |
| sitemap.xml | `src/app/sitemap.ts` |
| Static icons & OG fallback | `public/` |
| Regenerate PNG/ICO assets | `npm run generate:seo-assets` |
| PWA manifest | `public/site.webmanifest` |
