import clsx from 'clsx'
import { type ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from '~/components/atoms/Icon'

type TAvatarProps = {
  imageUrl?: string
  size?: 'extra-small' | 'small' | 'medium' | 'big'
}

export function Avatar({
  imageUrl,
  size = 'medium',
}: TAvatarProps): ReactElement {
  const sizeClasses = clsx({
    'w-6 h-6': size === 'extra-small',
    'w-8 h-8': size === 'small',
    'w-14 h-14': size === 'medium',
    'w-[72px] h-[72px]': size === 'big',
  })

  const iconSizes = {
    'extra-small': 16,
    small: 20,
    medium: 36,
    big: 44,
  }

  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded-full bg-[#EFF1F2]',
        sizeClasses,
      )}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          className={twMerge('rounded-full object-cover', sizeClasses)}
        />
      ) : (
        <Icon name="user" size={iconSizes[size]} fill="#001018" />
      )}
    </div>
  )
}
