/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-color-light': 'var(--bg-color-light)',
        'primary-text-color-light': 'var(--primary-text-color-light)',
        'secondary-text-color-light': 'var(--secondary-text-color-light)',
        'card-bg-color-light': 'var(--card-bg-color-light)',
        'border-color-light': 'var(--border-color-light)',
        'bg-color-dark': 'var(--bg-color-dark)',
        'primary-text-color-dark': 'var(--primary-text-color-dark)',
        'secondary-text-color-dark': 'var(--secondary-text-color-dark)',
        'card-bg-color-dark': 'var(--card-bg-color-dark)',
        'border-color-dark': 'var(--border-color-dark)',
      },
    },
  },
  plugins: [],
}