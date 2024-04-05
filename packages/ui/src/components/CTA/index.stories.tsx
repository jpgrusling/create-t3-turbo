import { type Meta, type StoryObj } from '@storybook/react'

import { CTABlock } from './index'

const Component: Meta<typeof CTABlock> = {
  component: CTABlock,
  title: 'Static/CTABlock',
  args: {
    eyebrow: 'CTA!',
    heading: 'Ready to dive in?',
    body: 'Start your free trial today.',
  },
  argTypes: {},
  parameters: {},
}

export default Component

type Story = StoryObj<typeof CTABlock>

export const Default: Story = {
  args: {
    kind: 'default',
    textAlignment: 'center',
  },
}

export const LeftAligned: Story = {
  args: {
    kind: 'default',
    textAlignment: 'left',
  },
}

export const RightAligned: Story = {
  args: {
    kind: 'default',
    textAlignment: 'right',
  },
}
