import {
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
  type ReactNode,
} from 'react'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'

import {
  cta,
  ctaBody,
  ctaEyebrow,
  ctaHeading,
  type CTABodyVariantsProps,
  type CTAEyebrowVariantsProps,
  type CTAHeadingVariantsProps,
  type CTAVariantsProps,
} from './cta.variants'

export type CTABlockProps = ComponentProps<'div'> &
  CTAVariantsProps &
  CTABodyVariantsProps &
  CTAEyebrowVariantsProps &
  CTAHeadingVariantsProps & {
    eyebrow?: ReactNode
    eyebrowClassName?: string
    heading?: ReactNode
    headingClassName?: string
    body?: ReactNode
    bodyClassName?: string
  }

const CTABlockInner: ForwardRefRenderFunction<HTMLDivElement, CTABlockProps> = (
  props,
  ref,
) => {
  const {
    eyebrow,
    eyebrowClassName,
    heading,
    headingClassName,
    body,
    bodyClassName,
    kind,
    textAlignment,
    className,
    children,
    ...rest
  } = props

  return (
    <div className={cta({ kind, className })} {...rest} ref={ref}>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl flex-col items-center">
          {eyebrow && (
            <Text
              as="p"
              display="eyebrow"
              className={ctaEyebrow({
                kind,
                textAlignment,
                className: eyebrowClassName,
              })}
            >
              {eyebrow}
            </Text>
          )}
          {heading && (
            <Heading
              as="h2"
              className={ctaHeading({
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
              className={ctaBody({
                kind,
                textAlignment,
                className: bodyClassName,
              })}
            >
              {body}
            </Text>
          )}
          {children && (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const CTABlock = forwardRef(CTABlockInner)
