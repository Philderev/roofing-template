# NovaRidge Roofing — Las Vegas (Demo Template)

Fictional, futuristic roofing-company website for the Vegas Valley, built per the
[Website Build SOP](https://docs.google.com/document/d/1O600R3HISuXLJumBvrtS0CZI8HaTCHjZExtLNCQleGM/).
Fully static — deployable to any host (Hostinger FTP `public_html`, GitHub Pages staging, etc.).

## Structure

```
index.html                  Home (hero video, trust bar, about, services, why-us, projects, process, areas, reviews, FAQ, CTA)
services/<slug>/            4 service pages (replacement, repair, tile, flat-roof coatings)
service-areas/<slug>/       3 area pages (Summerlin, Henderson, North Las Vegas)
pricing/  about/  contact/  Core pages
privacy/  terms/            Legal pages (linked from footer + form consent line)
thank-you/                  Post-form-submit confirmation (noindex, robots-disallowed)
404.html                    Custom not-found (noindex)
sitemap.xml  robots.txt     SEO plumbing (update domain in _build/build.js)
assets/video/               hero.webm + hero.mp4 (H.264, iPhone/Mac-safe) + poster.jpg/webp
assets/img/                 Photos (WebP + JPG fallback), current logo and social-preview images
assets/fonts/               Space Grotesk (OFL) — preloaded, inlined @font-face
assets/img/nrr-2.png        Browser favicon and transparent brand mark
assets/img/nrr.png          Apple touch icon and social-preview image
_build/                     Source of truth — never edit generated HTML by hand
```

## Build

```
node _build/build.js   # regenerates all pages, sitemap, and robots
node _build/audit.js   # link/schema/meta sanity check
```

All content, NAP, palette, and the placeholder domain live at the top of `_build/build.js`.
CSS (`_build/styles.css`) is inlined into every page at build time — zero render-blocking requests.

## Performance & SEO notes

- Hero video lazy-loads after `window.load` (WebM first, MP4 fallback), `muted autoplay loop playsinline`,
  skipped under `prefers-reduced-motion` / `Save-Data`. Poster JPG is the preloaded LCP.
- JSON-LD: `RoofingContractor` sitewide, `BreadcrumbList` + `Service` + `FAQPage` on subpages.
- Unique titles/descriptions/canonicals per page; 404 is `noindex`.
- Media: video sourced from Pexels (free license, video #31025088), re-encoded with ffmpeg.
  Photos also Pexels (free license) — served as WebP with JPG fallback via `<picture>`.
- Palette: cream/yellow backgrounds (`#fffbec` / `#fff3c4` / `#ffd84d`), green accents
  (`#1e7a3e` / `#2fa45a` / `#7cb528`), deep pine footer (`#122e1c`).
- Demo lead form redirects to `/thank-you/` on submit (GHL form replaces this in production;
  point its redirect at the same URL).

## Production TODO (real client)

- Replace placeholder domain `www.novaridgeroofing.com` in `_build/build.js`, rebuild.
- Paste GA4 / GTM / GHL snippets at the marked comments in the `<head>` template.
- Swap the demo lead form for the client's GHL form embed (marked in `_build/build.js`).
- Replace fictional NAP/reviews with real, GBP-matching data.
