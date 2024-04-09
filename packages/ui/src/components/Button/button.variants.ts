import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '@local/ui/cn'

export const buttonVariants = cva(
  [
    'text-[16px] leading-[19.2px]',
    'inline-flex',
    'disabled:opacity-50',
    'py-2.5 ',
    'px-5',
    'justify-center',
  ],
  {
    variants: {
      kind: {
        primary: [
          'uppercase',
          [
            'bg-buttonPrimary',
            'text-buttonPrimaryText',
            'enabled:hover:bg-buttonPrimaryHover',
            'enabled:focus:bg-buttonPrimaryHover/80',
          ],
        ],
        secondary: [
          'uppercase',
          [
            'bg-buttonSecondary',
            'text-buttonSecondaryText',
            'enabled:hover:bg-buttonSecondaryHover',
            'enabled:focus:bg-buttonSecondaryHover/80',
          ],
        ],
        tertiary: [
          'uppercase',
          [
            'bg-buttonTertiary',
            'text-buttonTertiaryText',
            'enabled:hover:bg-buttonTertiaryHover',
            'enabled:focus:bg-buttonTertiaryHover/80',
          ],
        ],
      },
      size: {
        extraSmall: ['py-1.5', 'px-3'],
        small: ['text-[14px] leading-[16.8px]', 'py-2', 'px-4'],
        large: ['text-[18px] leading-[21.6px]', 'py-3', 'px-6'],
        extraLarge: ['py-3.5', 'px-8'],
      },
      shape: {
        rectangle: ['rounded-none'],
        roundedRectangle: ['rounded-md'],
        circle: ['rounded-full'],
      },
    },
    defaultVariants: {
      kind: 'primary',
      shape: 'roundedRectangle',
    },
  },
)

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>

export const button = (props: ButtonVariantsProps & ClassProp) =>
  cn(buttonVariants(props))
