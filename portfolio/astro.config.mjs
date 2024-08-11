import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [ tailwind(), react(),],

  site: 'https://lucasedson.github.io',

  base: '/portfolio/',
  outDir: 'public',
  publicDir: 'static',
});