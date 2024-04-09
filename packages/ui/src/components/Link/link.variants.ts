import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '@local/ui/cn'

export const linkVariants = cva(
  [
    'text-[16px] leading-[20.8px]',
    'text-textLink hover:text-textLinkHover',
    'tracking-[-0.048px]',
    'cursor-pointer',
  ],
  {
    variants: {
      kind: {
        secondary: ['hover:text-textLinkSecondaryHover text-textLinkSecondary'],
        tertiary: ['hover:text-textLinkTertiaryHover text-textLinkTertiary'],
      },
      size: {
        large: ['text-[18px] leading-[25.2px]', 'tracking-normal'],
        small: ['text-[14px] leading-[19.6px]', 'tracking-[-0.042px]'],
        extraSmall: ['text-[12px] leading-[16.8px]', 'tracking-[-0.036px]'],
      },
    },
  },
)

export type LinkVariantsProps = VariantProps<typeof linkVariants>

export const link = (props: LinkVariantsProps & ClassProp) =>
  cn(linkVariants(props))
