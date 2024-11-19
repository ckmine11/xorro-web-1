import { type ReactElement } from 'react'
import {
  type FieldValues,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form'

import { Text } from '~/components/atoms/Text'

interface IFormFieldErrorProps<T extends FieldValues>
  extends UseControllerProps<T> {
  // error: FieldError | undefined
  // label: string
}

export function FormFieldError<T extends FieldValues>({
  name,
}: IFormFieldErrorProps<T>): ReactElement {
  const formContext = useFormContext()
  const { errors } = formContext.formState
  const error = errors[name]

  return (
    error && (
      <Text text={error.message as string} variant="caption" color="error" />
    )
  )
}
