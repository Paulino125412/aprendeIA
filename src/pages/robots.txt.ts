import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  let contenido = 'User-agent: *\nAllow: /\n';
  if (site) {
    const sitemapUrl = new URL('sitemap-index.xml', site).href;
    contenido += `Sitemap: ${sitemapUrl}\n`;
  }

  return new Response(contenido, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
