import { memo, type ReactElement } from 'react'

import { Text } from '~/components/atoms/Text'

type TFormFieldLabelProps = {
  id: string
  isRequired?: boolean
  label: string
}

// TODO: Return type is not enforced inside memo calls
export const FormFieldLabel = memo(
  ({ id, isRequired, label }: TFormFieldLabelProps): ReactElement => {
    return (
      <label htmlFor={id}>
        <Text
          text={`${label}${isRequired ? '' : ' (optional)'}`}
          variant="body3-bold"
        />
      </label>
    )
  },
)
