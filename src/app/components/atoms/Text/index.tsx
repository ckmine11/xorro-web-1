import { cva } from 'cva'
import { type ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

export type TTextProps = {
  align?: 'left' | 'center' | 'right'
  color?:
    | 'black'
    | 'white'
    | 'orange-50'
    | 'orange-100'
    | 'orange-200'
    | 'orange-300'
    | 'orange-400'
    | 'pink-50'
    | 'pink-100'
    | 'pink-200'
    | 'pink-300'
    | 'pink-400'
    | 'blue-50'
    | 'blue-100'
    | 'blue-200'
    | 'blue-300'
    | 'blue-400'
    | 'yellow-50'
    | 'yellow-100'
    | 'yellow-200'
    | 'yellow-300'
    | 'yellow-400'
    | 'grey-50'
    | 'grey-100'
    | 'grey-200'
    | 'grey-300'
    | 'grey-400'
    | 'grey-500'
    | 'grey-600'
    | 'grey-700'
    | 'grey-800'
    | 'grey-900'
    | 'error'
    | 'success'
    | 'warning'
    | 'currentColor'
  mdVariant?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'body1'
    | 'body1-bold'
    | 'body2'
    | 'body2-bold'
    | 'body3'
    | 'body3-bold'
    | 'body4'
    | 'body4-bold'
    | 'body5'
    | 'body5-bold'
    | 'caption'
    | 'caption-bold'
    | 'caption2'
    | 'caption2-bold'
    | 'caption3'
    | 'caption3-bold'
  testId?: string
  text: string
  variant?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'title5'
    | 'body1'
    | 'body1-bold'
    | 'body2'
    | 'body2-bold'
    | 'body3'
    | 'body3-bold'
    | 'body4'
    | 'body4-bold'
    | 'body5'
    | 'body5-bold'
    | 'caption'
    | 'caption-bold'
    | 'caption2'
    | 'caption2-bold'
    | 'caption3'
    | 'caption3-bold'
  whiteSpace?: 'normal' | 'nowrap'
}

const textStyles = cva('inline-block', {
  variants: {
    variant: {
      headline1: 'text-[60px] font-clash-grotesk-bold sm:text-[60px]',
      headline2: 'text-[52px] font-clash-grotesk-bold sm:text-[52px]',
      headline3: 'text-[42px] font-clash-grotesk-bold sm:text-[42px]',
      headline4: 'text-[36px] font-clash-grotesk-bold sm:text-[36px]',
      title1: 'text-[40px] font-gilroy-bold sm:text-[40px]',
      title2: 'text-[36px] font-gilroy-bold sm:text-[36px]',
      title3: 'text-[28px] font-gilroy-bold sm:text-[28px]',
      title4: 'text-[24px] font-gilroy-bold sm:text-[24px]',
      title5: 'text-[20px] font-gilroy-bold sm:text-[20px]',
      body1: 'text-[24px] font-gilroy-regular ',
      'body1-bold': 'text-[24px] font-gilroy-bold ',
      body2: 'text-[20px] font-gilroy-regular ',
      'body2-bold': 'text-[20px] font-gilroy-bold ',
      body3: 'text-[18px] font-gilroy-regular ',
      'body3-bold': 'text-[18px] font-gilroy-bold ',
      body4: 'text-[16px] font-gilroy-regular ',
      'body4-bold': 'text-[16px] font-gilroy-bold ',
      body5: 'text-[14px] font-gilroy-regular ',
      'body5-bold': 'text-[14px] font-gilroy-bold ',
      caption: 'text-[12px] font-gilroy-regular ',
      'caption-bold': 'text-[12px] font-gilroy-bold ',
      caption2: 'text-[10px] font-gilroy-regular ',
      'caption2-bold': 'text-[10px] font-gilroy-bold ',
      caption3: 'text-[8px] font-gilroy-regular ',
      'caption3-bold': 'text-[8px] font-gilroy-bold ',
    },
    mdVariant: {
      headline1: 'font-clash-grotesk-bold sm:text-[60px]',
      headline2: 'font-clash-grotesk-bold sm:text-[52px]',
      headline3: 'font-clash-grotesk-bold sm:text-[42px]',
      headline4: 'font-clash-grotesk-bold sm:text-[36px]',
      title1: 'font-gilroy-bold sm:text-[40px]',
      title2: 'font-gilroy-bold sm:text-[36px]',
      title3: 'font-gilroy-bold sm:text-[28px]',
      title4: 'font-gilroy-bold sm:text-[24px]',
      title5: 'font-gilroy-bold sm:text-[20px]',
      body1: 'sm:text-[24px] font-gilroy-regular ',
      'body1-bold': 'sm:text-[24px] font-gilroy-bold ',
      body2: 'sm:text-[20px] font-gilroy-regular ',
      'body2-bold': 'sm:text-[20px] font-gilroy-bold ',
      body3: 'sm:text-[18px] font-gilroy-regular ',
      'body3-bold': 'sm:text-[18px] font-gilroy-bold ',
      body4: 'sm:text-[16px] font-gilroy-regular ',
      'body4-bold': 'sm:text-[16px] font-gilroy-bold ',
      body5: 'sm:text-[14px] font-gilroy-regular ',
      'body5-bold': 'sm:text-[14px] font-gilroy-bold ',
      caption: 'sm:text-[12px] font-gilroy-regular ',
      'caption-bold': 'sm:text-[12px] font-gilroy-bold ',
      caption2: 'sm:text-[10px] font-gilroy-regular ',
      'caption2-bold': 'sm:text-[10px] font-gilroy-bold ',
      caption3: 'sm:text-[8px] font-gilroy-regular ',
      'caption3-bold': 'sm:text-[8px] font-gilroy-bold ',
    },
    color: {
      black: 'text-black',
      white: 'text-white',
      'orange-50': 'text-[#FFAB01]',
      'orange-100': 'text-[#FF9401]',
      'orange-200': 'text-[#FF6601]',
      'orange-300': 'text-[#FF8958]',
      'orange-400': 'text-[#C32000]',
      'pink-50': 'text-[#EAAEAC]',
      'pink-100': 'text-[#D63158]',
      'pink-200': 'text-[#C52A3F]',
      'pink-300': 'text-[#911227]',
      'pink-400': 'text-[#320606]',
      'blue-50': 'text-[#A2F0E6]',
      'blue-100': 'text-[#5DF7F7]',
      'blue-200': 'text-[#1DE2FD]',
      'blue-300': 'text-[#20A8C5]',
      'blue-400': 'text-[#085682]',
      'yellow-50': 'text-[#FFF1C0]',
      'yellow-100': 'text-[#FFE68D]',
      'yellow-200': 'text-[#FFE500]',
      'yellow-300': 'text-[#FFC700]',
      'yellow-400': 'text-[#E0A200]',
      'grey-50': 'text-[#F7F8F9]',
      'grey-100': 'text-[#EFF1F3]',
      'grey-200': 'text-[#D9DDE1]',
      'grey-300': 'text-[#B3BAC3]',
      'grey-400': 'text-[#8996A2]',
      'grey-500': 'text-[#687787]',
      'grey-600': 'text-[#4E5D6B]',
      'grey-700': 'text-[#56636C]',
      'grey-800': 'text-[#1A2A34]',
      'grey-900': 'text-[#142129]',
      error: 'text-[#E20303]',
      success: 'text-[#009143]',
      warning: 'text-[#DB7600]',
      currentColor: 'text-current',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    whiteSpace: {
      normal: 'normal',
      nowrap: 'whitespace-nowrap',
    },
  },
})

export function Text({
  text,
  variant = 'body1',
  color = 'black',
  align = 'left',
  mdVariant,
  whiteSpace = 'normal',
}: Readonly<TTextProps>): ReactElement {
  return (
    <span
      className={twMerge(
        textStyles({ variant, mdVariant, color, align, whiteSpace }),
      )}
    >
      {text}
    </span>
  )
}
