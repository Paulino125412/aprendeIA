import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const site = PUBLIC_SITE_URL || undefined;

function rehypeTablasConScroll() {
  const envolver = (nodo) => {
    if (!nodo.children) return;
    nodo.children = nodo.children.map((hijo) => {
      if (hijo.type === 'element' && hijo.tagName === 'table') {
        return { type: 'element', tagName: 'div', properties: { className: ['tabla-scroll'], tabIndex: 0, role: 'region', ariaLabel: 'Tabla desplazable horizontalmente' }, children: [hijo] };
      }
      envolver(hijo);
      return hijo;
    });
  };
  return (arbol) => envolver(arbol);
}

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
  markdown: { rehypePlugins: [rehypeTablasConScroll] },
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
