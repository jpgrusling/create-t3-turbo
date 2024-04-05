import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const typographyVariants = cva(['text-black'], {
  variants: {
    variant: {
      h1: ['text-6xl'],
      h2: ['text-5xl'],
      h3: ['text-4xl'],
      h4: ['text-3xl'],
      h5: ['text-2xl'],
      h6: ['text-xl'],
      baseHeadline: [],
      smallHeadline: [],
      tableHeadline: [],
      eyebrow: [],
      formLabel: [],
      bodyExtraLarge: [],
      bodyLarge: [],
      body: [],
      bodySmall: [],
      bodyExtraSmall: [],
      buttonSmall: [],
      button: [],
      buttonLarge: [],
      iconLabel: [],
    },
  },
})

export type TypographyVariantsProps = VariantProps<typeof typographyVariants>

export const typography = (props: TypographyVariantsProps & ClassProp) =>
  cn(typographyVariants(props))
