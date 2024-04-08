import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from '~components/Button'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'

import { CallToAction } from './call-to-action'

const Component: Meta<typeof CallToAction> = {
  component: CallToAction,
  title: 'Blocks/Call To Action',
  args: {
    eyebrow: <Text>Get started</Text>,
    heading: <Heading as="h4">Ready to dive in?</Heading>,
    body: <Text>Start your free trial today.</Text>,
    children: (
      <div className="flex flex-row gap-6">
        <Button>Get started</Button>
        <Button>Get started</Button>
      </div>
    ),
  },
  argTypes: {},
  parameters: {},
}

export default Component

type Story = StoryObj<typeof CallToAction>

export const Default: Story = {
  args: {},
}
