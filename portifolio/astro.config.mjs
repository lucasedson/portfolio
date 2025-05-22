// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucasedson.github.io/portfolio', // Substitua 'portfolio' se o nome do repo for outro
  base: '/portfolio/',    
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});