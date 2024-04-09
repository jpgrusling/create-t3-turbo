import { type Meta, type StoryObj } from '@storybook/react'

import { Logo } from '@local/ui/svg'

import { Input, type InputProps } from './input'

const Component: Meta<typeof Input> = {
  component: Input,
  title: 'Forms/Input',
  args: {
    placeholder: 'Placeholder text',
  } satisfies InputProps,
  argTypes: {
    trailingContent: {
      table: {
        disable: true,
      },
    },
    leadingContent: {
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

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {},
}

export const LeadingContent: Story = {
  name: 'With Leading Content',
  args: {
    leadingContent: <Logo width="100%" height="100%" />,
  },
}

export const TrailingContent: Story = {
  name: 'With Trailing Content',
  args: {
    trailingContent: <Logo width="100%" height="100%" />,
  },
}

export const LeadingAndTrailing: Story = {
  name: 'With Leading & Trailing Content',
  args: {
    leadingContent: <Logo width="100%" height="100%" />,
    trailingContent: <Logo width="100%" height="100%" />,
  },
}
