import type { APIRoute } from 'astro';

const SITE_URL = 'https://francesccastell.dev';

const routes = [
  { path: '/', lastmod: '2026-07-19', changefreq: 'monthly', priority: 1.0 },
  { path: '/about', lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.9 },
  { path: '/experience', lastmod: '2026-07-19', changefreq: 'yearly', priority: 0.7 },
  { path: '/projects', lastmod: '2026-07-19', changefreq: 'monthly', priority: 0.9 },
  { path: '/stack', lastmod: '2026-07-19', changefreq: 'yearly', priority: 0.7 },
  { path: '/contact', lastmod: '2026-07-19', changefreq: 'yearly', priority: 0.8 },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '' : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
