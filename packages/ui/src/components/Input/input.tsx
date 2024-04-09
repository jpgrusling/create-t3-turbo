import {
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
  type ReactNode,
} from 'react'

import { cn } from '@local/ui/cn'
import { Flex } from '@local/ui/Flex'
import { FormControl } from '@local/ui/FormControl'

export type InputProps = ComponentProps<'input'> & {
  leadingContent?: ReactNode
  trailingContent?: ReactNode
}

const InputInner: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref,
) => {
  const { className, leadingContent, trailingContent, ...rest } = props

  const containerClassNames = cn('w-fill relative', className)

  const inputContainerClassNames = cn(
    leadingContent ? 'pl-10' : 'pl-4',
    trailingContent ? 'pr-10' : 'pr-4',
  )

  const classNames = cn(
    'w-full appearance-none bg-transparent py-3 text-black focus-visible:outline-none dark:text-white',
  )

  return (
    <div className={cn(containerClassNames)}>
      {leadingContent && (
        <Flex
          className="pointer-events-none absolute inset-y-0 left-0 py-2 pl-1"
          items="center"
        >
          {leadingContent}
        </Flex>
      )}
      <FormControl className={inputContainerClassNames}>
        <input {...rest} className={cn(classNames)} ref={ref} />
      </FormControl>
      {trailingContent && (
        <Flex
          className="pointer-events-none absolute inset-y-0 right-0 py-2 pr-1"
          items="center"
        >
          {trailingContent}
        </Flex>
      )}
    </div>
  )
}

export const Input = forwardRef(InputInner)
