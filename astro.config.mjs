import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  site: 'https://francesccastell.dev',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': src,
        '@components': `${src}/components`,
        '@data': `${src}/data`,
        '@layouts': `${src}/layouts`,
        '@styles': `${src}/styles`,
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
