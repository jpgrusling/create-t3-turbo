import { action } from '@storybook/addon-actions'
import { type Meta, type StoryObj } from '@storybook/react'

import { Link, type LinkProps } from './link'

const Component: Meta<typeof Link> = {
  component: Link,
  title: 'Elements/Link',
  args: {
    children: 'Example Button',
    onClick: action('onClick'),
  } satisfies LinkProps,
  parameters: {
    layout: 'centered',
  },
}

export default Component

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: 'Default Link',
  },
}
