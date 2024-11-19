import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'gilroy-bold': ['var(--font-gilroy-bold)'],
        'gilroy-regular': ['var(--font-gilroy-regular)'],
        'clash-grotesk-bold': ['var(--font-clash-grotesk-bold)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config
