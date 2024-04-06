import {
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
} from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '~/utils/cn'
import { link, type LinkVariantsProps } from './link.variants'

export type LinkProps = ComponentProps<'a'> &
  LinkVariantsProps & {
    asChild?: boolean
  }

export const LinkInner: ForwardRefRenderFunction<
  HTMLAnchorElement,
  LinkProps
> = ({ asChild, className, children, kind, size, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp className={cn(link({ kind, size, className }))} ref={ref} {...props}>
      {children}
    </Comp>
  )
}

export const Link = forwardRef(LinkInner)
