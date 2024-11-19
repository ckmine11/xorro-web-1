import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from '~/components/atoms/Tag'

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    text: 'PURCHASED',
  },
} satisfies Meta<typeof Tag>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const WithIcon: Story = {
  args: {
    text: 'PURCHASED',
    iconName: 'checkboxCircle',
  },
}

export const InProgress: Story = {
  args: {
    text: 'IN PROGRESS',
    variant: 'warning',
  },
}

export const InProgressWithIcon: Story = {
  args: {
    text: 'IN PROGRESS',
    iconName: 'checkboxCircle',
    variant: 'warning',
  },
}

export const Ended: Story = {
  args: {
    text: 'ENDED',
    variant: 'ended',
  },
}

export const EndedWithIcon: Story = {
  args: {
    text: 'ENDED',
    iconName: 'checkboxCircle',
    variant: 'ended',
  },
}

export const Live: Story = {
  args: {
    text: 'LIVE',
    variant: 'danger',
  },
}

export const LiveWithIcon: Story = {
  args: {
    text: 'Live',
    iconName: 'checkboxCircle',
    variant: 'danger',
  },
}

export const Small: Story = {
  args: {
    text: 'PURCHASED',
    size: 'small',
  },
}

export const SmallWithIcon: Story = {
  args: {
    text: 'PURCHASED',
    iconName: 'checkboxCircle',
    size: 'small',
  },
}

export default meta
