import { type Meta, type StoryObj } from '@storybook/react'

import { Text, type TextProps } from './index'

const Component: Meta<typeof Text> = {
  component: Text,
  title: 'Static/Text',
  args: {
    children: 'Example Text',
  } satisfies TextProps,
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
  },
}

export default Component

type Story = StoryObj<typeof Text>

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet suspendisse. Egestas pretium aenean pharetra magna. Tortor condimentum lacinia quis vel. Elementum sagittis vitae et leo duis ut. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Leo integer malesuada nunc vel risus commodo. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Diam vel quam elementum pulvinar etiam non quam. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque.'

export const Paragraph: Story = {
  name: 'Paragraph Body',
  args: {
    as: 'p',
    children: text,
    mode: 'body',
  },
}

export const DivBody: Story = {
  name: 'DIV Body',
  args: {
    as: 'div',
    children: text,
    mode: 'body',
  },
}

export const PreBody: Story = {
  name: 'PRE Body',
  args: {
    as: 'pre',
    children: text,
    mode: 'body',
  },
}

export const SpanBody: Story = {
  name: 'SPAN Body',
  args: {
    as: 'span',
    children: text,
    mode: 'body',
  },
}
