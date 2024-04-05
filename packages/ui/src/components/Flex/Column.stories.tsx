import { type Meta, type StoryObj } from '@storybook/react'

import { Column, type ColumnProps } from './index'

const Component: Meta<typeof Column> = {
  component: Column,
  title: 'Static/Flex/Column',
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
          className="basis-1/3 border-2 border-orange-200 bg-primary p-4 text-white"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          Cell {i}
        </div>
      )),
  } satisfies ColumnProps<'div'>,
}

export default Component

type Story = StoryObj<typeof Column>

export const Default: Story = {
  args: {},
}
