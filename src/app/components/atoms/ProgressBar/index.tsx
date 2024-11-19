import clsx from 'clsx'
import { type ReactElement } from 'react'

import { Text } from '~/components/atoms/Text'

export type TProgressBarProps = {
  label?: string
  max?: number
  size?: 'small' | 'medium' | 'large'
  testId?: string
  value: number
}

export function ProgressBar({
  testId,
  value,
  max = 100,
  size = 'small',
  label,
}: TProgressBarProps): ReactElement {
  const percentage = Math.min(Math.max(0, Math.round((value / max) * 100)), 100)
  const progressLabel = label?.trim()

  return (
    <div data-testid={`progress-bar-${testId}`} className="w-full">
      {progressLabel && (
        <div className="mb-1 flex items-center justify-between">
          <Text text={progressLabel} variant="body5" />
          <Text text={`${percentage}%`} variant="body4-bold" />
        </div>
      )}
      <div
        className={clsx('w-full rounded-full bg-[#EFF1F2]', {
          'h-1': size === 'small',
          'h-2': size === 'medium',
          'h-4': size === 'large',
        })}
      >
        <div
          className="h-full rounded-full bg-[#FA4F33]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
