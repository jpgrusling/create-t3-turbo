import {
  type ComponentProps,
  forwardRef,
  type ForwardRefRenderFunction,
} from 'react'

import { cn } from '~/utils/cn'

export type TextareaProps = ComponentProps<'textarea'>

export const TextareaInner: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (props, ref) => {
  const { className, ...rest } = props

  const classNames = cn(
    'dark:bg-transparent dark:text-white dark:placeholder:text-gray-400',
    'block w-full rounded-md border-0 border-gray-300 p-1.5 text-gray-900 shadow-sm ring-1',
    'ring-inset ring-gray-300 placeholder:text-gray-400',
    'focus:ring-2 focus:ring-inset focus:ring-indigo-600',
    'sm:text-sm sm:leading-6',
  )

  return (
    <textarea className={cn(classNames, className)} {...rest} ref={ref} />
  )
}

export const Textarea = forwardRef(TextareaInner)
