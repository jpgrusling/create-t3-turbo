import {
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
  type ReactNode,
} from 'react'
import { Flex } from '~components/Flex'

import { cn } from '~/utils/cn'

export type InputProps = ComponentProps<'input'> & {
  leadingContent?: ReactNode
  trailingContent?: ReactNode
}

const InputInner: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref,
) => {
  const { className, leadingContent, trailingContent, ...rest } = props

  const containerClassNames = cn(
    'w-fill focus-within:outline-primary relative rounded-lg border border-gray-300 shadow-sm focus-within:outline focus-within:outline-1',
    className,
  )

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
      <div className={inputContainerClassNames}>
        <input {...rest} className={cn(classNames)} ref={ref} />
      </div>
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
