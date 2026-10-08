import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const site = PUBLIC_SITE_URL || undefined;

const integrations = [mdx()];
if (site) {
  integrations.push(
    sitemap({
      filter: (page) => !page.includes('/buscar') && !page.includes('/404'),
    })
  );
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site,
  integrations,
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
