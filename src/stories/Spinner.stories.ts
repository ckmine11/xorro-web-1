import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '~/components/atoms/Spinner'

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Spinner>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {},
}

export const Big: Story = {
  args: {
    size: 'large',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export default meta
