import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, type ReactElement } from 'react'
import {
  type FieldErrors,
  type FieldValues,
  FormProvider,
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
  type UseFormRegister,
} from 'react-hook-form'
import { type z } from 'zod'

import { Button, type IButtonProps } from '~/components/atoms/Button'
import { isDevelopment } from '~/utils/platform'

type TFormSubmitContext = {
  submitHandler: () => void
}

export const FormSubmitContext = createContext<TFormSubmitContext>({
  submitHandler: () => {},
})

export function Form<T extends FieldValues>({
  schema,
  onSubmit,
  onErrors,
  submitProps,
  render,
}: {
  onErrors: (errors: FieldErrors<T>) => void
  onSubmit: (data: T) => void
  render: (props: { register: UseFormRegister<T> }) => ReactElement
  schema: z.ZodType<T, z.ZodTypeDef, T>
  submitProps: Pick<IButtonProps, 'text'>
}): ReactElement {
  const formMethods = useForm<T>({
    resolver: zodResolver(schema),
  })

  const _onSubmit: SubmitHandler<T> = (data) => {
    console.log(data)
    onSubmit(data)

    return
  }

  const _onErrors: SubmitErrorHandler<T> = (errors) => {
    console.warn(errors)
    onErrors(errors)

    return
  }

  const submitHandler = formMethods.handleSubmit(_onSubmit, _onErrors)

  return (
    <FormProvider {...formMethods}>
      <FormSubmitContext.Provider
        value={{
          submitHandler: formMethods.handleSubmit(_onSubmit, _onErrors),
        }}
      >
        {render({ register: formMethods.register })}

        <div className="mt-6">
          <Button
            type="submit"
            text={submitProps.text}
            onPress={submitHandler}
          />
        </div>
      </FormSubmitContext.Provider>

      {isDevelopment && <DevTool control={formMethods.control} />}
    </FormProvider>
  )
}
