import { type ReactElement, useId } from 'react'
import {
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
  type UseFormRegisterReturn,
} from 'react-hook-form'

import { Checkbox, type TCheckboxProps } from '~/components/atoms/Checkbox'
import { FormFieldTemplate } from '~/components/templates/FormFieldTemplate'

interface ICheckboxFieldCommonProps<T extends FieldValues>
  extends Omit<UseControllerProps<T>, 'name'> {
  field: UseFormRegisterReturn<string>
  testId?: string
}

interface ICheckboxFieldWithLabel<T extends FieldValues>
  extends ICheckboxFieldCommonProps<T> {
  label: string
  renderLabel?: never
}

interface ICheckboxFieldWithCustomLabel<T extends FieldValues>
  extends ICheckboxFieldCommonProps<T> {
  label?: never
  renderLabel?: TCheckboxProps['renderLabel']
}

export type TCheckboxFieldProps<T extends FieldValues> =
  | ICheckboxFieldWithLabel<T>
  | ICheckboxFieldWithCustomLabel<T>

export function CheckboxField<T extends FieldValues>({
  label,
  field: registerdField,
  renderLabel,
  testId,
}: Readonly<TCheckboxFieldProps<T>>): ReactElement {
  const formContext = useFormContext()
  const { control } = formContext

  const id = `checkbox-${useId()}`

  const { field } = useController({
    name: registerdField.name,
    control,
  })

  const composedId = field.name ? `checkbox-${field.name}` : id
  const composedTestId = testId ? `checkbox-${testId}` : id

  return (
    <FormFieldTemplate id={composedId} name={field.name}>
      {renderLabel && (
        <Checkbox
          testId={composedTestId}
          renderLabel={renderLabel}
          onChange={field.onChange}
          isInitiallyChecked={field.value}
        />
      )}
      {label && (
        <Checkbox
          testId={composedTestId}
          label={label}
          onChange={field.onChange}
          isInitiallyChecked={field.value}
        />
      )}
    </FormFieldTemplate>
  )
}
