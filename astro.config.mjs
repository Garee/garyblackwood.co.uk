// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://garyblackwood.co.uk',
  integrations: [sitemap(), tailwind(), icon()],
  prefetch: {
    prefetchAll: true,
  },
  redirects: {
    '/projects': '/blog',
  },
});
