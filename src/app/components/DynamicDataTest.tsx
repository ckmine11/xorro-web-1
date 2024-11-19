'use client'

import { isFetchError } from '@ts-rest/react-query/v5'
import { type ReactElement } from 'react'

import { apiClient } from '~/api/client'
import { ListSkeleton } from '~/components/skeletons/ListSkeleton'

export function DynamicDataTest(): ReactElement {
  const { data, error, isPending } = apiClient.countries.read.useQuery({
    queryKey: ['/countries', 'SWE'],
    queryData: {
      params: { code: 'SWE' },
      query: { take: '10' },
    },
  })

  console.log({ data })

  if (isPending) {
    return <ListSkeleton />
  }

  if (error) {
    if (isFetchError(error)) {
      return <span>Fetch error: {error.message}</span>
    }

    if (error.status === 400) {
      return <span> {error.body.message}</span>
    }

    return <span>Oops something went wrong</span>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul className="list-disc">
      {data.body.map((country) => {
        return <li key={country.cca2}>{country.name.common}</li>
      })}
    </ul>
  )
}
