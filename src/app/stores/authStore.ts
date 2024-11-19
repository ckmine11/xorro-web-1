import { Exome } from 'exome'

import { type TAuth0User } from '~/types/entities/auth0User'

export class AuthStore extends Exome {
  isAuthenticated: boolean = false
  accessToken: string | null = null
  idToken: string | null = null
  user: TAuth0User | undefined

  // Action to set authentication status and tokens
  public setAuth({
    isAuthenticated,
    accessToken,
    idToken,
    user,
  }: {
    accessToken?: string | null
    idToken?: string | null
    isAuthenticated?: boolean
    user?: TAuth0User
  }): void {
    this.isAuthenticated = isAuthenticated || false
    this.accessToken = accessToken || null
    this.idToken = idToken || null
    this.user = user ?? undefined
  }

  // Action to reset authentication state (on logout)
  public resetAuth(): void {
    this.isAuthenticated = false
    this.accessToken = null
    this.idToken = null
    this.user = undefined // Auth0 user type is not nullable, using undefined instead
  }
}
