import { type FC } from 'react'

import { Text, type TextProps } from '@local/ui/Text'

export type FormLabelProps = Omit<TextProps<'label'>, 'as'>

export const FormLabel: FC<FormLabelProps> = ({
  children,
  display = 'formLabel',
  ...rest
}) => (
  <Text as="label" display={display} {...rest}>
    {children}
  </Text>
)
