import type { Meta, StoryObj } from '@storybook/react'
import { type ReactElement } from 'react'

import { NavBarItem } from '~/components/atoms/NavBarItem'

const meta = {
  title: 'Atoms/NavBarItem',
  component: NavBarItem,
  tags: ['autodocs'],
  args: {
    text: 'Campaigns',
    iconName: 'rocket',
    href: '/campaigns',
  },
  decorators: [
    (Story): ReactElement => {
      return (
        <div className="inline-block bg-black">
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof NavBarItem>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Selected: Story = {
  args: {
    isSelected: true,
  },
}
