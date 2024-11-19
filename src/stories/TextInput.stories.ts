import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { TextInput } from '~/components/atoms/TextInput'

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof TextInput>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    placeholder: 'Write here',
  },
}

export const GenericWithHelperText: Story = {
  args: {
    placeholder: 'Write here',
    helperText: 'Helper text or error message goes here',
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Write here',
    iconName: 'downArrow',
  },
}

export const WithHelperTextIcon: Story = {
  args: {
    placeholder: 'Write here',
    iconName: 'downArrow',
    helperText: 'Helper text or error message goes here',
  },
}

export const WithDefaultValue: Story = {
  args: {
    placeholder: 'Write here',
    initialValue: 'Some default value',
  },
}

export const WithDefaultValueHelperText: Story = {
  args: {
    initialValue: 'Some default value',
    placeholder: 'Write here',
    helperText: 'Helper text or error message goes here',
  },
}

export const ErrorState: Story = {
  args: {
    initialValue: 'Some default value',
    placeholder: 'Write here',
    hasError: true,
  },
}

export const WithHelperTextErrorState: Story = {
  args: {
    initialValue: 'Some default value',
    hasError: true,
    helperText: 'Helper text or error message goes here',
    placeholder: 'Write here',
  },
}

export const WithHelperTextIconErrorState: Story = {
  args: {
    initialValue: 'Some default value',
    hasError: true,
    helperText: 'Helper text or error message goes here',
    iconName: 'downArrow',
    placeholder: 'Write here',
  },
}

export default meta
