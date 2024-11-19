import { type PropsWithChildren, type ReactElement } from 'react'

import { FormFieldError } from '~/components/atoms/FormFieldError'
import { FormFieldLabel } from '~/components/atoms/FormFieldLabel'

export function FormFieldTemplate({
  id,
  name,
  label,
  children,
  isRequired,
}: PropsWithChildren<{
  id: string
  isRequired?: boolean
  label?: string
  name: string
}>): ReactElement {
  return (
    <div className="grid gap-1">
      {label && (
        <FormFieldLabel id={id} label={label} isRequired={isRequired} />
      )}
      <div>{children}</div>
      <FormFieldError name={name} />
    </div>
  )
}
