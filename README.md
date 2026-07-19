<div align="center">

<img src="public/logo.png" width="80" height="80" alt="Francesc Castell logo" />

# Francesc Castell · Portfolio

A static, SEO-optimized personal portfolio built with Astro + Tailwind v4.
Dense editorial aesthetic, command palette (⌘K), JSON-LD structured data, and
first-class Lighthouse scores by default.

[Live](https://francesccastell.dev) · [Features](#features) · [Quick start](#quick-start) · [Customize](#customize) · [Deploy](#deploy)

</div>

---

## Overview

Single-page portfolio for a DevOps engineer specialising in AWS, Terraform and
LLMOps. Six numbered sections (About, Stack, Experience, Work, Certifications,
Contact) rendered from typed data files, with a Cmd+K command palette, scroll
progress bar, back-to-top, and a complete SEO layer (sitemap, robots, JSON-LD
Person + WebSite, Open Graph, Twitter Card, web manifest).

Built to ship fast and stay fast: static output, zero client JS frameworks,
inline critical CSS, lazy non-critical assets.

## Features

- **Astro 5 + Tailwind v4** — CSS-first `@theme` config, `@utility` directives, OKLCH color tokens.
- **Command palette (⌘K)** — keyboard-navigable, filters sections + external links, `Esc` to close.
- **Scroll chrome** — 1px progress bar bound to `requestAnimationFrame`, back-to-top button after 600px.
- **Design tokens** — semantic surfaces, ink scale, accent, ring, shadows, animations, all in OKLCH.
- **Compound UI primitives** — `Button` (variants × sizes), `Card`, `Tag`, `Section`.
- **SEO** — `Person` + `WebSite` JSON-LD, canonical, `robots` meta with `max-image-preview:large`, `og:locale` alternates (en/es/ca), 1200×630 OG image.
- **PWA-ready** — web manifest, maskable icons (192/512), apple-touch-icon, `theme-color` responsive.
- **Accessibility** — skip link, focus ring on all interactives, `prefers-reduced-motion` honored, ARIA on dialog.
- **Performance** — font preload + preconnect, `font-display: swap`, inlined small stylesheets, compressed HTML.
- **Typed content** — all copy lives in `src/data/*.ts`, separated from presentation.

## Tech stack

| Layer | Choice |
| :--- | :--- |
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 (`@theme`, `@utility`, `@custom-variant`) |
| Language | TypeScript (strict) |
| Fonts | Inter · Inter Tight · JetBrains Mono (self-hosted woff2) |
| Icons | Inline SVG + favicon set |
| Deploy target | Cloudflare Pages / Vercel / Netlify (static) |

## Quick start

Requires Node 18+ and npm.

```bash
# install
npm install

# dev server at http://localhost:4321
npm run dev

# typecheck + build to dist/
npm run build

# preview the production build
npm run preview
```

`astro check` runs type diagnostics on `.astro` files; the build fails on any
error.

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg              # primary icon
│   ├── favicon-32.png           # fallback PNG
│   ├── apple-touch-icon.png     # 180×180 iOS
│   ├── icon-{192,512}.png      # PWA maskable
│   ├── og-image.{svg,png}       # 1200×630 social card
│   ├── robots.txt               # static fallback (endpoint also served)
│   └── site.webmanifest         # PWA manifest
│
├── src/
│   ├── pages/
│   │   ├── index.astro          # section composition
│   │   ├── robots.txt.ts        # dynamic robots endpoint
│   │   └── sitemap.xml.ts        # dynamic sitemap endpoint
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro     # shell · SEO · fonts · chrome
│   │
│   ├── components/
│   │   ├── Nav.astro             # sticky header + ⌘K button
│   │   ├── Hero.astro            # name + status terminal panel
│   │   ├── About.astro           # bio + operating principles + education
│   │   ├── Skills.astro          # 8-group stack grid
│   │   ├── Experience.astro      # timeline (5 roles)
│   │   ├── Projects.astro        # featured cards + "also built" list
│   │   ├── Certifications.astro  # AWS certs with active status
│   │   ├── Contact.astro         # CTA + social sidebar
│   │   ├── Footer.astro
│   │   ├── CommandPalette.astro  # ⌘K dialog with keyboard nav
│   │   ├── ScrollChrome.astro    # progress bar + back-to-top
│   │   ├── Seo.astro             # meta + JSON-LD + OG + Twitter
│   │   └── ui/
│   │       ├── Button.astro     # primary / outline / ghost × sm/md/lg
│   │       ├── Card.astro       # polymorphic compound primitive
│   │       ├── Section.astro    # numbered section wrapper
│   │       └── Tag.astro         # default / accent / positive / negative / ghost
│   │
│   ├── data/                     # all content, typed
│   │   ├── site.ts               # nav + social
│   │   ├── skills.ts             # 8 groups, 50+ items
│   │   ├── experience.ts         # 5 roles
│   │   ├── projects.ts           # 6 projects (featured + secondary)
│   │   └── certifications.ts     # 2 AWS certs
│   │
│   └── styles/
│       └── global.css            # @theme tokens · @utility · base · components
│
├── astro.config.mjs              # Vite aliases · Tailwind plugin · build opts
├── tsconfig.json                 # strict · path aliases
└── package.json
```

## Customize

All copy lives in `src/data/`. Update the typed files; the UI re-renders.

| File | What to edit |
| :--- | :--- |
| `src/data/site.ts` | Email, GitHub, LinkedIn, location, nav items |
| `src/data/skills.ts` | Skill groups and items |
| `src/data/experience.ts` | Roles, periods, highlights, stack per job |
| `src/data/projects.ts` | Projects (featured flag controls card vs row) |
| `src/data/certifications.ts` | Certifications with issued/expires dates |
| `src/components/Hero.astro` | Headline, tagline, CTA buttons, status panel |
| `src/components/About.astro` | Bio paragraphs, operating principles, education |
| `public/og-image.svg` | Source for the social card (then regenerate PNG) |

### Regenerate OG image

```bash
convert -background none -density 144 public/og-image.svg \
  -resize 1200x630 -strip -quality 95 public/og-image.png
```

### Regenerate favicons

```bash
convert -background none public/favicon.svg -resize 32x32 -strip public/favicon-32.png
convert -background "#08080a" public/favicon.svg -resize 180x180 -strip public/apple-touch-icon.png
convert -background "#08080a" public/favicon.svg -resize 192x192 -strip public/icon-192.png
convert -background "#08080a" public/favicon.svg -resize 512x512 -strip public/icon-512.png
```

### Update the domain

Edit `SITE_URL` in:
- `src/components/Seo.astro`
- `src/pages/sitemap.xml.ts`
- `astro.config.mjs` (`site` field)

## Deploy

The build outputs a static site to `dist/`. Any static host works.

### Cloudflare Pages

```bash
npm run build
# Framework preset: Astro
# Build command: npm run build
# Output directory: dist
# Node version: 18+
```

### Vercel

```bash
npx vercel
# Astro is auto-detected. No extra config needed.
```

### Manual (any static host)

```bash
npm run build
# upload dist/ to your host (S3 + CloudFront, nginx, Caddy, etc.)
```

## SEO checklist

This template ships with:

- [x] Canonical URL on every page
- [x] `robots.txt` + `sitemap.xml` (dynamic endpoints + static fallback)
- [x] `Person` + `WebSite` JSON-LD with `sameAs`, `knowsAbout`, `hasCredential`
- [x] Open Graph tags with 1200×630 image and `og:locale` alternates
- [x] Twitter Card (`summary_large_image`) with `twitter:site` + `twitter:creator`
- [x] Web manifest + maskable icons
- [x] `theme-color` responsive (dark + light media queries)
- [x] Optimized `<title>` (≤60 chars) and meta description (≈155 chars)
- [x] `robots` meta with `max-image-preview:large`

After deploying:

1. Verify property in **Google Search Console** and submit `/sitemap.xml`.
2. Submit URL to **Bing Webmaster Tools**.
3. Validate JSON-LD at [Rich Results Test](https://search.google.com/test/rich-results).
4. Run **PageSpeed Insights** to confirm Core Web Vitals.

## Accessibility

- Skip-to-content link on first tab stop
- Visible focus ring (`outline: 2px solid`) on all interactives
- `prefers-reduced-motion` disables all animations
- ARIA roles on the command palette (`dialog`, `listbox`, `option`)
- `aria-hidden` on decorative elements
- Color contrast on all text against `oklch(8% 0.004 285)` canvas meets WCAG AA

## License

Source code is private. Content (bio, experience, projects) is personal IP of
Francesc Castell.

<div align="center">

Built with Astro + Tailwind v4 · Barcelona, Catalonia

</div>
