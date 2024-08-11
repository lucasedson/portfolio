import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  exportTrailingSlash: true,

  // site: 'http://127.0.0.1:5500',

  base: '/portfolio/dist/',

});