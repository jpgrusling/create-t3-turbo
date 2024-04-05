import {
  type ComponentPropsWithoutRef,
  createElement,
  type ElementType,
  forwardRef,
} from 'react'

import {
  type PolymorphicForwardedRef,
  type PolymorphicProps,
} from '@axa-ch/react-polymorphic-types'

import { flex, type FlexVariantsProps } from './variants'

export const FlexDefaultElement: ElementType = 'div'
export type FlexAllowedElements =
  | 'div'
  | 'main'
  | 'aside'
  | 'header'
  | 'article'

export type FlexOwnProps<T extends FlexAllowedElements> =
  ComponentPropsWithoutRef<T> & FlexVariantsProps

export type FlexProps<
  T extends FlexAllowedElements = typeof FlexDefaultElement,
> = PolymorphicProps<FlexOwnProps<T>, T, FlexAllowedElements>

const FlexInner = <T extends FlexAllowedElements>(
  {
    as,
    direction,
    reverse,
    items,
    justify,
    content,
    self,
    wrap,
    grow,
    shrink,
    className,
    ...rest
  }: FlexProps<T>,
  ref: PolymorphicForwardedRef<T>,
) => {
  const element: FlexAllowedElements = as || FlexDefaultElement

  return createElement(element, {
    ...rest,
    ref,
    className: flex({
      direction,
      reverse,
      items,
      justify,
      content,
      self,
      wrap,
      grow,
      shrink,
      className,
    }),
  })
}

export const Flex = forwardRef(FlexInner)
