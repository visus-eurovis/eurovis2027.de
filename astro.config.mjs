// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site:           'https://eurovis27.github.io', 
  base:           '/web', // import.meta.env.BASE_URL
  trailingSlash:  'never',
  integrations: [mdx()],
});
