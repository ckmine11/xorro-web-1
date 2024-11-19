import type { Meta, ReactRenderer, StoryObj } from '@storybook/react'
import { type ReactElement } from 'react'
import { type PartialStoryFn } from 'storybook/internal/types'

import { FancyBackground } from '~/components/atoms/FancyBackground'

type FancyBackgroundProps = PartialStoryFn<
  ReactRenderer,
  {
    theme: 'blue' | 'teal' | 'yellow'
  }
>

function HalfAndHalfLayoutDecorator(Story: FancyBackgroundProps): ReactElement {
  return (
    <div className="flex h-[95vh] flex-col bg-gray-100 sm:flex-row">
      <div className="relative sm:flex sm:flex-1 sm:flex-col">
        <div className="hidden sm:flex">
          <Story />
        </div>
        <div className="relative flex flex-1 sm:items-center sm:justify-center">
          <p className="text-orange-500">Left</p>
        </div>
      </div>
      <div className="relative flex flex-1 sm:items-center sm:justify-center">
        Right
      </div>
    </div>
  )
}

function FullScreenLayoutDecorator(Story: FancyBackgroundProps): ReactElement {
  return (
    <div className="flex h-[95vh] flex-col bg-gray-100 sm:flex-row">
      <div className="relative sm:flex sm:flex-1 sm:flex-col">
        <div className="hidden sm:flex">
          <Story />
        </div>
        <div className="relative flex flex-1 sm:items-center sm:justify-center">
          <p className="text-orange-500">Hello</p>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Atoms/FancyBackground',
  component: FancyBackground,
  parameters: {},
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof FancyBackground>

type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    theme: 'blue',
  },
  decorators: [FullScreenLayoutDecorator],
}

export const BlueHalf: Story = {
  args: {
    theme: 'blue',
  },
  decorators: [HalfAndHalfLayoutDecorator],
}

export const Teal: Story = {
  args: {
    theme: 'teal',
  },
  decorators: [FullScreenLayoutDecorator],
}

export const TealHalf: Story = {
  args: {
    theme: 'teal',
  },
  decorators: [HalfAndHalfLayoutDecorator],
}

export const Yellow: Story = {
  args: {
    theme: 'yellow',
  },
  decorators: [FullScreenLayoutDecorator],
}

export const YellowHalf: Story = {
  args: {
    theme: 'yellow',
  },
  decorators: [HalfAndHalfLayoutDecorator],
}

export default meta
