import type { Meta, StoryObj } from '@storybook/react'

import { Number } from '~/components/atoms/Number'

const meta = {
  title: 'Atoms/Number',
  component: Number,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Number>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    text: '1000',
  },
}

export const Negative: Story = {
  args: {
    text: '-1000',
  },
}

export const Money = {
  args: {
    text: '1000',
    isMoney: true,
  },
}

export const NegativeMoney = {
  args: {
    text: '-1000',
    isMoney: true,
  },
}

export const Thousands = {
  args: {
    text: '13000',
  },
}

export const ThousandsWithPrecision = {
  args: {
    text: '13370',
    precision: 2,
  },
}

export const Millions = {
  args: {
    text: '13000000',
  },
}

export const MillionsWithPrecision = {
  args: {
    text: '13370000',
    precision: 2,
  },
}

export const WithPrecisionMoney = {
  args: {
    text: '13370000',
    precision: 2,
    isMoney: true,
  },
}

export const WithTextStyle = {
  args: {
    text: '13370000',
    precision: 2,
    isMoney: true,
    textProps: {
      variant: 'title2',
      color: 'orange-50',
    },
  },
}

export default meta
