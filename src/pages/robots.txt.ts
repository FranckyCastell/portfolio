import type { APIRoute } from 'astro';

const SITE_URL = 'https://francesccastell.dev';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
