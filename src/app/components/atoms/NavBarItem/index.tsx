import clsx from 'clsx'
import Link from 'next/link'
import { type ReactElement } from 'react'

import { Icon, type TIconNames } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'

export function NavBarItem({
  text,
  href,
  iconName,
  isSelected,
}: {
  href: string
  iconName: TIconNames
  isSelected?: boolean
  text: string
}): ReactElement {
  return (
    <div className="flex-none">
      <Link href={href}>
        <div
          className={clsx('flex items-center gap-2 p-2', {
            'text-[#FF8958] hover:text-[#FA4F33]': isSelected,
            'text-white hover:text-[#FA4F33]': !isSelected,
          })}
        >
          <Text text={text} color="currentColor" variant="body4-bold" />
          <Icon name={iconName} size={24} fill="currentColor" />
        </div>
      </Link>
    </div>
  )
}
