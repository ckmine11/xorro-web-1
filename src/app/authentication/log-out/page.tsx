'use client'

import { useAuth0 } from '@auth0/auth0-react'
import { type ReactElement, useEffect } from 'react'

import { Spinner } from '~/components/atoms/Spinner'
import { Text } from '~/components/atoms/Text'
import { PageContent } from '~/components/layout/PageContent'
import { PageLayout } from '~/components/layout/PageLayout'

export default function LogOutPage(): ReactElement {
  const { logout } = useAuth0()
  useEffect(() => {
    logout()
  })

  return (
    <PageLayout>
      <PageContent>
        <div className="flex items-center justify-center gap-2">
          <Spinner />
          <Text text="Logging out..." variant="body3" />
        </div>
      </PageContent>
    </PageLayout>
  )
}
