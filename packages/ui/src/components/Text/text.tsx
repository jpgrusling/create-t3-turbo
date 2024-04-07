import {
  createElement,
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from 'react'
import {
  type PolymorphicForwardedRef,
  type PolymorphicProps,
} from '@axa-ch/react-polymorphic-types'

import { text, type TextVariantsProps } from './text.variants'

export const TextDefaultElement: ElementType = 'p'
export type TextAllowedElements =
  | 'div'
  | 'p'
  | 'span'
  | 'pre'
  | 'code'
  | 'label'

export type TextOwnProps<T extends TextAllowedElements> =
  ComponentPropsWithoutRef<T> & TextVariantsProps

export type TextProps<
  T extends TextAllowedElements = typeof TextDefaultElement,
> = PolymorphicProps<TextOwnProps<T>, T, TextAllowedElements>

const TextInner = <T extends TextAllowedElements>(
  { as, children, className, display, ...rest }: TextProps<T>,
  ref: PolymorphicForwardedRef<T>,
) => {
  const element: TextAllowedElements = as ?? TextDefaultElement

  return createElement(
    element,
    {
      ...rest,
      ref,
      className: text({
        display,
        className,
      }),
    },
    children,
  )
}

export const Text = forwardRef(TextInner)
