import { type ReactElement } from 'react'
import { type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'

import { Text } from '~/components/atoms/Text'
import { TextLink } from '~/components/atoms/TextLink'
import { CheckboxField } from '~/components/molecules/CheckboxField'
import { TextField } from '~/components/molecules/FormTextField'
import { Form } from '~/components/organisms/forms/Form'
import { FormFieldsTemplate } from '~/components/templates/FormFieldsTemplate'

import { ExampleFormSchema, type TExampleFormSchema } from './schema'

// TODO: Unit test the form https://react-hook-form.com/advanced-usage#TestingForm
export function ExampleForm(): ReactElement {
  const onSubmit: SubmitHandler<TExampleFormSchema> = (data) => {
    console.log(data)
  }

  const onErrors: SubmitErrorHandler<TExampleFormSchema> = (errors) => {
    console.warn(errors)
  }

  return (
    <Form
      schema={ExampleFormSchema.schema}
      onSubmit={onSubmit}
      onErrors={onErrors}
      submitProps={{
        text: 'Create your Account',
      }}
      render={({ register }) => {
        return (
          <FormFieldsTemplate>
            <TextField
              label="Email"
              field={register('email')}
              isOptional={ExampleFormSchema.shape.email.isOptional()}
              textInputProps={{
                placeholder: 'user@example.com',
              }}
            />
            <TextField
              field={register('password')}
              isOptional={ExampleFormSchema.shape.password.isOptional()}
              label="Password"
              textInputProps={{
                type: 'password',
              }}
            />
            <TextField
              field={register('passwordConfirmation')}
              isOptional={ExampleFormSchema.shape.passwordConfirmation.isOptional()}
              label="Password confirmation"
              textInputProps={{
                type: 'password',
              }}
            />
            <div className="mt-4">
              <CheckboxField
                field={register('termsAndConditions')}
                renderLabel={({ textColorVariant, isDisabled }) => {
                  return (
                    <>
                      <Text
                        text="I certify that I am 18 years of age or older, I agree to the"
                        variant="body2"
                        color={textColorVariant}
                      />{' '}
                      <TextLink
                        path="/"
                        text="User Agreement"
                        textProps={{
                          variant: 'body2-bold',
                          color: isDisabled ? textColorVariant : undefined,
                        }}
                      />
                      <Text
                        text=", and I have read the"
                        variant="body2"
                        color={textColorVariant}
                      />{' '}
                      <TextLink
                        path="/"
                        text="Privacy Policy"
                        textProps={{
                          variant: 'body2-bold',
                          color: isDisabled ? textColorVariant : undefined,
                        }}
                      />
                      <Text text="." variant="body2" color={textColorVariant} />
                    </>
                  )
                }}
              />
            </div>
          </FormFieldsTemplate>
        )
      }}
    />
  )
}
