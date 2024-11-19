import { type ReactElement, useCallback, useId, useState } from 'react'

import { Text, type TTextProps } from '~/components/atoms/Text'

interface ICheckboxCommonProps {
  isDisabled?: boolean
  isInitiallyChecked?: boolean
  name?: string
  onChange?: (isChecked: boolean) => void
  testId?: string
}

interface ICheckboxWithLabel extends ICheckboxCommonProps {
  label: string
  renderLabel?: never
}

interface ICheckboxWithCustomLabel extends ICheckboxCommonProps {
  label?: never
  renderLabel?: (props: {
    isDisabled?: boolean
    textColorVariant: TTextProps['color']
  }) => ReactElement
}

export type TCheckboxProps = ICheckboxWithLabel | ICheckboxWithCustomLabel

export function Checkbox({
  label,
  isInitiallyChecked,
  testId,
  name,
  onChange,
  isDisabled,
  renderLabel,
}: TCheckboxProps): ReactElement {
  const [isChecked, setIsChecked] = useState(isInitiallyChecked)
  const id = `checkbox-${useId()}`
  const composedName = name ? `checkbox-${name}` : id
  const composedTestId = testId ? `checkbox-${testId}` : id

  const handleOnChange = useCallback(() => {
    setIsChecked(!isChecked)
    onChange?.(!isChecked)
  }, [isChecked, onChange])

  const textColorVariant = isDisabled ? 'grey-400' : 'grey-700'

  return (
    <div className="flex">
      <input
        id={id}
        data-testid={composedTestId}
        name={composedName}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        className="peer mt-[3px] h-[18px] w-[18px] rounded border-[#8C96A2] text-[#FF6601] focus:ring-[#FF6601] disabled:cursor-not-allowed disabled:border-[#CCCCCC] disabled:text-[#FFAB01] disabled:checked:border-[#FFAB01]"
        onChange={handleOnChange}
      />
      <label
        htmlFor={id}
        className="pl-2 text-[#344450] peer-disabled:cursor-not-allowed peer-disabled:text-[#8C96A2]"
      >
        {renderLabel?.({ textColorVariant, isDisabled })}
        {label && (
          <Text text={label} variant="body4" color={textColorVariant} />
        )}
      </label>
    </div>
  )
}
