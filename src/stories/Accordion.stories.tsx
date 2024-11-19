import type { Meta, StoryObj } from '@storybook/react'
import { type ReactElement } from 'react'

import { Accordion } from '~/components/molecules/Accordion'

const meta = {
  title: 'Atoms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (_Story, { args }): ReactElement => {
      const { testId, isInitiallyExpanded } = args

      return (
        <Accordion testId={testId} isInitiallyExpanded={isInitiallyExpanded}>
          <div>
            Accordion Header
            <Accordion.Toggler fill="red" size={32} />
          </div>
          <Accordion.Content>Accordion Content</Accordion.Content>
        </Accordion>
      )
    },
  ],
} satisfies Meta<typeof Accordion>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    testId: 'faq-item',
  },
}

export const InitiallyExpanded: Story = {
  args: {
    isInitiallyExpanded: true,
  },
}

export default meta
