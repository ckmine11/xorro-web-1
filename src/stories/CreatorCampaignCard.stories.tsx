import type { Meta, StoryObj } from '@storybook/react'

import { CreatorCampaignCard } from '~/components/organisms/cards/CreatorCampaignCard'

const meta = {
  title: 'Organisms/CreatorCampaignCard',
  component: CreatorCampaignCard,
  tags: ['autodocs'],
  args: {
    creatorCardProps: {
      imageUrl: 'https://i.pravatar.cc/400?img=31',
      name: 'John Doe',
      investorsCount: 400_000,
    },
    progressBarProps: {
      value: 24.5,
      label: '$1.50',
    },
    tokenAcronym: 'RBX',
  },
} satisfies Meta<typeof CreatorCampaignCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Live: Story = {
  args: {
    isLive: true,
  },
}

export const Skeleton: Story = {
  args: {
    variant: 'skeleton',
  },
}
