import { type Meta, type StoryObj } from '@storybook/react'

import { Row, type RowProps } from './row'

const Component: Meta<typeof Row> = {
  component: Row,
  title: 'Static/Flex/Row',
  args: {
    as: 'div',
    reverse: false,
    items: 'stretch',
    justify: 'normal',
    self: 'auto',
    wrap: 'wrap',
    grow: false,
    shrink: false,
    children: Array(10)
      .fill(undefined)
      .map((_v, i) => (
        <div
          className="bg-primary basis-1/3 border-2 border-orange-200 p-4 text-white"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          Cell {i}
        </div>
      )),
  } satisfies RowProps<'div'>,
}

export default Component

type Story = StoryObj<typeof Row>

export const Default: Story = {
  args: {},
}
