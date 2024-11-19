'use client'

import { isFetchError } from '@ts-rest/react-query/v5'
import { type ReactElement } from 'react'

import { apiClient } from '~/api/client'
import { Icon } from '~/components/atoms/Icon'
import { Number } from '~/components/atoms/Number'
import { Text } from '~/components/atoms/Text'
import { PageContent } from '~/components/layout/PageContent'
import { PageLayout } from '~/components/layout/PageLayout'
import { CreatorCard } from '~/components/molecules/cards/CreatorCard'
import { CreatorCampaignCard } from '~/components/organisms/cards/CreatorCampaignCard'
import { privateRoute } from '~/components/routes/privateRoute'

function LiveCampaignsList(): ReactElement {
  const { data, error, isPending } = apiClient.countries.read.useQuery({
    queryKey: ['/countries', 'SWE'],
    queryData: {
      params: { code: 'SWE' },
      query: { take: '10' },
    },
    staleTime: 1,
    gcTime: 1,
  })

  console.log({ data, isPending })

  if (isPending) {
    // TODO: Make it possible to do a skeleton without the other props
    return (
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-scroll pb-4 sm:flex-wrap sm:overflow-x-hidden sm:pb-0">
        <CreatorCampaignCard
          tokenAcronym="asd"
          creatorCardProps={{
            name: '',
            imageUrl: '',
            investorsCount: 0,
          }}
          progressBarProps={{
            value: 0,
          }}
          variant="skeleton"
        />
        <CreatorCampaignCard
          tokenAcronym=""
          creatorCardProps={{
            name: '',
            imageUrl: '',
            investorsCount: 0,
          }}
          progressBarProps={{
            value: 0,
          }}
          variant="skeleton"
        />
        <CreatorCampaignCard
          tokenAcronym=""
          creatorCardProps={{
            name: '',
            imageUrl: '',
            investorsCount: 0,
          }}
          progressBarProps={{
            value: 0,
          }}
          variant="skeleton"
        />
      </div>
    )
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

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-scroll pb-4 sm:flex-wrap sm:overflow-x-hidden sm:pb-0">
      <div className="snap-start snap-always">
        <CreatorCampaignCard
          tokenAcronym="ETH"
          creatorCardProps={{
            name: 'John Doe',
            imageUrl: 'https://i.pravatar.cc/300/8',
            investorsCount: 100_000,
          }}
          progressBarProps={{
            value: 40,
            label: '$1.50',
          }}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCampaignCard
          tokenAcronym="ETH"
          creatorCardProps={{
            name: 'John Doe',
            imageUrl: 'https://i.pravatar.cc/300/9',
            investorsCount: 100_000,
          }}
          progressBarProps={{
            value: 40,
            label: '$1.50',
          }}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCampaignCard
          tokenAcronym="ETH"
          creatorCardProps={{
            name: 'John Doe',
            imageUrl: 'https://i.pravatar.cc/300/10',
            investorsCount: 100_000,
          }}
          progressBarProps={{
            value: 40,
            label: '$1.50',
          }}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCampaignCard
          tokenAcronym="ETH"
          creatorCardProps={{
            name: 'John Doe',
            imageUrl: 'https://i.pravatar.cc/300/11',
            investorsCount: 100_000,
          }}
          progressBarProps={{
            value: 40,
            label: '$1.50',
          }}
        />
      </div>
    </div>
  )
}

function FakeWalletCard(): ReactElement {
  return (
    <div className="rounded bg-[#F7F8F9] px-4 py-4 sm:px-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Icon name="wallet" width={24} height={24} fill="#FA4F33" />
            <Text variant="body5" text="Your available balance" />
          </div>
          <Number
            isMoney
            text="48.32"
            precision={2}
            textProps={{ variant: 'headline3' }}
          />
        </div>
        <Icon name="chevronRight" width={24} height={24} />
      </div>
    </div>
  )
}

function PopularCreatorsList(): ReactElement {
  const { data, error, isPending } = apiClient.countries.read.useQuery({
    queryKey: ['/countries', 'SWE'],
    queryData: {
      params: { code: 'SWE' },
      query: { take: '10' },
    },
    staleTime: 1,
    gcTime: 1,
  })

  console.log({ data, isPending })

  if (isPending) {
    // TODO: Make it possible to do a skeleton without the other props
    return (
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-scroll pb-4 sm:flex-wrap sm:overflow-x-hidden sm:pb-0">
        <CreatorCard
          name=""
          imageUrl=""
          followersCount={0}
          variant="skeleton"
        />
        <CreatorCard
          name=""
          imageUrl=""
          followersCount={0}
          variant="skeleton"
        />
        <CreatorCard
          name=""
          imageUrl=""
          followersCount={0}
          variant="skeleton"
        />
      </div>
    )
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

  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-scroll pb-4 sm:flex-wrap sm:overflow-x-hidden sm:pb-0">
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/1"
          followersCount={100_000}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/2"
          followersCount={100_000}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/3"
          followersCount={100_000}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/4"
          followersCount={100_000}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/5"
          followersCount={100_000}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/6"
          followersCount={100_000}
        />
      </div>
      <div className="snap-start snap-always">
        <CreatorCard
          name="John Doe"
          imageUrl="https://i.pravatar.cc/300/7"
          followersCount={100_000}
        />
      </div>
    </div>
  )
}

function Page(): ReactElement {
  console.log('page')

  return (
    <PageLayout>
      <div className="sm:mt-8">
        <FakeWalletCard />
      </div>
      <PageContent>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Text variant="title5" text="Ongoing raises" />
            <LiveCampaignsList />
          </div>
          <div className="flex flex-col gap-4">
            <Text variant="title5" text="Popular creators" />
            <PopularCreatorsList />
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}

export default privateRoute(Page)
