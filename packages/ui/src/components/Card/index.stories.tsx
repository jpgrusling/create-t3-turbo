import { type Meta, type StoryObj } from '@storybook/react'

import { Card } from './index'

const Component: Meta<typeof Card> = {
  component: Card,
  title: 'Static/Card',
  args: {
    heading: 'Heading',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet suspendisse. Egestas pretium aenean pharetra magna. Tortor condimentum lacinia quis vel. Elementum sagittis vitae et leo duis ut. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Leo integer malesuada nunc vel risus commodo. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Diam vel quam elementum pulvinar etiam non quam. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque.',
    borderWidth: 'two',
    borderColor: 'primary',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export default Component

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    kind: 'default',
    textAlignment: 'center',
    borderWidth: 'two',
    borderColor: 'default',
  },
}

export const LeftAligned: Story = {
  args: {
    kind: 'default',
    textAlignment: 'left',
    borderWidth: 'two',
    borderColor: 'default',
  },
}

export const RightAligned: Story = {
  args: {
    kind: 'default',
    textAlignment: 'right',
    borderWidth: 'two',
    borderColor: 'default',
  },
}
