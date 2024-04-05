import { type FC, type PropsWithChildren } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type ClassProp } from 'class-variance-authority/types'

import { typography, type TypographyVariantsProps } from './typography.variants'

export type TypographyProps = PropsWithChildren<
  TypographyVariantsProps & ClassProp
>

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => <Slot className={typography({ variant, className })}>{children}</Slot>
