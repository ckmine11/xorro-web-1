import { useAuth0 } from '@auth0/auth0-react'
import { useStore } from 'exome/react'
import { $path } from 'next-typesafe-url'
import { memo } from 'react'
import React, { type FC, type ReactElement } from 'react'

import { Button } from '~/components/atoms/Button'
import { Icon } from '~/components/atoms/Icon'
import { Spinner } from '~/components/atoms/Spinner'
import { Text } from '~/components/atoms/Text'
import { PageContent } from '~/components/layout/PageContent'
import { PageLayout } from '~/components/layout/PageLayout'
import { authStore } from '~/stores'

const LoggedOutPageSkeleton = memo((): ReactElement => {
  const { loginWithRedirect } = useAuth0()

  return (
    <PageLayout>
      <PageContent>
        <Text text="Oops" align="center" variant="headline3" />
        <Text
          text="This page is only available for logged in users."
          align="center"
        />
        <div className="mt-10 grid w-full gap-4 sm:mt-12 sm:flex sm:flex-row sm:gap-8">
          <Button
            text="Log in to your Account"
            variant="tertiary"
            onPress={() => {
              return loginWithRedirect({
                appState: {
                  returnTo: $path({ route: '/campaigns' }),
                },
              })
            }}
          />
          <Button
            text="Sign up for Free"
            onPress={() => {
              return loginWithRedirect({
                authorizationParams: {
                  screen_hint: 'signup',
                },
                appState: {
                  accountType: 'investor',
                  returnTo: $path({ route: '/campaigns' }),
                },
              })
            }}
          />
        </div>
      </PageContent>
    </PageLayout>
  )
})

const FullScreenLoader = memo((): ReactElement => {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-8 bg-black">
      <Icon name="logo" size={128} />
      <Spinner size="large" variant="secondary" />
    </div>
  )
})

export function privateRoute<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): FC<P> {
  function ProtectedComponent(props: P): ReactElement {
    const { isLoading, error } = useAuth0()
    const { isAuthenticated } = useStore(authStore)

    if (isLoading) {
      return <FullScreenLoader />
    }

    if (error) {
      return <div>Oops... {error.message}</div>
    }

    if (!isAuthenticated) {
      return <LoggedOutPageSkeleton />
    }

    return <WrappedComponent {...props} />
  }

  return ProtectedComponent
}
