'use client'

import { type ReactElement } from 'react'

import { PageContent } from '~/components/layout/PageContent'
import { PageLayout } from '~/components/layout/PageLayout'
import { ListSkeleton } from '~/components/skeletons/ListSkeleton'

export default function AuthenticationCallbackPage(): ReactElement {
  return (
    <PageLayout>
      <PageContent>
        <ListSkeleton />
      </PageContent>
    </PageLayout>
  )
}
