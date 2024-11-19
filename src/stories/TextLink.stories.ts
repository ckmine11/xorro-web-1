import type { Meta, StoryObj } from '@storybook/react'

import { TextLink } from '~/components/atoms/TextLink'

const meta = {
  title: 'Atoms/TextLink',
  component: TextLink,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof TextLink>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    text: 'Click here',
    path: 'https://google.com',
    target: '_blank',
  },
}

export default meta
