import clsx from 'clsx'
import { type ReactElement } from 'react'

import { Icon } from '~/components/atoms/Icon'

type TSpinnerProps = {
  size?: 'small' | 'large'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export function Spinner({
  size = 'small',
  variant = 'primary',
}: TSpinnerProps): ReactElement {
  const isSmall = size === 'small'

  const variantColors: Record<string, string> = {
    primary: '#C32000',
    secondary: '#FFFFFF',
    tertiary: '#344450',
  }

  return (
    <div
      className={clsx(
        'relative inline-block origin-center animate-[spin_600ms_linear_infinite]',
        {
          'h-6 w-6': isSmall,
          'h-16 w-16': !isSmall,
        },
      )}
    >
      <span className="absolute left-0 top-0">
        <Icon
          name="spinner"
          size={isSmall ? 24 : 64}
          fill={variantColors[variant]}
        />
      </span>
    </div>
  )
}
