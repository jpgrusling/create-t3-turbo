import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export const leftSectionVariants = cva(['grow', 'me-2', 'h-px', 'bg-divider'], {
  variants: {
    align: {
      left: ['grow-0', 'me-0'],
      right: [],
    },
    hasChildren: {
      true: undefined,
      false: undefined,
    },
  },
  compoundVariants: [{ align: null, hasChildren: false, className: ['me-0'] }],
})

export const rightSectionVariants = cva(
  ['grow', 'ms-2', 'h-px', 'bg-divider'],
  {
    variants: {
      align: {
        left: [],
        right: ['grow-0', 'ms-0'],
      },
      hasChildren: {
        true: undefined,
        false: undefined,
      },
    },
    compoundVariants: [
      { align: null, hasChildren: false, className: ['ms-0'] },
    ],
  },
)

export type LeftSectionVariants = VariantProps<typeof leftSectionVariants>

export type RightSectionVariants = VariantProps<typeof rightSectionVariants>

export const leftSection = (props: LeftSectionVariants & ClassProp) =>
  cn(leftSectionVariants(props))

export const rightSection = (props: RightSectionVariants & ClassProp) =>
  cn(rightSectionVariants(props))
