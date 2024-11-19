import { type ReactElement } from 'react'

export function FormFieldsTemplate({
  children,
}: {
  children: ReactElement[]
}): ReactElement {
  return <div className="grid gap-6">{children}</div>
}
