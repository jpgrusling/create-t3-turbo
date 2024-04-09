import { type Meta, type StoryObj } from '@storybook/react'

import { Text } from '@local/ui/Text'

import { Divider, type DividerProps } from './divider'

const Component: Meta<typeof Divider> = {
  component: Divider,
  title: 'Layout/Divider',
  args: {} satisfies DividerProps,
  parameters: {
    layout: 'fullscreen',
  },
}

export default Component

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {
    children: <Text>some text</Text>,
  },
}
