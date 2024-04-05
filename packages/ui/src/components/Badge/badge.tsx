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

import { badge, type BadgeVariantsProps } from './badge.variants'

export const BadgeDefaultElement: ElementType = 'span'
export type BadgeAllowedElements = 'div' | 'span'

export type BadgeOwnProps<T extends BadgeAllowedElements> =
  ComponentPropsWithoutRef<T> & BadgeVariantsProps

export type BadgeProps<
  T extends BadgeAllowedElements = typeof BadgeDefaultElement,
> = PolymorphicProps<BadgeOwnProps<T>, T, BadgeAllowedElements>

const BadgeInner = <T extends BadgeAllowedElements>(
  { as, children, className, kind, ...rest }: BadgeProps<T>,
  ref: PolymorphicForwardedRef<T>,
) => {
  const element: BadgeAllowedElements = as ?? BadgeDefaultElement

  return createElement(
    element,
    {
      ...rest,
      ref,
      className: badge({ kind, className }),
    },
    children,
  )
}

export const Badge = forwardRef(BadgeInner)
