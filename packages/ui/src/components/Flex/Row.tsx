import { forwardRef } from 'react'

import { type PolymorphicForwardedRef } from '@axa-ch/react-polymorphic-types'

import { Flex, type FlexAllowedElements, type FlexProps } from './Flex'

export type RowProps<T extends FlexAllowedElements> = Omit<
  FlexProps<T>,
  'direction'
>

const RowInner = <T extends FlexAllowedElements>(
  props: RowProps<T>,
  ref: PolymorphicForwardedRef<T>,
) => {
  return <Flex {...props} ref={ref} direction="row" />
}

export const Row = forwardRef(RowInner)
