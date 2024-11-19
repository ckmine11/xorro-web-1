import clsx from 'clsx'
import { type ReactElement } from 'react'

import { Text } from '~/components/atoms/Text'

type TTabProps = {
  isActive?: boolean
  onPress: () => void
  text: string
}

export function Tab({
  isActive = false,
  onPress,
  text,
}: TTabProps): ReactElement {
  return (
    <button
      data-testid={`tab-${text}`}
      key={text}
      onClick={() => {
        return onPress()
      }}
      className={clsx('rounded-full border px-6 py-3', {
        'border-[#8C96A2] bg-white': !isActive,
        'border-[#FF9401] bg-[#FF9401]': isActive,
      })}
    >
      <Text
        variant="body4-bold"
        text={text}
        color={isActive ? 'white' : 'black'}
        whiteSpace="nowrap"
      />
    </button>
  )
}
