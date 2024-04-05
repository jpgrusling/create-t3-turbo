import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const cardVariants = cva(['h-content w-80', 'p-6'], {
  variants: {
    kind: {
      primary: ['bg-primary', 'dark:bg-primary/30'],
      default: ['bg-white', 'dark:bg-black'],
      inverted: ['bg-black', 'dark:bg-white'],
    },
    borderWidth: {
      zero: ['border-0'],
      two: ['border-2'],
      four: ['border-4'],
      eight: ['border-8'],
    },
    borderColor: {
      primary: ['border-black/30', 'dark:border-primary'],
      default: ['border-gray-600', 'dark:border-gray-400'],
      inverted: ['border-yellow-500', 'dark:border-green-500'],
    },
    rounded: {
      true: ['rounded-lg'],
      false: ['rounded-none'],
    },
  },
  defaultVariants: {
    kind: 'default',
    borderWidth: 'two',
    borderColor: 'default',
    rounded: true,
  },
})

export const cardHeadingVariants = cva([], {
  variants: {
    kind: {
      primary: [],
      default: [],
      inverted: ['text-white', 'dark:text-black'],
    },
    textAlignment: {
      left: ['text-left'],
      right: ['text-right'],
      center: ['text-center'],
    },
  },
  defaultVariants: {
    kind: 'default',
    textAlignment: 'left',
  },
})

export const cardBodyVariants = cva([], {
  variants: {
    kind: {
      primary: [],
      default: [],
      inverted: ['text-white', 'dark:text-black'],
    },
    textAlignment: {
      left: ['text-left'],
      right: ['text-right'],
      center: ['text-center'],
    },
  },
  defaultVariants: {
    kind: 'default',
    textAlignment: 'left',
  },
})

export type CardVariantsProps = VariantProps<typeof cardVariants>
export type CardHeadingVariantsProps = VariantProps<typeof cardHeadingVariants>
export type CardBodyVariantsProps = VariantProps<typeof cardBodyVariants>

export const card = (props: CardVariantsProps & ClassProp) =>
  cn(cardVariants(props))

export const cardHeading = (props: CardHeadingVariantsProps & ClassProp) =>
  cn(cardHeadingVariants(props))

export const cardBody = (props: CardBodyVariantsProps & ClassProp) =>
  cn(cardBodyVariants(props))
