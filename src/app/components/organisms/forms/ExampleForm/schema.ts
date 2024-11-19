import { z } from 'zod'

import { zodValidationHelpers } from '~/components/organisms/forms/validations'

const schema = z.object({
  email: zodValidationHelpers.email.optional(),
  password: zodValidationHelpers.password,
  passwordConfirmation: z.string(),
  termsAndConditions: zodValidationHelpers.checkbox,
})

export type TExampleFormSchema = z.infer<typeof schema>

// Unfortunately, we need to export the shape separately to find required fields
// https://github.com/colinhacks/zod/issues/2056
const shape = schema._def.shape()

export const ExampleFormSchema = {
  schema: schema,
  shape: shape,
}
