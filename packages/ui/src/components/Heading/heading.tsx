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

import { heading, type HeadingVariantsProps } from './variants'

export const HeadingDefaultElement: ElementType = 'h1'
export type HeadingAllowedElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingOwnProps<T extends HeadingAllowedElements> =
  ComponentPropsWithoutRef<T> & HeadingVariantsProps

export type HeadingProps<
  T extends HeadingAllowedElements = typeof HeadingDefaultElement,
> = PolymorphicProps<HeadingOwnProps<T>, T, HeadingAllowedElements>

const HeadingInner = <T extends HeadingAllowedElements>(
  { as, align, className, children, ...rest }: HeadingProps<T>,
  ref: PolymorphicForwardedRef<T>,
) => {
  const element: HeadingAllowedElements = as || HeadingDefaultElement

  return createElement(
    element,
    {
      ...rest,
      ref,
      className: heading({ as, align, className }),
    },
    children,
  )
}

export const Heading = forwardRef(HeadingInner)
