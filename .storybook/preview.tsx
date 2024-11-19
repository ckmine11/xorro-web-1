import localFont from 'next/font/local'
import type { Preview } from '@storybook/react'
import '../src/app/globals.css'
import React from 'react'

const gilroyRegular = localFont({
  src: '../media/fonts/Gilroy-Regular.woff2',
  display: 'swap',
  variable: '--font-gilroy-regular',
})

const gilroyBold = localFont({
  src: '../media/fonts/Gilroy-Bold.woff2',
  display: 'swap',
  variable: '--font-gilroy-bold',
})

const clashGroteskBold = localFont({
  src: '../../media/fonts/ClashGrotesk-Bold.woff2',
  display: 'swap',
  variable: '--font-clash-grotesk-bold',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <main
          className={`font-gilroy-regular leading-tight antialiased ${gilroyRegular.variable} ${gilroyBold.variable} ${clashGroteskBold.variable}`}
        >
          <Story />
        </main>
      )
    },
  ],
}

export default preview
