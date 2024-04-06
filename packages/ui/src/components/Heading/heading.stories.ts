import { type Meta, type StoryObj } from '@storybook/react'

import { Heading, type HeadingProps } from './index'

const Component: Meta<typeof Heading> = {
  component: Heading,
  title: 'Static/Heading',
  args: {
    children: 'Example Heading',
  } satisfies HeadingProps,
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
  },
}

export default Component

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    as: 'h1',
    display: 'base',
    children: 'Generic Heading',
  } satisfies HeadingProps,
  argTypes: {
    as: {
      table: {
        disable: false,
      },
    },
  },
}

export const H1: Story = {
  name: 'H1',
  args: {
    as: 'h1',
    children: 'H1 Heading',
  } satisfies HeadingProps,
}

export const H2: Story = {
  name: 'H2',
  args: {
    as: 'h2',
    children: 'H2 Heading',
  } satisfies HeadingProps<'h2'>,
}

export const H3: Story = {
  name: 'H3',
  args: {
    as: 'h3',
    children: 'H3 Heading',
  } satisfies HeadingProps<'h3'>,
}

export const H4: Story = {
  name: 'H4',
  args: {
    as: 'h4',
    children: 'H4 Heading',
  } satisfies HeadingProps<'h4'>,
}

export const H5: Story = {
  name: 'H5',
  args: {
    as: 'h5',
    children: 'H5 Heading',
  } satisfies HeadingProps<'h5'>,
}

export const H6: Story = {
  name: 'H6',
  args: {
    as: 'h6',
    children: 'H6 Heading',
  } satisfies HeadingProps<'h6'>,
}
