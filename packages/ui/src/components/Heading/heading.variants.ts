import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const headingVariants = cva(
  ['font-bold', 'text-black', 'dark:text-white'],
  {
    variants: {
      as: {
        h1: ['text-6xl'],
        h2: ['text-5xl'],
        h3: ['text-4xl'],
        h4: ['text-3xl'],
        h5: ['text-2xl'],
        h6: ['text-xl'],
      },
      align: {
        center: ['text-center'],
        left: ['text-left'],
        right: ['text-right'],
      },
    },
    defaultVariants: {
      as: 'h1',
      align: 'left',
    },
  },
)

export type HeadingVariantsProps = VariantProps<typeof headingVariants>

export const heading = (props: HeadingVariantsProps & ClassProp) =>
  cn(headingVariants(props))
