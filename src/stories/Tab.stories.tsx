import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from '~/components/atoms/Tab'

const meta = {
  title: 'Atoms/Tab',
  component: Tab,
  parameters: {},
  tags: ['autodocs'],
  args: {
    onPress: action('tab-click'),
    text: 'Tab 1',
  },
} satisfies Meta<typeof Tab>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Tab 1',
    isActive: true,
  },
}

export const InactiveTab: Story = {
  args: {
    text: 'Tab 2',
  },
}

export const ActiveTabWithLongText: Story = {
  args: {
    text: 'Tab 3 long text to check the wrapping',
    isActive: true,
  },
}

export default meta
