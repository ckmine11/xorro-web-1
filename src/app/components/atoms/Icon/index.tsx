import { type FC, type ReactElement, type SVGProps } from 'react'

import { default as BellIcon } from './bell.svg'
import { default as CheckboxCircleIcon } from './checkboxCircle.svg'
import { default as ChevronDownCircleIcon } from './chevronDownCircle.svg'
import { default as ChevronLeftIcon } from './chevronLeft.svg'
import { default as ChevronRightIcon } from './chevronRight.svg'
import { default as DownArrow } from './downArrow.svg'
import { default as HeartIcon } from './heart.svg'
import { default as HeartFilledIcon } from './heartFilled.svg'
import { default as LineChartIcon } from './lineChart.svg'
import { default as LogoIcon } from './logo.svg'
import { default as MagnifyingGlassIcon } from './magnifyingGlass.svg'
import { default as RocketIcon } from './rocket.svg'
import { default as SpinnerIcon } from './spinner.svg'
import { default as UserIcon } from './user.svg'
import { default as WalletIcon } from './wallet.svg'

type TSVGComponent = FC<SVGProps<SVGSVGElement>>

type TIconMap = {
  bell: TSVGComponent
  checkboxCircle: TSVGComponent
  chevronDownCircle: TSVGComponent
  chevronLeft: TSVGComponent
  chevronRight: TSVGComponent
  downArrow: TSVGComponent
  heart: TSVGComponent
  heartFilled: TSVGComponent
  lineChart: TSVGComponent
  logo: TSVGComponent
  magnifyingGlass: TSVGComponent
  rocket: TSVGComponent
  spinner: TSVGComponent
  user: TSVGComponent
  wallet: TSVGComponent
}

export const iconMap: TIconMap = {
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  logo: LogoIcon,
  chevronDownCircle: ChevronDownCircleIcon,
  downArrow: DownArrow,
  spinner: SpinnerIcon,
  heart: HeartIcon,
  heartFilled: HeartFilledIcon,
  rocket: RocketIcon,
  wallet: WalletIcon,
  lineChart: LineChartIcon,
  magnifyingGlass: MagnifyingGlassIcon,
  bell: BellIcon,
  user: UserIcon,
  checkboxCircle: CheckboxCircleIcon,
}

export type TIconNames = keyof TIconMap

interface IIconCommonProps {
  fill?: string
  name: TIconNames
  stroke?: string
}

interface IIconWithSize extends IIconCommonProps {
  height?: never
  size?: number
  width?: never
}

interface IIconWithWidthAndHeight extends IIconCommonProps {
  height?: number
  size?: never
  width?: number
}

export type TIconProps = IIconWithSize | IIconWithWidthAndHeight

export function Icon({
  name,
  stroke,
  fill,
  size,
  width = 16,
  height = 16,
}: TIconProps): ReactElement {
  const IconComponent = iconMap[name]

  return (
    <div className="inline-block">
      <IconComponent
        stroke={stroke}
        width={size ?? width}
        fill={fill}
        height={size ?? height}
      />
    </div>
  )
}
