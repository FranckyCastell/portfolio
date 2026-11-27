# AGENTS.md

## Project

Personal site of Francesc Castell, Cloud Engineer (AWS, Terraform, AI operations).
Two surfaces share one Astro codebase:

| Surface | Path | Audience | Job |
| :--- | :--- | :--- | :--- |
| `francastell.com` | `/` | Hiring managers, recruiters | Portfolio, get interviews |
| `aiops.francastell.com` | `/aiops` | CTOs, platform leads | Service landing, open a conversation |

Static output. No backend, no database, no client-side framework.

## Stack

| Layer | Choice |
| :--- | :--- |
| Framework | Astro 5.18 (static) |
| Styling | Tailwind CSS v4 (`@theme`, `@utility`; no `tailwind.config.ts`) |
| Language | TypeScript strict |
| Fonts | Self-hosted woff2 in `public/fonts/` |
| Runtime | Cloudflare Workers + Static Assets |
| Deploy | Workers Builds on push to `main` |

## Commands

Node 24 is required.

```bash
export PATH="$HOME/.nvm/versions/node/v24.12.0/bin:$PATH"

npm install
npm run dev
npm run build      # must pass before commit
npm run preview
npx astro check    # optional type diagnostics
```

## Structure

- `src/pages/` — one file per route; `aiops.astro` includes the canvas script.
- `src/layouts/` — `BaseLayout` (portfolio shell), `PageLayout` (inner pages),
  `LandingLayout` (AIOps landing, noindex).
- `src/components/` — nav, footer, theme toggle, scroll chrome, SEO.
- `src/data/` — typed content: `site`, `focus`, `experience`, `projects`,
  `skills`, `certifications`.
- `src/styles/global.css` — tokens, fonts, base, utilities.
- `src/worker.ts` — host rewrite for the AIOps subdomain.
- `.agents/skills/` — project skills. Read the relevant one before editing.

## Content rules

Full policy in `.agents/skills/site-content/SKILL.md`. Summary:

1. No metrics without evidence.
2. No client names. Sectors only.
3. Personal work in first person; team work as environment ("the platform I work on").
4. Only `active` certifications are claimed; `in-progress` is "currently studying".
5. No "LLMOps" for operations. It is AIOps.
6. Portfolio in English; AIOps landing in Spanish.
7. The AIOps landing stays `noindex` until the commercial decision is explicit.

## Design system

Full reference in `.agents/skills/design-system/SKILL.md`. Essentials:

- OKLCH tokens in `src/styles/global.css`; dark theme via `.dark` on `<html>`.
- Display: Inter Tight. Body: Inter. Utility: JetBrains Mono.
- Accent is amber (`--color-accent`). Do not invent new colors.
- Small radii, 1px borders, generous section spacing.
- Every animation respects `prefers-reduced-motion`.

## Deploy

Push to `main`; Cloudflare Workers Builds deploys automatically. Details in
`.agents/skills/deploy-cloudflare/SKILL.md`.

`wrangler.toml`:

```toml
name = "portfolio"
main = "src/worker.ts"

[assets]
directory = "./dist"
binding = "ASSETS"
html_handling = "drop-trailing-slash"
run_worker_first = true
```

Subdomain: `AAAA aiops` → `100::` proxied, plus a worker route
`aiops.francastell.com/*` → `portfolio`. `worker.ts` rewrites `/` to `/aiops`
and redirects `francastell.com/aiops` with a 301.

## Gotchas

1. **Assets before worker.** Without `run_worker_first = true`, the asset router
   serves `/` and every existing route before the worker runs. The subdomain
   rewrite silently stops working.
2. **Theme + View Transitions.** `ClientRouter` replaces `<html>` attributes on
   navigation. The anti-FOUC script in `BaseLayout` re-applies `.dark` on
   `astro:after-swap`; any new script touching the document must do the same.
3. **Mobile menu stacking.** `MobileMenu` must be a sibling of `Nav`, not a
   child. The fixed header creates a stacking context that traps `z-index`.
4. **Self-hosted fonts.** No Google Fonts. Preload only the critical faces.
5. **OKLCH contrast.** L=50% is not 50% luminance. Check WCAG AA against
   `--color-surface-2` in both themes.
6. **Tailwind v4 utilities.** No pseudo-elements in `@utility` names; nest them
   inside the block.
7. **Trailing slashes.** `drop-trailing-slash` keeps `/about` at 200 and
   redirects `/about/` to `/about`. Keep sitemap and canonical URLs consistent.

## AIOps animation

`src/pages/aiops.astro`. A canvas scene with four states:

| State | Time | Visual |
| :--- | :--- | :--- |
| 0 | 0 ms | 30 alert particles, noise |
| 1 | 900 ms | beams draw to three sources |
| 2 | 2300 ms | particles absorbed, packets travel |
| 3 | 3900 ms | shockwave, cause and result |

- Started by `IntersectionObserver` at 35% visibility, once.
- Replay button restarts the timeline.
- `prefers-reduced-motion` jumps to state 3 and draws a static frame.
- `visibilitychange` pauses `requestAnimationFrame`.
- Canvas colors are fixed hex (`#f0a32a`, `#e5484d`), not OKLCH, for 2D context compatibility.

## Verification

Before commit:

```bash
npm run build
```

Manual checks:

- `/` and `/about`, `/experience`, `/projects`, `/stack`, `/contact` return 200.
- `aiops.francastell.com` returns 200 and shows the landing.
- `francastell.com/aiops` returns 301 to the subdomain.
- Both themes on the portfolio.
- 390px viewport: nav, hero, canvas and result card.
- Reduced motion: canvas shows the final frame, no animation.

## Changelog

Every meaningful change is recorded in `CHANGELOG.md` with the date and the
reason. The changelog is part of the deliverable, not an afterthought.
