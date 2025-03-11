// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://garyblackwood.co.uk',
  integrations: [sitemap(), icon()],
  prefetch: { prefetchAll: true },
  redirects: { '/projects': '/blog' },
  vite: { plugins: [tailwindcss()] },
});
