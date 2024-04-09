import {
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
} from 'react'

import { cn } from '@local/ui/cn'

import {
  leftSection,
  rightSection,
  type LeftSectionVariants,
  type RightSectionVariants,
} from './divider.variants'

export type DividerProps = Omit<
  ComponentProps<'div'> & LeftSectionVariants & RightSectionVariants,
  'hasChildren'
>

export const DividerInner: ForwardRefRenderFunction<
  HTMLDivElement,
  DividerProps
> = ({ align, className, children, ...props }, ref) => (
  <div className={cn('flex flex-row items-center py-2')} ref={ref} {...props}>
    <div
      className={leftSection({
        align,
        hasChildren: Boolean(children),
        className,
      })}
    />
    {children}
    <div
      className={rightSection({
        align,
        hasChildren: Boolean(children),
        className,
      })}
    />
  </div>
)

export const Divider = forwardRef(DividerInner)
