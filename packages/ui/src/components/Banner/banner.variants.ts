import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const bannerVariants = cva(
  ['gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'],
  {
    variants: {
      kind: {
        primary: ['bg-brandPrimary text-textParagraphInverse'],
        secondary: ['bg-brandSecondaryLt text-textParagraph'],
        gray: [['bg-gray-50 text-gray-600 ']],
        red: [['bg-red-50 text-red-700 ']],
        yellow: [['bg-yellow-50 text-yellow-800 ']],
        green: [['bg-green-50 text-green-700 ']],
        blue: [['bg-blue-50 text-blue-700 ']],
        indigo: [['bg-indigo-50 text-indigo-700 ']],
        purple: [['bg-purple-50 text-purple-700 ']],
        pink: [['bg-pink-50 text-pink-700']],
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
