import { z } from 'zod'

import { zodValidationHelpers } from '~/components/organisms/forms/validations'

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: zodValidationHelpers.email,
  password: zodValidationHelpers.password,
  termsAndConditions: zodValidationHelpers.checkbox,
})

export type TSignUpFormSchema = z.infer<typeof schema>

// Unfortunately, we need to export the shape separately to find required fields
// https://github.com/colinhacks/zod/issues/2056
const shape = schema._def.shape()

export const SignUpFormSchema = {
  schema: schema,
  shape: shape,
}
