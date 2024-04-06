import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const headingVariants = cva(['text-textHeadline', 'font-normal'], {
  variants: {
    display: {
      h1: ['text-[64px] leading-[76.8px]'],
      h2: ['text-[56px] leading-[67.2px]'],
      h3: ['text-[38px] leading-[45.6px]'],
      h4: ['text-[28px] leading-[33.6px]'],
      h5: ['text-[20px] leading-[24px]'],
      h6: ['text-[18px] leading-[21.6px]'],
      base: ['text-[16px] leading-[22.4px]'],
      small: ['text-[14px] leading-[16.8px]'],
      table: ['text-[14px] leading-[16.8px]'],
    },
  },
  defaultVariants: {
    display: 'h1',
  },
})

export type HeadingVariantsProps = VariantProps<typeof headingVariants>

export const heading = (props: HeadingVariantsProps & ClassProp) =>
  cn(headingVariants(props))
