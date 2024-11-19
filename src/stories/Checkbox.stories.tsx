import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Checkbox } from '~/components/atoms/Checkbox'
import { Text } from '~/components/atoms/Text'
import { TextLink } from '~/components/atoms/TextLink'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    label: 'checkbox',
  },
}

export const Checked: Story = {
  args: {
    isInitiallyChecked: true,
    label: 'checkbox',
  },
}

export const DisabledUnchecked: Story = {
  args: {
    label: 'checkbox',
    isDisabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'checkbox',
    isDisabled: true,
    isInitiallyChecked: true,
  },
}

export const CustomLabel: Story = {
  args: {
    renderLabel: ({ textColorVariant, isDisabled }) => {
      return (
        <>
          <Text
            text="I certify that I am 18 years of age or older, I agree to the"
            variant="body4"
            color={textColorVariant}
          />{' '}
          <TextLink
            path="/"
            text="User Agreement"
            textProps={{
              variant: 'body4-bold',
              color: isDisabled ? textColorVariant : undefined,
            }}
          />
          <Text
            text=", and I have read the"
            variant="body4"
            color={textColorVariant}
          />{' '}
          <TextLink
            path="/"
            text="Privacy Policy"
            textProps={{
              variant: 'body4-bold',
              color: isDisabled ? textColorVariant : undefined,
            }}
          />
          <Text text="." variant="body4" color={textColorVariant} />
        </>
      )
    },
  },
}

export default meta
