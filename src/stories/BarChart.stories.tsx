import type { Meta, StoryObj } from '@storybook/react'

import { BarChart } from '~/components/charts/BarChart'

const meta = {
  title: 'Organisms/Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof BarChart>

type Story = StoryObj<typeof meta>

const data = [
  1_234_567, 2_345_678, 2_111_111, 2_222_222, 1_333_333, 2_444_444, 1_555_555,
  2_166_666, 777_777, 888_888, 1_999_999, 2_100_000, 2_200_000, 1_500_000,
  450_000, 2_500_000, 600_000, 2_600_000, 1_700_000, 290_000, 1_800_000,
  1_000_000, 1_100_000, 2_400_000, 1_500_000,
]

export const Generic: Story = {
  args: {
    data: data,
    xLabels: ['W1', 'W2', 'W3', 'W4'],
  },
}

export const MinAsZero: Story = {
  args: {
    data: data,
    xLabels: ['W1', 'W2', 'W3', 'W4'],
    useZeroAsMin: true,
  },
}

export default meta
