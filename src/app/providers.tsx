'use client'

import '~/stores'

import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { addMiddleware } from 'exome'
import { unstableExomeDevtools } from 'exome/devtools'
import { useRouter } from 'next/navigation'
import { $path } from 'next-typesafe-url'
import { type ReactElement, type ReactNode } from 'react'

import { apiClient } from '~/api/client'
import { AuthTokenManager } from '~/stores/AuthTokenManager'

addMiddleware(
  unstableExomeDevtools({
    name: 'Xorro State',
  }),
)

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  const rootLoggedInPath = `${process.env.NEXT_PUBLIC_HOST}${$path({ route: '/authentication/callback' })}`
  const { replace } = useRouter()

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: rootLoggedInPath,
      }}
      onRedirectCallback={(appState) => {
        replace(
          appState?.returnTo ? appState.returnTo : window.location.pathname,
        )
      }}
    >
      <AuthTokenManager>
        <QueryClientProvider client={new QueryClient()}>
          <apiClient.ReactQueryProvider>
            {children}
            <ReactQueryDevtools />
          </apiClient.ReactQueryProvider>
        </QueryClientProvider>
      </AuthTokenManager>
    </Auth0Provider>
  )
}
