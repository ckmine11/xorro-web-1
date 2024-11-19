import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { type ReactElement, useState } from 'react'

import { Tabs } from '~/components/molecules/Tabs'

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    onTabPress: action('tab-click'),
    activeTabIndex: 0,
    tabs: [],
  },
  decorators: [
    (_Story, { args }): ReactElement => {
      const [activeTabIndex, setActiveTabIndex] = useState(0)

      return (
        <div>
          <Tabs
            {...args}
            activeTabIndex={activeTabIndex}
            onTabPress={setActiveTabIndex}
          />
          <div className="m-4 font-gilroy-bold font-[20px] text-black">
            Content: {args.tabs[activeTabIndex]}
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onTabPress: fn(),
    activeTabIndex: 1,
    tabs: ['Overview', 'Revenue Stock', 'Tiers', 'Tab 4', 'Tab 5'],
  },
}

export const WithOneTab: Story = {
  args: {
    onTabPress: fn(),
    activeTabIndex: 0,
    tabs: ['Overview'],
  },
}

export const TabWithIncorrectSelectIndex: Story = {
  args: {
    onTabPress: fn(),
    activeTabIndex: 5,
    tabs: ['Overview', 'Revenue Stock', 'Tiers'],
  },
}
