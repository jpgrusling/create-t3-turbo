import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const ctaVariants = cva([], {
  variants: {
    kind: {
      primary: ['bg-primary', 'dark:bg-primary/30'],
      default: ['bg-white', 'dark:bg-black'],
      inverted: ['bg-black', 'dark:bg-white'],
    },
  },
  defaultVariants: {
    kind: 'default',
  },
})

export const ctaEyebrowVariants = cva(['uppercase', 'mb-2'], {
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
    textAlignment: 'center',
  },
})

export const ctaHeadingVariants = cva(['mb-4'], {
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
    textAlignment: 'center',
  },
})

export const ctaBodyVariants = cva([], {
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
    textAlignment: 'center',
  },
})

export type CTAVariantsProps = VariantProps<typeof ctaVariants>
export type CTAEyebrowVariantsProps = VariantProps<typeof ctaEyebrowVariants>
export type CTAHeadingVariantsProps = VariantProps<typeof ctaHeadingVariants>
export type CTABodyVariantsProps = VariantProps<typeof ctaBodyVariants>

export const cta = (props: CTAVariantsProps & ClassProp) =>
  cn(ctaVariants(props))

export const ctaEyebrow = (props: CTAEyebrowVariantsProps & ClassProp) =>
  cn(ctaEyebrowVariants(props))

export const ctaHeading = (props: CTAHeadingVariantsProps & ClassProp) =>
  cn(ctaHeadingVariants(props))

export const ctaBody = (props: CTABodyVariantsProps & ClassProp) =>
  cn(ctaBodyVariants(props))
