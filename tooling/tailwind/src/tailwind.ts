import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

import { colors } from './colors'

const config = {
  colors,
}

export default {
  content: ['src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: config,
  },
  plugins: [animate],
} as const satisfies Config
