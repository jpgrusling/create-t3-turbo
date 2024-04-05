/*
 * This file is not used for any compilation purpose, it is only used
 * for Tailwind Intellisense & Autocompletion in the source files
 */
import { type Config } from 'tailwindcss'

import baseConfig from '@local/tailwind-config'

export default {
  content: ['./src/**/*.ts|tsx'],
  presets: [baseConfig],
} satisfies Config
