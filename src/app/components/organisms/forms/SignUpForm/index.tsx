import { type ReactElement } from 'react'
import { type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'

import { Text } from '~/components/atoms/Text'
import { TextLink } from '~/components/atoms/TextLink'
import { CheckboxField } from '~/components/molecules/CheckboxField'
import { TextField } from '~/components/molecules/FormTextField'
import { Form } from '~/components/organisms/forms/Form'
import { FormFieldsTemplate } from '~/components/templates/FormFieldsTemplate'

import { SignUpFormSchema, type TSignUpFormSchema } from './schema'

// TODO: Unit test the form https://react-hook-form.com/advanced-usage#TestingForm
export function SignUpForm(): ReactElement {
  const onSubmit: SubmitHandler<TSignUpFormSchema> = (data) => {
    console.log(data)
  }

  const onErrors: SubmitErrorHandler<TSignUpFormSchema> = (errors) => {
    console.warn(errors)
  }

  return (
    <Form
      schema={SignUpFormSchema.schema}
      onSubmit={onSubmit}
      onErrors={onErrors}
      submitProps={{ text: 'Create account' }}
      render={({ register }) => {
        return (
          <FormFieldsTemplate>
            <TextField
              label="First name"
              field={register('firstName')}
              autoFocus
            />
            <TextField label="Last name" field={register('lastName')} />
            <TextField label="Email" field={register('email')} />
            <TextField field={register('password')} label="Password" />
            <div className="mt-6">
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
