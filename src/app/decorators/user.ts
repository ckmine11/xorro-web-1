import { type TUser } from '~/api/types/user'

type TDecoratedUser = {
  decoratedUser: TUser & {
    canEdit: () => boolean
    getAge: () => number
  }
}

export function useUserDecorator(userData: TUser): TDecoratedUser {
  const decoratedUser = {
    ...userData,
    getAge: function (): number {
      const dateOfBirth = new Date(userData.dateOfBirth)
      const now = new Date()

      return now.getFullYear() - dateOfBirth.getFullYear()
    },
    canEdit: function (): boolean {
      return userData.role === 'admin' || userData.role === 'editor'
    },
  }

  return { decoratedUser }
}
