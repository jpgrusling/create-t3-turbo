import { forwardRef, type ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '~/utils/cn'
import { button, type ButtonVariantsProps } from './button.variants'

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariantsProps & { asChild?: boolean }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, kind, size, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(button({ kind, size, className }))}
        ref={ref}
        {...rest}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
