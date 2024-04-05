import { forwardRef } from 'react'

import { type PolymorphicForwardedRef } from '@axa-ch/react-polymorphic-types'

import { Flex, type FlexAllowedElements, type FlexProps } from './Flex'

export type ColumnProps<T extends FlexAllowedElements> = Omit<
  FlexProps<T>,
  'direction'
>

const ColumnInner = <T extends FlexAllowedElements>(
  props: ColumnProps<T>,
  ref: PolymorphicForwardedRef<T>,
) => {
  return <Flex {...props} ref={ref} direction="column" />
}

export const Column = forwardRef(ColumnInner)
