import { forwardRef, type ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { button, type ButtonVariantsProps } from '~components/Button/variants'
import { type ClassProp } from 'class-variance-authority/types'

import { cn } from '~/utils/cn'

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariantsProps & { asChild?: boolean } & ClassProp

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
