import type { Meta, StoryObj } from '@storybook/react'
import { type ReactElement } from 'react'

import { Text } from '~/components/atoms/Text'

function ColorDecorator(Story: () => ReactElement): ReactElement {
  return (
    <div className="flex flex-row">
      <div className="bg-white p-4">
        <Story />
      </div>
      <div className="bg-black p-4">
        <Story />
      </div>
    </div>
  )
}

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof meta>

export const VariantHeadline1: Story = {
  args: {
    text: 'Headline 1',
    variant: 'headline1',
  },
}

export const VariantHeadline2: Story = {
  args: {
    text: 'Headline 2',
    variant: 'headline2',
  },
}

export const VariantHeadline3: Story = {
  args: {
    text: 'Headline 3',
    variant: 'headline3',
  },
}

export const VariantHeadline4: Story = {
  args: {
    text: 'Headline 4',
    variant: 'headline4',
  },
}

export const VariantTitle1: Story = {
  args: {
    text: 'Title 1',
    variant: 'title1',
  },
}

export const VariantTitle2: Story = {
  args: {
    text: 'Title 2',
    variant: 'title2',
  },
}

export const VariantTitle3: Story = {
  args: {
    text: 'Title 3',
    variant: 'title3',
  },
}

export const VariantTitle4: Story = {
  args: {
    text: 'Title 4',
    variant: 'title4',
  },
}

export const VariantTitle5: Story = {
  args: {
    text: 'Title 5',
    variant: 'title5',
  },
}

export const VariantBody1: Story = {
  args: {
    text: 'Body 1',
  },
}

export const VariantBody1Bold: Story = {
  args: {
    text: 'Body 1 Bold',
    variant: 'body1-bold',
  },
}

export const VariantBody2: Story = {
  args: {
    text: 'Body 2',
    variant: 'body2',
  },
}

export const VariantBody2Bold: Story = {
  args: {
    text: 'Body 2 Bold',
    variant: 'body2-bold',
  },
}

export const VariantBody3: Story = {
  args: {
    text: 'Body 3',
    variant: 'body3',
  },
}

export const VariantBody3Bold: Story = {
  args: {
    text: 'Body 3 Bold',
    variant: 'body3-bold',
  },
}

export const VariantBody4: Story = {
  args: {
    text: 'Body 4',
    variant: 'body4',
  },
}

export const VariantBody4Bold: Story = {
  args: {
    text: 'Body 4 Bold',
    variant: 'body4-bold',
  },
}

export const VariantBody5: Story = {
  args: {
    text: 'Body 5',
    variant: 'body5',
  },
}

export const VariantBody5Bold: Story = {
  args: {
    text: 'Body 5 Bold',
    variant: 'body5-bold',
  },
}

export const VariantCaption: Story = {
  args: {
    text: 'Caption',
    variant: 'caption',
  },
}

export const VariantCaptionBold: Story = {
  args: {
    text: 'Caption Bold',
    variant: 'caption-bold',
  },
}

export const ColorOrange50: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Orange 50',
    color: 'orange-50',
  },
}

export const ColorOrange100: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Orange 100',
    color: 'orange-100',
  },
}

export const ColorOrange200: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Orange 200',
    color: 'orange-200',
  },
}

export const ColorOrange300: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Orange 300',
    color: 'orange-300',
  },
}

export const ColorOrange400: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Orange 400',
    color: 'orange-400',
  },
}

export const ColorPink50: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Pink 50',
    color: 'pink-50',
  },
}

export const ColorPink100: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Pink 100',
    color: 'pink-100',
  },
}

export const ColorPink200: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Pink 200',
    color: 'pink-200',
  },
}

export const ColorPink300: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Pink 300',
    color: 'pink-300',
  },
}

export const ColorPink400: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Pink 400',
    color: 'pink-400',
  },
}

export const ColorBlue50: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Blue 50',
    color: 'blue-50',
  },
}

export const ColorBlue100: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Blue 100',
    color: 'blue-100',
  },
}

export const ColorBlue200: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Blue 200',
    color: 'blue-200',
  },
}

export const ColorBlue300: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Blue 300',
    color: 'blue-300',
  },
}

export const ColorBlue400: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Blue 400',
    color: 'blue-400',
  },
}

export const ColorYellow50: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Yellow 50',
    color: 'yellow-50',
  },
}

export const ColorYellow100: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Yellow 100',
    color: 'yellow-100',
  },
}

export const ColorYellow200: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Yellow 200',
    color: 'yellow-200',
  },
}

export const ColorYellow300: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Yellow 300',
    color: 'yellow-300',
  },
}

export const ColorYellow400: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Yellow 400',
    color: 'yellow-400',
  },
}

export const ColorGrey50: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 50',
    color: 'grey-50',
  },
}

export const ColorGrey100: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 100',
    color: 'grey-100',
  },
}

export const ColorGrey200: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 200',
    color: 'grey-200',
  },
}

export const ColorGrey300: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 300',
    color: 'grey-300',
  },
}

export const ColorGrey400: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 400',
    color: 'grey-400',
  },
}

export const ColorGrey500: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 500',
    color: 'grey-500',
  },
}

export const ColorGrey600: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 600',
    color: 'grey-600',
  },
}

export const ColorGrey700: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 700',
    color: 'grey-700',
  },
}

export const ColorGrey800: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 800',
    color: 'grey-800',
  },
}

export const ColorGrey900: Story = {
  decorators: [ColorDecorator],
  args: {
    text: 'Body 1 / Grey 900',
    color: 'grey-900',
  },
}

export const MdVariant: Story = {
  args: {
    text: 'Smaller in mobile and bigger in desktop',
    color: 'grey-900',
    variant: 'headline4',
    mdVariant: 'headline1',
  },
}

export default meta
