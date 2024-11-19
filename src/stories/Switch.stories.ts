import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Switch } from '~/components/atoms/Switch'

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof meta>

export const Off: Story = {
  args: {
    testId: 'terms',
  },
}

export const On: Story = {
  args: {
    isInitiallyChecked: true,
    testId: 'terms',
  },
}

export const DisabledOff: Story = {
  args: {
    isDisabled: true,
    testId: 'terms',
  },
}

export const DisabledOn: Story = {
  args: {
    isDisabled: true,
    testId: 'terms',
    isInitiallyChecked: true,
  },
}

export default meta
