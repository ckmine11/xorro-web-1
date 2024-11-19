import { z } from 'zod'

import { formValidationMessages } from './messages'

const checkboxValidation = z.boolean().refine(
  (val) => {
    return val === true
  },
  {
    message: formValidationMessages.common.required,
  },
)

const passwordValidation = z
  .string()
  .min(8, { message: formValidationMessages.ExampleForm.password.min })

const emailValidation = z
  .string()
  .email({ message: formValidationMessages.ExampleForm.email.invalid })

export const zodValidationHelpers = {
  checkbox: checkboxValidation,
  password: passwordValidation,
  email: emailValidation,
}
