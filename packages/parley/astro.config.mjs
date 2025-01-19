// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [auth()],

  adapter: node({
    mode: 'standalone'
  }),
  output: 'server'
});