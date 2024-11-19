import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '~/components/atoms/Avatar'

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {},
  tags: ['autodocs'],
  args: {
    imageUrl: 'https://i.pravatar.cc/300?u=1',
    size: 'medium',
  },
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof meta>

export const ExtraSmall: Story = {
  args: {
    size: 'extra-small',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
  },
}

export const Big: Story = {
  args: {
    size: 'big',
  },
}

export const NoImage: Story = {
  args: {
    imageUrl: undefined,
  },
}

export const NotYetLoadedImage: Story = {
  args: {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pix.gif?20100705125049',
  },
}

export default meta
