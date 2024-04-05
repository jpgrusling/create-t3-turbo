/* eslint-disable @typescript-eslint/naming-convention */
import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const textVariants = cva(
  ['text-typography', 'dark:text-typography-dark'],
  {
    variants: {
      mode: {
        bodyExtraLarge: ['text-xl'],
        bodyLarge: ['text-lg'],
        body: ['text-base'],
        bodySmall: ['text-sm'],
        bodyExtraSmall: ['text-xs'],
      },
      weight: {
        100: ['font-thin'],
        200: ['font-extralight'],
        300: ['font-light'],
        400: ['font-normal'],
        500: ['font-medium'],
        600: ['font-semibold'],
        700: ['font-bold'],
        800: ['font-extrabold'],
        900: ['font-black'],
      },
      italic: {
        true: ['italic'],
        false: ['not-italic'],
      },
      strikethrough: {
        true: ['line-through'],
        false: undefined,
      },
      underline: {
        true: ['underline'],
        false: undefined,
      },
    },
    defaultVariants: {
      mode: 'body',
      weight: 400,
      italic: false,
      strikethrough: false,
      underline: false,
    },
  },
)

export type TextVariantsProps = VariantProps<typeof textVariants>

export const text = (props: TextVariantsProps & ClassProp) =>
  cn(textVariants(props))
