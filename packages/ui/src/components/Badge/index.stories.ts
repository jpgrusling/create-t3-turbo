import { type Meta, type StoryObj } from '@storybook/react'

import { Badge, type BadgeProps } from './index'

const Component: Meta<typeof Badge> = {
  component: Badge,
  title: 'Elements/Badges',
  args: {} satisfies BadgeProps,
  argTypes: {},
}

export default Component

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  name: 'Badge',
  args: {
    children: 'Badge',
    as: 'div',
    kind: 'blue',
  },
}
