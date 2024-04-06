import {
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
} from 'react'
import { FormControl } from '~components/FormControl'

export type TextareaProps = ComponentProps<'textarea'>

export const TextareaInner: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (props, ref) => {
  const { className, ...rest } = props

  return (
    <FormControl className={className}>
      <textarea {...rest} ref={ref} />
    </FormControl>
  )
}

export const Textarea = forwardRef(TextareaInner)
