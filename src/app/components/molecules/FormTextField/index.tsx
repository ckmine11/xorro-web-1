import {
  type KeyboardEvent,
  type ReactElement,
  useCallback,
  useContext,
  useId,
} from 'react'
import {
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
  type UseFormRegisterReturn,
} from 'react-hook-form'

import { TextInput, type TTextInputProps } from '~/components/atoms/TextInput'
import { FormSubmitContext } from '~/components/organisms/forms/Form'
import { FormFieldTemplate } from '~/components/templates/FormFieldTemplate'

interface ITextFieldProps<T extends FieldValues>
  extends Omit<UseControllerProps<T>, 'name'> {
  autoFocus?: boolean
  field: UseFormRegisterReturn<string>
  id?: string
  isOptional?: boolean
  label: string
  testId?: string
  textInputProps?: Omit<TTextInputProps, 'onChange' | 'onBlur'>
}

export function TextField<T extends FieldValues>({
  label,
  field: registerdField,
  isOptional,
  testId,
  autoFocus,
  textInputProps,
}: Readonly<ITextFieldProps<T>>): ReactElement {
  const { submitHandler } = useContext(FormSubmitContext)
  const formContext = useFormContext()
  const { control, formState } = formContext
  const id = `textInput-${useId()}`

  const { field } = useController({
    name: registerdField.name,
    control,
  })

  const composedId = field.name ? `textInput-${field.name}` : id
  const composedTestId = testId ? `textInput-${testId}` : id

  const handleOnChange = useCallback(
    (value: string) => {
      field.onChange(value === '' ? undefined : value.trim())
    },
    [field],
  )

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        submitHandler()
      }
    },
    [submitHandler],
  )

  return (
    <FormFieldTemplate
      id={composedId}
      name={field.name}
      label={label}
      isRequired={!isOptional}
    >
      <TextInput
        id={composedId}
        autoFocus={autoFocus}
        testId={composedTestId}
        name={field.name}
        type={textInputProps?.type}
        placeholder={textInputProps?.placeholder}
        onChange={handleOnChange}
        onBlur={field.onBlur}
        initialValue={field.value}
        hasError={!!formState.errors[field.name]}
        onKeyUp={handleKeyUp}
      />
    </FormFieldTemplate>
  )
}
