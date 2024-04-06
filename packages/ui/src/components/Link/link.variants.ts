import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const linkVariants = cva(
  ['text-[16px] leading-[20.8px]', 'text-linkText', 'tracking-[-0.048px]'],
  {
    variants: {
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
