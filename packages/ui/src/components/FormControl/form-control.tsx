import { type ComponentProps, type FC, type PropsWithChildren } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '~/utils/cn'

export type FormControlProps = PropsWithChildren<ComponentProps<typeof Slot>>

export const FormControl: FC<FormControlProps> = ({
  children,
  className,
  ...rest
}) => {
  const classes = cn(
    'sm:text-sm sm:leading-6',
    'block rounded border-0 py-1.5 outline-none',
    'text-gray-900 placeholder:text-gray-400',
    'ring-1 ring-inset ring-formBorder',
    'focus:ring-2 focus:ring-inset focus:ring-formBorderActive',
    className,
  )

  return (
    <Slot className={classes} {...rest}>
      {children}
    </Slot>
  )
}
