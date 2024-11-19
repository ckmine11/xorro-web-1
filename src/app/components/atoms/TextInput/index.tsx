import clsx from 'clsx'
import {
  type ChangeEvent,
  type KeyboardEvent,
  type ReactElement,
  useCallback,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon, type TIconNames } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'

export type TTextInputProps = {
  autoFocus?: boolean
  hasError?: boolean
  helperText?: string
  iconName?: TIconNames
  id?: string
  initialValue?: string
  name?: string
  onBlur?: () => void
  onChange?: (value: string) => void
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  testId?: string
  type?: 'text' | 'password' | 'email' | 'number'
}

export function TextInput({
  placeholder,
  initialValue,
  testId,
  name,
  onChange,
  onKeyUp,
  iconName,
  hasError,
  id,
  type = 'text',
  autoFocus,
  helperText,
}: TTextInputProps): ReactElement {
  const [value, setValue] = useState(initialValue)

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
      onChange?.(event.target.value)
    },
    [onChange],
  )

  return (
    <div>
      <div className="relative flex items-start">
        <input
          id={id}
          data-testid={testId}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={twMerge(
            clsx(
              'h-[52px] w-full rounded-lg border bg-[#F7F8F9] px-4 text-[#1A2A34] focus:outline-none focus:ring-0',
              'placeholder:text-[16px] placeholder:text-[#56636C] sm:placeholder:text-[18px]',
              'border-transparent focus:border-[#0DCDC1]', // Default border styles
              {
                'border-[#E20303] focus:border-[#E20303]': hasError, // Applies only if `hasError` is true
              },
            ),
          )}
          onChange={handleOnChange}
          onKeyUp={onKeyUp}
          autoFocus={autoFocus}
        />
        {iconName && (
          <div
            className={clsx(
              'absolute right-4 top-1/2 flex w-6 -translate-y-1/2 transform items-center justify-center',
              {
                'cursor-pointer': !!onChange,
              },
            )}
          >
            <Icon name={iconName} size={24} />
          </div>
        )}
      </div>
      {helperText && (
        <div className="mt-2">
          <Text text={helperText} variant="body5" color="grey-700" />
        </div>
      )}
    </div>
  )
}
