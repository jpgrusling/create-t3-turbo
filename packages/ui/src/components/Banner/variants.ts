import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const bannerVariants = cva(
  ['gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'],
  {
    variants: {
      kind: {
        primary: ['bg-primary text-white '],
        gray: [
          ['bg-gray-50 text-gray-600 '],
          ['dark:bg-gray-400/10 dark:text-gray-400'],
        ],
        red: [
          ['bg-red-50 text-red-700 '],
          ['dark:bg-red-400/10 dark:text-red-400'],
        ],
        yellow: [
          ['bg-yellow-50 text-yellow-800 '],
          ['dark:bg-yellow-400/10 dark:text-yellow-500 '],
        ],
        green: [
          ['bg-green-50 text-green-700 '],
          ['dark:bg-green-500/10 dark:text-green-400'],
        ],
        blue: [
          ['bg-blue-50 text-blue-700 '],
          ['dark:bg-blue-400/10 dark:text-blue-400 '],
        ],
        indigo: [
          ['bg-indigo-50 text-indigo-700 '],
          ['dark:bg-indigo-400/10 dark:text-indigo-400'],
        ],
        purple: [
          ['bg-purple-50 text-purple-700 '],
          [' dark:bg-purple-400/10 dark:text-purple-400'],
        ],
        pink: [
          ['bg-pink-50 text-pink-700'],
          ['dark:bg-pink-400/10 dark:text-pink-400'],
        ],
      },
    },
    defaultVariants: {
      kind: 'primary',
    },
  },
)

export type BannerVariantsProps = VariantProps<typeof bannerVariants>

export const banner = (props: BannerVariantsProps & ClassProp) =>
  cn(bannerVariants(props))
