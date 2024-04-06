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

import { heading, type HeadingVariantsProps } from './heading.variants'

export const HeadingDefaultElement: ElementType = 'h1'
export type HeadingAllowedElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingOwnProps<T extends HeadingAllowedElements> =
  ComponentPropsWithoutRef<T> & HeadingVariantsProps

export type HeadingProps<
  T extends HeadingAllowedElements = typeof HeadingDefaultElement,
> = PolymorphicProps<HeadingOwnProps<T>, T, HeadingAllowedElements>

const getTag = (
  display: HeadingVariantsProps['display'],
  as?: HeadingAllowedElements,
): HeadingAllowedElements => {
  if (as) {
    return as
  }

  switch (display) {
    case 'h1':
      return 'h1'
    case 'h2':
      return 'h2'
    case 'h3':
      return 'h3'
    case 'h4':
      return 'h4'
    case 'h5':
      return 'h5'
    case 'h6':
      return 'h6'
    default:
      return 'h1'
  }
}

const HeadingInner = <T extends HeadingAllowedElements>(
  { as, className, children, display, ...rest }: HeadingProps<T>,
  ref: PolymorphicForwardedRef<T>,
) =>
  createElement(
    getTag(display, as),
    {
      ...rest,
      ref,
      className: heading({ display: display ?? as, className }),
    },
    children,
  )

export const Heading = forwardRef(HeadingInner)
