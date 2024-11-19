import type { Meta, StoryObj } from '@storybook/react'
import { type ReactElement } from 'react'

import { Icon, iconMap, type TIconNames } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'

function GridDecorator(): ReactElement {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {Object.keys(iconMap)
        .sort()
        .map((iconName) => {
          return (
            <div
              className="flex h-32 w-40 flex-col items-center justify-center rounded p-8 shadow-md"
              key={iconName}
            >
              <div className="mb-4 border border-gray-200">
                <Icon name={iconName as TIconNames} size={32} />
              </div>
              <Text text={iconName} variant="body5-bold" color="grey-600" />
            </div>
          )
        })}
    </div>
  )
}

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Icon>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    name: 'chevronRight',
  },
}

export const Color: Story = {
  args: {
    name: 'chevronRight',
    fill: '#66f',
  },
}

export const Size: Story = {
  args: {
    name: 'chevronRight',
    height: 32,
    width: 32,
  },
}

export const Gallery: Story = {
  decorators: [GridDecorator],
  // @ts-expect-error the decorator will loop through all icons, so we don't need to provide args
  args: {},
}

export default meta
