import { type ReactElement, type ReactNode } from 'react'

import {
  FancyBackground,
  type TFancyBackgroundProps,
} from '~/components/atoms/FancyBackground'

type THalfAndHalfLayoutProps = {
  leftComponent: ReactNode
  rightComponent: ReactNode
  theme: TFancyBackgroundProps['theme']
}

export function HalfAndHalfLayout({
  leftComponent,
  rightComponent,
  theme,
}: THalfAndHalfLayoutProps): ReactElement {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 sm:flex-row">
      <div className="relative sm:flex sm:flex-1 sm:flex-col">
        <div className="hidden sm:flex">
          <FancyBackground theme={theme} />
        </div>
        <div className="relative flex flex-1 sm:items-center sm:justify-center">
          <p className="text-orange-500">{leftComponent}</p>
        </div>
      </div>
      <div className="relative flex flex-1 sm:items-center sm:justify-center">
        {rightComponent}
      </div>
    </div>
  )
}
