'use client'

import { useStore } from 'exome/react'
import { withParamValidation } from 'next-typesafe-url/app/hoc'
import { type ReactElement } from 'react'

import { type TUser } from '~/api/types/user'
import { Button } from '~/components/atoms/Button'
import { Icon } from '~/components/atoms/Icon'
import { Number } from '~/components/atoms/Number'
import { Text } from '~/components/atoms/Text'
import { DynamicDataTest } from '~/components/DynamicDataTest'
import { ExampleForm } from '~/components/organisms/forms/ExampleForm'
import { PostsList } from '~/components/organisms/PostsList'
import { privateRoute } from '~/components/routes/privateRoute'
import { useUserDecorator } from '~/decorators/user'
import { postsStore } from '~/stores'

import { Route, type TPageProps } from './routeType'

const data: TUser = {
  name: 'John Doe',
  dateOfBirth: '1990-01-01',
  role: 'admin',
}

// Calling `addPost` from `postsStore` would trigger a re-render of `PostsList`,
// so we have to move store actions to a separate component to avoid that.
function AddButton(): ReactElement {
  const { addPost } = useStore(postsStore)
  const { decoratedUser } = useUserDecorator(data)

  return (
    <Button
      text="Add post"
      onPress={() => {
        addPost({ title: 'test', content: 'my content' })
      }}
      isDisabled={!decoratedUser.canEdit()}
    />
  )
}

function Page({ routeParams }: Readonly<TPageProps>): ReactElement {
  const { decoratedUser } = useUserDecorator(data)

  return (
    <div className="p-16">
      <Icon name="chevronLeft" fill="#f6f" />
      <DynamicDataTest />
      <p>Age: {decoratedUser.getAge()}</p>
      <AddButton />
      Looking at profile {routeParams.id}
      <PostsList />
      <ExampleForm />
      <Text text="Hellow world" variant="body1-bold" color="orange-50" />
      <Number text="1000" />
    </div>
  )
}

export default withParamValidation(privateRoute(Page), Route)
