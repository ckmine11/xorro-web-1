import { useStore } from 'exome/react'
import { usePathname } from 'next/navigation'
import { type PropsWithChildren, type ReactElement } from 'react'

import { NavBar } from '~/components/organisms/NavBar'
import { authStore } from '~/stores'

export function PageLayout({ children }: PropsWithChildren): ReactElement {
  const route = usePathname()
  const { isAuthenticated } = useStore(authStore)

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar currentPath={route} isAuthenticated={isAuthenticated} />
      <div className="container flex flex-1 flex-col">{children}</div>
    </div>
  )
}
