import { type Meta, type StoryObj } from '@storybook/react'

import { Banner, type BannerProps } from './banner'

const Component: Meta<typeof Banner> = {
  component: Banner,
  title: 'Static/Banner',
  args: {} satisfies BannerProps,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default Component

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  name: 'Banner',
  args: {
    children: 'Banner',
  },
}
