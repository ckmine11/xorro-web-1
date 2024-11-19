import type { Meta, StoryObj } from '@storybook/react'

import { ProgressBar } from '~/components/atoms/ProgressBar'

const meta = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ProgressBar>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    testId: 'default',
    value: 25,
    max: 100,
    size: 'medium',
    label: 'Default',
  },
}

export const SmallWithLabel: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'small',
    label: 'Label text',
  },
}

export const SmallWithoutLabel: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'small',
  },
}

export const MediumWithLabel: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'medium',
    label: 'Label text',
  },
}

export const MediumWithoutLabel: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'medium',
  },
}

export const LargeWithLabel: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'large',
    label: 'Label text',
  },
}

export const LargeWithoutLabel: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'large',
  },
}

export default meta
