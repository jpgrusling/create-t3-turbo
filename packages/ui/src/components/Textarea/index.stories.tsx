import { type Meta, type StoryObj } from '@storybook/react'

import { Textarea } from './index'

const Component: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Forms/Textarea',
  args: {
    placeholder: 'Placeholder text',
    rows: 4,
    cols: 50,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export default Component

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {},
}
