import {
  type ComponentProps,
  forwardRef,
  type ForwardRefRenderFunction,
  type ReactNode,
} from 'react'

import {
  card,
  cardBody,
  type CardBodyVariantsProps,
  cardHeading,
  type CardHeadingVariantsProps,
  type CardVariantsProps,
} from '~components/Card/variants'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'

export type CardProps = ComponentProps<'div'> &
  CardVariantsProps &
  CardHeadingVariantsProps &
  CardBodyVariantsProps & {
    heading?: ReactNode
    headingClassName?: string
    body?: ReactNode
    bodyClassName?: string
  }

export const CardInner: ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  props,
  ref,
) => {
  const {
    borderWidth,
    borderColor,
    heading,
    rounded,
    headingClassName,
    body,
    bodyClassName,
    children,
    kind,
    textAlignment,
    className,
    ...rest
  } = props

  return (
    <div
      className={card({
        kind,
        borderWidth,
        borderColor,
        rounded,
        className,
      })}
      {...rest}
      ref={ref}
    >
      {heading && (
        <Heading
          as="h3"
          className={cardHeading({
            kind,
            textAlignment,
            className: headingClassName,
          })}
        >
          {heading}
        </Heading>
      )}
      {body && (
        <Text
          as="p"
          mode="body"
          className={cardBody({
            kind,
            textAlignment,
            className: bodyClassName,
          })}
        >
          {body}
        </Text>
      )}
      {children}
    </div>
  )
}

export const Card = forwardRef(CardInner)
