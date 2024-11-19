import clsx from 'clsx'
import { cva } from 'cva'
import { type ReactElement, useCallback, useState } from 'react'

export type TSwitchProps = {
  isDisabled?: boolean
  isInitiallyChecked?: boolean
  onChange?: (isChecked: boolean) => void
  testId?: string
}

const switchStyles = cva(
  'relative inline-flex w-[43px] flex-shrink-0 rounded-full border-[4px] border-transparent transition-colors duration-150 ease-in-out focus:outline-none',
  {
    variants: {
      isDisabled: {
        true: 'cursor-not-allowed',
        false:
          'cursor-pointer focus:ring-2 focus:ring-[#FA4F33] focus:ring-offset-2',
      },
      isChecked: {
        true: 'bg-[#FA4F33]',
        false: 'bg-[#BAC2CA]',
      },
    },
    compoundVariants: [
      {
        isDisabled: true,
        isChecked: true,
        class: 'bg-[#FADBD3]',
      },
      {
        isDisabled: true,
        isChecked: false,
        class: 'bg-[#EFF1F2]',
      },
    ],
  },
)

export function Switch({
  isInitiallyChecked,
  testId,
  onChange,
  isDisabled,
}: TSwitchProps): ReactElement {
  const [isChecked, setIsChecked] = useState(!!isInitiallyChecked)

  const handleOnChange = useCallback(() => {
    if (isDisabled) {
      return
    }
    setIsChecked(!isChecked)
    onChange?.(!isChecked)
  }, [isChecked, onChange, isDisabled])

  return (
    <button
      data-testid={`switch-${testId}`}
      type="button"
      className={switchStyles({ isDisabled, isChecked })}
      onClick={handleOnChange}
    >
      <span
        className={clsx(
          'pointer-events-none inline-block h-[19px] w-[19px] transform rounded-full bg-white transition duration-150 ease-in-out',
          {
            'translate-x-[calc(43px-19px-4px-4px)]': isChecked,
            'translate-x-0': !isChecked,
          },
        )}
      />
    </button>
  )
}
