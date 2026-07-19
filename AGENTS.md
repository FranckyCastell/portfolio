# AGENTS.md

## Project Overview

Static personal portfolio for Francesc Castell (DevOps engineer). Built with
Astro 5 + Tailwind CSS v4 + TypeScript. Seven pages (home, about, experience,
projects, stack, contact, 404) rendered from typed data files. Deployed as a
fully static site — no backend, no SSR, no database.

## Tech stack

| Layer | Choice |
| :--- | :--- |
| Framework | Astro 5.18 (static output) |
| Styling | Tailwind CSS v4 (`@theme`, `@utility`, `@custom-variant` — no `tailwind.config.ts`) |
| Language | TypeScript (strict mode) |
| Fonts | Self-hosted woff2 in `public/fonts/` (no Google Fonts request) |
| Icons | Inline SVG + PNG favicons derived from `public/logo.png` |
| Deploy target | Any static host (Vercel, Cloudflare Pages, S3+CloudFront) |

## Setup commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:4321
npm run host         # preview build exposed to LAN (--host flag)
npm run build        # typecheck + build to dist/
npm run preview      # serve the production build locally
npx astro check      # TypeScript diagnostics for .astro files (run before commit)
```

Requires Node 18+. No environment variables needed.

## Development workflow

- **Hot reload:** `npm run dev` watches `src/` and `public/`. Changes to
  `.astro` files reload instantly; changes to `src/data/*.ts` require a refresh.
- **Path aliases** (configured in both `tsconfig.json` and `astro.config.mjs`):
  - `@/*` → `src/*`
  - `@components/*` → `src/components/*`
  - `@data/*` → `src/data/*`
  - `@layouts/*` → `src/layouts/*`
  - `@styles/*` → `src/styles/*`
- **CSS-first Tailwind v4:** theme tokens live in `@theme {}` inside
  `src/styles/global.css`. There is no `tailwind.config.ts`. Custom utilities
  use `@utility` directive (not `@layer components`).

## Content editing

All copy lives in `src/data/*.ts` — **never edit content inside `.astro` files**.

| File | What it controls |
| :--- | :--- |
| `src/data/site.ts` | Nav items, social links (email, GitHub, LinkedIn, location) |
| `src/data/skills.ts` | Stack page — 8 skill groups with items |
| `src/data/experience.ts` | Experience page — roles, periods, highlights, stack |
| `src/data/projects.ts` | Projects page — featured flag controls card vs row |
| `src/data/certifications.ts` | About page — `status: "active"` or `"in-progress"` |

To add a project: add an object to `projects.ts`. Set `featured: true` for a
card with highlights, or omit for a compact row under "Also built".

## Code style

- **TypeScript strict** — `astro/tsconfigs/strict`. No `any` without justification.
- **Astro components** — frontmatter between `---`, no React/Vue/Svelte.
- **CSS** — Tailwind utility classes in markup. Custom design tokens via CSS
  variables (`var(--color-*)`). Custom utilities via `@utility` in `global.css`.
- **Colors** — OKLCH exclusively. When adjusting the ink scale, verify WCAG AA
  contrast (≥4.5:1) on the lightest surface used (`--color-surface-2`).
  OKLCH Lightness ≠ WCAG relative luminance — L=50% is ~2.35:1, not 50%.
- **No comments** in source unless explicitly requested.
- **Filenames** — kebab-case for `.astro` components (e.g. `MobileMenu.astro`
  uses PascalCase for the component, but the file is `MobileMenu.astro`).

## Build and deployment

```bash
npm run build        # outputs to dist/
```

The build produces:
- `dist/index.html`, `dist/about/`, `dist/experience/`, `dist/projects/`,
  `dist/stack/`, `dist/contact/`, `dist/404.html`
- `dist/robots.txt` and `dist/sitemap.xml` (dynamic endpoints in `src/pages/`)
- `dist/_astro/*.css` (minified, single file)
- `dist/fonts/*.woff2` (self-hosted)
- `dist/*.png` (favicons, og-image, logo)

**Deploy:** upload `dist/` to any static host. No server-side runtime needed.

## Critical gotchas (these caused real bugs)

### 1. Theme toggle + View Transitions

Astro `ClientRouter` (View Transitions API) replaces the `<html>` element
attributes during navigation. The server renders without `.dark` (it doesn't
know `localStorage`), so navigating between pages loses the theme class.

**Fix in place:** The anti-FOUC script in `BaseLayout.astro` `<head>` listens
for `astro:after-swap` and re-applies `.dark` from `localStorage`. The
`ThemeToggle.astro` script re-binds its click listener on `astro:after-swap`.

**Rule:** Any new script that touches `document.documentElement` or binds to
DOM elements must re-execute on `astro:after-swap`.

### 2. Mobile menu stacking context

The mobile menu overlay (`MobileMenu.astro`) **must not** be a child of
`<header>`. The header has `position: fixed + z-50`, which creates a stacking
context. A child with `z-[90]` is evaluated within that context, not globally,
so page content can appear above the overlay.

**Fix in place:** `MobileMenu` is rendered in `BaseLayout.astro` as a sibling
of `<Nav>`, not inside it. The hamburger button lives in `Nav.astro`; the
overlay panel lives in `MobileMenu.astro`. They communicate via
`getElementById`.

### 3. Self-hosted fonts (no Google Fonts)

Fonts are in `public/fonts/` as woff2 files. `@font-face` declarations are in
`src/styles/global.css`. Three critical fonts are preloaded in
`BaseLayout.astro`:
- `inter-400.woff2` (body text)
- `inter-tight-700.woff2` (display headings)
- `jbm-400.woff2` (mono labels)

**Do not** add Google Fonts `<link>` tags — it re-introduces render-blocking
requests and 3MB of unused JS.

### 4. Tailwind v4 `@utility` with pseudo-elements

`@utility` names must be alphanumeric. Pseudo-elements go inside the body:

```css
/* WRONG — invalid utility name */
@utility cursor-blink::after { ... }

/* RIGHT — pseudo-element nested inside */
@utility cursor-blink {
  &::after { ... }
}
```

### 5. OKLCH contrast verification

The ink scale (`--color-ink` through `--color-ink-5`) must pass WCAG AA on
every surface where it's used. The lightest surface is `--color-surface-2`
(OKLCH L=14.5% in dark, 97% in light). Minimum OKLCH L for 4.5:1 on
surface-2 dark is ~77%. Current values:

| Token | Dark L | Light L |
| :--- | :--- | :--- |
| `--color-ink` | 97% | 15% |
| `--color-ink-2` | 90% | 25% |
| `--color-ink-3` | 84% | 40% |
| `--color-ink-4` | 82% | 48% |
| `--color-ink-5` | 79% | 55% |

When changing these, test with a contrast checker against both themes.

### 6. CSS is single-file and minified

All styles live in `src/styles/global.css`. The build outputs a single
minified CSS file to `dist/_astro/`. `compressHTML: true` and
`inlineStylesheets: 'auto'` are set in `astro.config.mjs`.

## Asset generation

Favicons and OG image are derived from `public/logo.png` using ImageMagick:

```bash
# Favicons (transparent)
convert public/logo.png -resize 32x32 -strip public/favicon-32.png
convert public/logo.png -resize 64x64 -strip public/favicon-64.png
convert public/logo.png -resize 256x256 -strip public/favicon-256.png
convert public/logo.png -resize 180x180 -strip public/apple-touch-icon.png

# PWA maskable icons (with canvas background for safe zone)
convert public/logo.png -resize 140x140 -background "#08080a" -gravity center -extent 192x192 -strip public/icon-192.png
convert public/logo.png -resize 374x374 -background "#08080a" -gravity center -extent 512x512 -strip public/icon-512.png

# Navbar logo (32px)
convert public/logo.png -resize 40x40 -strip public/logo-nav.png
```

## SEO

The site ships with complete SEO. `src/components/Seo.astro` handles:
- Canonical URL (self-referencing, derived from `path` prop)
- `robots` meta with `max-image-preview:large`
- Open Graph + Twitter Card with `og-image.png` (1200×630)
- JSON-LD: `Person` schema (with `sameAs`, `knowsAbout`, `hasCredential`) +
  `WebSite` schema
- `og:locale` alternates: `en_US`, `es_ES`, `ca_ES`

Dynamic endpoints:
- `src/pages/robots.txt.ts` — serves `User-agent: * / Allow: /`
- `src/pages/sitemap.xml.ts` — lists all 6 routes with `lastmod` and `priority`

When adding a new page, add it to the `routes` array in `sitemap.xml.ts`.

## Testing instructions

There are no automated tests. Verification before commit:

```bash
npx astro check      # TypeScript diagnostics (must be 0 errors)
npx astro build      # must complete without errors
```

Manual checks after visual changes:
- Test both light and dark themes (toggle in nav).
- Test mobile viewport (<640px) — hamburger menu must open/close, overlay
  must cover full screen with opaque background.
- Test a page navigation (View Transitions) — theme must persist across pages.
- Test `/404` (visit any non-existent URL).
- Run Lighthouse on `npm run host` — target ≥95 on all four categories.

## File map

```
src/
├── layouts/
│   ├── BaseLayout.astro       # shell · SEO · fonts · View Transitions · reveals
│   └── PageLayout.astro       # subpage header (eyebrow + h1 + lede)
├── pages/
│   ├── index.astro            # home: hero + current role + featured projects + CTA
│   ├── about.astro            # bio + principles + certifications + education
│   ├── experience.astro       # timeline with 5 roles
│   ├── projects.astro         # featured cards + secondary list
│   ├── stack.astro            # 8 skill groups (AWS + LLMOps featured, rest grid)
│   ├── contact.astro          # 3 channels + location + response time
│   ├── 404.astro              # custom 404
│   ├── robots.txt.ts          # dynamic robots endpoint
│   └── sitemap.xml.ts         # dynamic sitemap endpoint
├── components/
│   ├── Nav.astro              # tabs with active state + theme toggle + hamburger
│   ├── Footer.astro           # sitemap + social links
│   ├── MobileMenu.astro       # full-screen overlay (NOT inside header)
│   ├── ThemeToggle.astro      # sun/moon toggle (re-binds on after-swap)
│   ├── ScrollChrome.astro     # progress bar + back-to-top button
│   └── Seo.astro              # meta + JSON-LD + OG + Twitter Card
├── data/                      # all content, typed
│   ├── site.ts                # nav + social
│   ├── skills.ts              # 8 groups
│   ├── experience.ts          # 5 roles
│   ├── projects.ts            # 6 projects
│   └── certifications.ts      # 4 certs (2 active, 2 in-progress)
└── styles/
    └── global.css             # @theme tokens · @font-face · @utility · base
```

## Pull request guidelines

- Run `npx astro check` and `npx astro build` before committing — both must pass.
- No secrets in code or commits. The site is fully static; there are no API keys.
- Commit messages: present tense, imperative (e.g. "Add projects page", not
  "Added projects page").
- Don't commit `dist/` — it's in `.gitignore` and regenerated on build.
