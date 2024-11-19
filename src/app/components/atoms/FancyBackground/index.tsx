import clsx from 'clsx'
import { type ReactElement } from 'react'

export type TFancyBackgroundProps = {
  theme: 'blue' | 'teal' | 'yellow'
}

export function FancyBackground({
  theme,
}: TFancyBackgroundProps): ReactElement {
  return (
    <div className="absolute z-0 flex h-[100%] w-full overflow-hidden bg-black">
      <div
        className={clsx(
          'absolute right-0 top-0 h-[100vw] w-[150vw] max-w-[500px] -translate-y-[80%] translate-x-[50%] rounded-full blur-[100px] sm:w-[100vw] sm:translate-x-[50%] sm:blur-[400px]',
          {
            'bg-[#1970F2]': theme === 'blue',
            'bg-[#0DCDC1]': theme === 'teal',
            'bg-[#FA4F33]': theme === 'yellow',
          },
        )}
      />
      <div
        className={clsx(
          'absolute bottom-0 left-0 h-[100vw] w-[150vw] max-w-[500px] -translate-x-[50%] translate-y-[80%] rounded-full blur-[100px] sm:w-[100vw] sm:-translate-x-[50%] sm:blur-[400px]',
          {
            'bg-[#FA4F33]': theme === 'blue' || theme === 'teal',
            'bg-[#FFB700]': theme === 'yellow',
          },
        )}
      />
      <div className='absolute inset-0 z-10 bg-[url("/media/images/bg-grain2.png")]' />
    </div>
  )
}
