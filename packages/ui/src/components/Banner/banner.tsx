import { type FC, type ReactNode } from 'react'
import { Flex, type FlexProps } from '~components/Flex'

import { banner, type BannerVariantsProps } from './banner.variants'

export type BannerProps = FlexProps &
  BannerVariantsProps & {
    extended?: ReactNode
  }

export const Banner: FC<BannerProps> = props => {
  const { children, extended, kind, className } = props

  return (
    <Flex items="center" className={banner({ kind, className })}>
      <p className="text-sm leading-6">{children}</p>
      <div className="flex flex-1 justify-end">{extended}</div>
    </Flex>
  )
}
