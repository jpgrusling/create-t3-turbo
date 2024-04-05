import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const buttonVariants = cva(
  [
    'font-semibold',
    'inline-flex',
    'rounded-lg',
    'disabled:opacity-50',
    'py-5 ',
    'px-6',
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
        small: ['text-[12px]', 'py-2', 'px-3'],
        default: ['text-[14px]', 'py-3', 'px-4'],
        large: ['text-[16px]', 'py-4', 'px-5'],
      },
    },
    defaultVariants: {
      kind: 'primary',
      size: 'default',
    },
  },
)

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>

export const button = (props: ButtonVariantsProps & ClassProp) =>
  cn(buttonVariants(props))
