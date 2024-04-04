import animate from 'tailwindcss-animate'

import { colors } from './colors'

const config = {
  colors,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: config,
  },
  plugins: [animate],
}
