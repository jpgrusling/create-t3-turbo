import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '@local/ui/cn'

export const textVariants = cva(
  [
    'text-textParagraph',
    'font-normal',
    'text-[16px] leading-[22.4px]',
    'tracking-[-0.048px]',
  ],
  {
    variants: {
      display: {
        bodyExtraLarge: ['text-[22px] leading-[30.8px]', 'tracking-normal'],
        bodyLarge: ['text-[18px] leading-[25.2px]', 'tracking-[-0.054px'],
        bodySmall: ['text-[14px] leading-[19.6px]', 'tracking-[-0.042px]'],
        bodyExtraSmall: ['text-[12px] leading-[16.8px]', 'tracking-[-0.036px]'],
        eyebrow: [
          'text-[14px] leading-[16.8px]',
          'font-semibold',
          'tracking-[0.1px]',
        ],
        formLabel: ['text-[11px] leading-[11px]', 'tracking-normal'],
      },
    },
  },
)

export type TextVariantsProps = VariantProps<typeof textVariants>

export const text = (props: TextVariantsProps & ClassProp) =>
  cn(textVariants(props))
