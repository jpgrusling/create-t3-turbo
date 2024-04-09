import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '@local/ui/cn'

export const flexVariants = cva(['flex'], {
  variants: {
    direction: {
      column: undefined,
      row: undefined,
    },
    reverse: {
      true: undefined,
      false: undefined,
    },
    items: {
      start: ['items-start'],
      center: ['items-center'],
      end: ['items-end'],
      stretch: ['items-stretch'],
      baseline: ['items-baseline'],
    },
    justify: {
      center: ['justify-center'],
      start: ['justify-start'],
      end: ['justify-end'],
      normal: ['justify-normal'],
      between: ['justify-between'],
      around: ['justify-around'],
      evenly: ['justify-evenly'],
      stretch: ['justify-evenly'],
    },
    content: {
      normal: ['content-normal'],
      center: ['content-center'],
      start: ['content-start'],
      end: ['content-end'],
      between: ['content-between'],
      around: ['content-around'],
      evenly: ['content-evenly'],
      baseline: ['content-baseline'],
      stretch: ['content-stretch'],
      none: ['content-none'],
    },
    self: {
      auto: ['self-auto'],
      start: ['self-start'],
      end: ['self-end'],
      center: ['self-center'],
      stretch: ['self-stretch'],
      baseline: ['self-baseline'],
    },
    wrap: {
      wrap: ['flex-wrap'],
      reverse: ['flex-wrap-reverse'],
      nowrap: ['flex-nowrap'],
    },
    grow: {
      true: ['flex-grow'],
      false: ['flex-grow-0'],
    },
    shrink: {
      true: ['flex-shrink'],
      false: ['flex-shrink-0'],
    },
  },
  defaultVariants: {
    direction: 'column',
    reverse: false,
    items: undefined,
    justify: undefined,
    content: undefined,
    self: undefined,
    wrap: undefined,
    grow: undefined,
    shrink: undefined,
  },
  compoundVariants: [
    {
      direction: 'column',
      reverse: false,
      className: ['flex-col'],
    },
    {
      direction: 'column',
      reverse: true,
      className: ['flex-col-reverse'],
    },
    {
      direction: 'row',
      reverse: false,
      className: ['flex-row'],
    },
    {
      direction: 'row',
      reverse: true,
      className: ['flex-row-reverse'],
    },
  ],
})

export type FlexVariantsProps = VariantProps<typeof flexVariants>

export const flex = (props: FlexVariantsProps & ClassProp) =>
  cn(flexVariants(props))
