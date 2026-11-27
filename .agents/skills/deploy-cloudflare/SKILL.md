---
name: deploy-cloudflare
description: Build y despliegue del sitio en Cloudflare Workers, incluyendo el subdominio aiops.francastell.com. Úsala al tocar wrangler.toml, worker.ts, rutas o DNS.
---

# Build y despliegue

## Build

Node 24 es obligatorio para Astro 5 + Tailwind 4 en este repo.

```bash
export PATH="$HOME/.nvm/versions/node/v24.12.0/bin:$PATH"
npm run build
```

Salida en `dist/`. El build debe terminar sin errores antes de commitear.

## Despliegue

El repo está conectado a **Cloudflare Workers Builds**. Cada push a `main` construye y despliega. No hace falta `wrangler deploy` manual.

Verificación tras el push:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://francastell.com
curl -s -o /dev/null -w '%{http_code}\n' https://aiops.francastell.com
```

## `wrangler.toml`

```toml
name = "portfolio"
main = "src/worker.ts"

[assets]
directory = "./dist"
binding = "ASSETS"
html_handling = "drop-trailing-slash"
run_worker_first = true
```

### `run_worker_first` (crítico)

Sin `run_worker_first = true`, el router de Assets sirve `/` y cualquier ruta existente **antes** de ejecutar `src/worker.ts`. El rewrite del subdominio nunca se ejecuta y `aiops.francastell.com` acaba mostrando el portfolio.

## Dominios

| Host | Qué sirve |
| :--- | :--- |
| `francastell.com` | Portfolio (8 páginas) |
| `aiops.francastell.com` | Landing de AIOps (`/aiops`) |
| `www.francastell.com` | CNAME al apex, 301 |

### Configuración del subdominio

1. DNS: `AAAA aiops` → `100::`, proxied.
2. Route del Worker: `aiops.francastell.com/*` → script `portfolio`.
3. `src/worker.ts` reescribe `/` a `/aiops` y redirige `francastell.com/aiops` al subdominio con 301.

### Comprobar

```bash
curl -sI https://francastell.com/aiops | head -3      # 301 -> aiops
curl -s https://aiops.francastell.com | grep -o '<title>[^<]*'
```

## Gotchas

- **Trailing slash:** `html_handling = "drop-trailing-slash"` mantiene `/about` en 200 y redirige `/about/` a `/about`. El sitemap usa rutas sin barra.
- **Assets primero:** ver `run_worker_first`.
- **Cache:** el HTML puede tardar unos segundos en propagar tras el deploy. Verifica con una query (`?v=2`) antes de asumir un fallo.
- **wrangler local:** el token OAuth de `~/.wrangler` puede estar caducado. No dependas de `wrangler deploy`; usa el push.
