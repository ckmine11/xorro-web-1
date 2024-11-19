'use client'

import { type ReactElement } from 'react'

import { PageContent } from '~/components/layout/PageContent'
import { PageLayout } from '~/components/layout/PageLayout'
import { privateRoute } from '~/components/routes/privateRoute'

function Page(): ReactElement {
  return (
    <PageLayout>
      <PageContent>
        <p>Wallet</p>
      </PageContent>
    </PageLayout>
  )
}

export default privateRoute(Page)
