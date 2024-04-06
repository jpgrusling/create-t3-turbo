import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

const headlines = ['text-textHeadline', 'font-normal']

export const headingVariants = cva(
  ['font-bold', 'text-black', 'dark:text-white'],
  {
    variants: {
      display: {
        h1: [...headlines, 'text-[64px] leading-[76.8px]'],
        h2: [...headlines, 'text-[56px] leading-[67.2px]'],
        h3: [...headlines, 'text-[38px] leading-[45.6px]'],
        h4: [...headlines, 'text-[28px] leading-[33.6px]'],
        h5: [...headlines, 'text-[20px] leading-[24px]'],
        h6: [...headlines, 'text-[18px] leading-[21.6px]'],
        base: [...headlines, 'text-[16px] leading-[22.4px]'],
        small: [...headlines, 'text-[14px] leading-[16.8px]'],
        table: [...headlines, 'text-[14px] leading-[16.8px]'],
      },
    },
    defaultVariants: {
      display: 'h1',
    },
  },
)

export type HeadingVariantsProps = VariantProps<typeof headingVariants>

export const heading = (props: HeadingVariantsProps & ClassProp) =>
  cn(headingVariants(props))
