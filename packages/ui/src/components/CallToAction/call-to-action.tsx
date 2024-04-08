import {
  createElement,
  forwardRef,
  type ComponentProps,
  type ForwardRefRenderFunction,
  type ReactElement,
  type ReactNode,
} from 'react'
import { Divider } from '~components/Divider'
import { type Heading } from '~components/Heading'
import { Text } from '~components/Text'

import { cn } from '~/utils/cn'

export type CallToActionProps = ComponentProps<'div'> & {
  eyebrow?: ReactElement<typeof Text>
  heading?: ReactElement<typeof Heading> | ReactElement<typeof Text>
  body?: ReactElement<typeof Text>
}

const getEyebrow = (eyebrow?: ReactElement<typeof Text>): ReactNode => {
  if (!eyebrow) {
    return null
  }

  if (!('display' in eyebrow.props) || eyebrow.props.display === undefined) {
    return createElement(Text, { ...eyebrow.props, display: 'eyebrow' })
  }

  return eyebrow
}

const CallToActionInner: ForwardRefRenderFunction<
  HTMLDivElement,
  CallToActionProps
> = ({ eyebrow, heading, body, className, children, ...rest }, ref) => (
  <div
    className={cn(
      'mx-auto flex max-w-2xl flex-col items-stretch gap-6 border border-divider px-6 py-12 sm:px-6 sm:py-8 lg:px-8',
      className,
    )}
    ref={ref}
    {...rest}
  >
    {getEyebrow(eyebrow)}
    {heading}
    {body}
    {children && (
      <>
        <Divider />
        {children}
      </>
    )}
  </div>
)

export const CallToAction = forwardRef(CallToActionInner)
