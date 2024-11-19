import type { Meta, StoryObj } from '@storybook/react'

import { CreatorCard } from '~/components/molecules/cards/CreatorCard'

const meta = {
  title: 'Molecules/CreatorCard',
  component: CreatorCard,
  tags: ['autodocs'],
  args: {
    imageUrl: '',
    name: 'John Doe',
    investorsCount: 400_000,
  },
} satisfies Meta<typeof CreatorCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const NotYetLoadedImage: Story = {
  args: {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pix.gif?20100705125049',
  },
}

export const Liked: Story = {
  args: {
    initiallyLiked: true,
  },
}

export const WithAMillionFollowers: Story = {
  args: {
    followersCount: 4_100_000,
    investorsCount: undefined,
  },
}

export const Skeleton: Story = {
  args: {
    variant: 'skeleton',
  },
}
