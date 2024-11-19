import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '~/components/atoms/Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onPress: fn(),
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'SIGN UP',
    inline: false,
  },
}

export const PrimaryDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    inline: false,
  },
}

export const PrimaryWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    inline: false,
  },
}

export const Secondary: Story = {
  args: {
    text: 'SIGN UP',
    variant: 'secondary',
    inline: false,
  },
}

export const SecondaryDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    variant: 'secondary',
    inline: false,
  },
}

export const SecondaryWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    variant: 'secondary',
    inline: false,
  },
}

export const Tertiary: Story = {
  args: {
    text: 'SIGN UP',
    variant: 'tertiary',
    inline: false,
  },
}

export const TertiaryDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    variant: 'tertiary',
    inline: false,
  },
}

export const TertiaryWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    variant: 'tertiary',
    inline: false,
  },
}

export const PrimaryMedium: Story = {
  args: {
    text: 'SIGN UP',
    size: 'medium',
  },
}

export const PrimaryMediumDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    size: 'medium',
  },
}

export const PrimaryMediumWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    size: 'medium',
  },
}

export const SecondaryMedium: Story = {
  args: {
    text: 'SIGN UP',
    variant: 'secondary',
    size: 'medium',
  },
}

export const SecondaryMediumDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    variant: 'secondary',
    size: 'medium',
  },
}

export const SecondaryMediumWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    variant: 'secondary',
    size: 'medium',
  },
}

export const TertiaryMedium: Story = {
  args: {
    text: 'SIGN UP',
    variant: 'tertiary',
    size: 'medium',
  },
}

export const TertiaryMediumDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    variant: 'tertiary',
    size: 'medium',
  },
}

export const TertiaryMediumWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    variant: 'tertiary',
    size: 'medium',
  },
}

export const PrimarySmall: Story = {
  args: {
    text: 'SIGN UP',
    size: 'small',
  },
}

export const PrimarySmallDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    size: 'small',
  },
}

export const PrimarySmallWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    size: 'small',
  },
}

export const SecondarySmall: Story = {
  args: {
    text: 'SIGN UP',
    variant: 'secondary',
    size: 'small',
  },
}

export const SecondarySmallDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    variant: 'secondary',
    size: 'small',
  },
}

export const SecondarySmallWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    variant: 'secondary',
    size: 'small',
  },
}

export const TertiarySmall: Story = {
  args: {
    text: 'SIGN UP',
    variant: 'tertiary',
    size: 'small',
  },
}

export const TertiarySmallDisabled: Story = {
  args: {
    isDisabled: true,
    text: 'SIGN UP',
    variant: 'tertiary',
    size: 'small',
  },
}

export const TertiarySmallWithLoading: Story = {
  args: {
    text: 'SIGN UP',
    isLoading: true,
    variant: 'tertiary',
    size: 'small',
  },
}

export default meta
