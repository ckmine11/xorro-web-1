import { useAuth0 } from '@auth0/auth0-react'
import { type PropsWithChildren, type ReactElement, useEffect } from 'react'

import { authStore } from '~/stores'

export function AuthTokenManager({
  children,
}: PropsWithChildren): ReactElement {
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0()

  useEffect(() => {
    const storeAuthTokens = async (): Promise<void> => {
      if (isAuthenticated) {
        try {
          // const accessToken = await getAccessTokenSilently()
          const idToken = await getIdTokenClaims()
          console.log({ idToken: idToken?.__raw })

          authStore.setAuth({
            isAuthenticated,
            idToken: idToken?.__raw,
            user,
          })
        } catch (error) {
          console.error('Error fetching tokens:', error)
        }
      }
    }

    storeAuthTokens()
  })

  return <>{children}</>
}
