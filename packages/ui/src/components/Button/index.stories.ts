import { action } from '@storybook/addon-actions'
import { type Meta, type StoryObj } from '@storybook/react'

import { Button, type ButtonProps } from './index'

const Component: Meta<typeof Button> = {
  component: Button,
  title: 'Elements/Buttons',
  args: {
    children: 'Example Button',
    onClick: action('onClick'),
  } satisfies ButtonProps,
  argTypes: {
    kind: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default Component

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    kind: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    children: 'Secondary Button',
  },
}

export const Tertiary: Story = {
  args: {
    kind: 'tertiary',
    children: 'Tertiary Button',
  },
}
