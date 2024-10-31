// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://garyblackwood.co.uk',
  integrations: [sitemap(), tailwind()],
  prefetch: {
    prefetchAll: true,
  },
  redirects: {
    '/projects': '/blog',
  },
});
