import { type Meta, type StoryObj } from '@storybook/react'

import { FormLabel, type FormLabelProps } from './form-label'

const Component: Meta<typeof FormLabel> = {
  component: FormLabel,
  title: 'Forms/Label',
  args: {} satisfies FormLabelProps,
}

export default Component

type Story = StoryObj<typeof FormLabel>

export const Default: Story = {
  args: {
    children: 'Example label',
  },
}
