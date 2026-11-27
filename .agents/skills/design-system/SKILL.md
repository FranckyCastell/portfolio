---
name: design-system
description: Tokens, tipografía, componentes y reglas visuales del portfolio. Úsala al crear o modificar páginas, componentes o estilos.
---

# Design system

## Tokens

Todo vive en `src/styles/global.css` dentro de `@theme`. No hay `tailwind.config.ts`.

| Token | Uso |
| :--- | :--- |
| `--color-canvas` | Fondo base |
| `--color-surface`, `-2`, `-3` | Tarjetas y paneles |
| `--color-border`, `-strong` | Bordes |
| `--color-ink` … `-5` | Escala de texto, de más a menos contraste |
| `--color-accent` | Ámbar. Acento único |
| `--color-positive`, `-negative`, `-info` | Estados |
| `--color-accent-glow` | Fondos suaves y halos |

Colores en OKLCH. El tema oscuro se activa con `.dark` en `<html>`.

## Tipografía

- **Display:** Inter Tight, 600/700. Titulares.
- **Cuerpo:** Inter, 400/500.
- **Utilidad:** JetBrains Mono, 400/500. Etiquetas, metadatos, código.

Fuentes autoalojadas en `public/fonts/`. Nunca añadir Google Fonts.

## Componentes

- `BaseLayout.astro` — shell del portfolio: nav, footer, SEO, View Transitions, theme.
- `PageLayout.astro` — páginas internas: eyebrow, heading, lede.
- `LandingLayout.astro` — landing de AIOps: sin nav del portfolio, `noindex`.
- `Seo.astro` — meta, JSON-LD, OG. Solo para el portfolio.

## Reglas

1. No inventar colores nuevos. Si falta un estado, derivarlo con `color-mix` del acento.
2. Etiquetas tipo `mono-label`: mayúsculas, `tracking` amplio, `--color-ink-5`.
3. Bordes de 1px, radios pequeños (2–6px). Nada de sombras grandes salvo el panel de la simulación.
4. Espaciado generoso: secciones `py-16 md:py-20`, contenedores `max-w-5xl` o `max-w-6xl`.
5. Movimiento: transiciones de 0.3–0.5s con `cubic-bezier(0.16, 1, 0.3, 1)`. Todo debe respetar `prefers-reduced-motion`.
6. Accesibilidad: foco visible, contraste AA, `aria-hidden` en lo decorativo, skip link en el portfolio.

## Verificación

```bash
npm run build
```

Comprobar en escritorio y en 390px. Revisar tema claro y oscuro en el portfolio.
