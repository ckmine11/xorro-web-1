import type { Meta, StoryObj } from '@storybook/react'

import { NavBar } from '~/components/organisms/NavBar'

const meta = {
  title: 'Organisms/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  args: {
    currentPath: '/campaigns',
    isAuthenticated: false,
  },
} satisfies Meta<typeof NavBar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const LoggedIn: Story = {
  args: {
    isAuthenticated: true,
  },
}
