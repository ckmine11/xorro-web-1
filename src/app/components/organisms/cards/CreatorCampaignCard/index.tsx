import { memo, type ReactElement } from 'react'

import { Icon } from '~/components/atoms/Icon'
import {
  ProgressBar,
  type TProgressBarProps,
} from '~/components/atoms/ProgressBar'
import { Text } from '~/components/atoms/Text'
import {
  CreatorCard,
  type TCreatorCardProps,
} from '~/components/molecules/cards/CreatorCard'

// Temporary, until we have a real tag component
function FakeTag(): ReactElement {
  return (
    <div className="flex items-center justify-center gap-1 rounded-md border border-black/10 bg-[#FFF1C0] px-2 py-1">
      <Icon name="heartFilled" size={12} fill="#FF5101" />
      <Text text="Live" variant="body5-bold" color="warning" />
    </div>
  )
}

interface ICreatorCampaignCardCommonProps {
  creatorCardProps: TCreatorCardProps
  isLive?: boolean
  progressBarProps: TProgressBarProps
  testId?: string
  tokenAcronym: string
  variant?: 'default' | 'skeleton'
}

interface ICreatorCampaignCardWithInvestorsCount
  extends ICreatorCampaignCardCommonProps {
  followersCount?: never
  investorsCount: number
}

interface ICreatorCampaignCardWithFollowersCount
  extends ICreatorCampaignCardCommonProps {
  followersCount?: number
  investorsCount?: never
}

export type TCreatorCampaignCardProps =
  | ICreatorCampaignCardWithInvestorsCount
  | ICreatorCampaignCardWithFollowersCount

export const CreatorCampaignCard = memo(
  ({
    creatorCardProps,
    isLive = false,
    progressBarProps,
    tokenAcronym,
    testId,
    variant = 'default',
  }: TCreatorCampaignCardProps): ReactElement => {
    const isSkeleton = variant === 'skeleton'

    return (
      <>
        <div
          className="flex w-[169px] flex-col"
          data-testid={testId ? `${testId}` : 'creator-campaign-card'}
        >
          <div className="relative">
            {creatorCardProps.followersCount !== undefined && (
              <CreatorCard
                imageUrl={creatorCardProps.imageUrl}
                name={creatorCardProps.name}
                variant={variant}
                initiallyLiked={creatorCardProps.initiallyLiked}
                testId={creatorCardProps.testId}
                followersCount={creatorCardProps.followersCount}
              />
            )}
            {creatorCardProps.investorsCount !== undefined && (
              <CreatorCard
                imageUrl={creatorCardProps.imageUrl}
                name={creatorCardProps.name}
                variant={variant}
                initiallyLiked={creatorCardProps.initiallyLiked}
                testId={creatorCardProps.testId}
                investorsCount={creatorCardProps.investorsCount}
              />
            )}
            {isLive && (
              <div className="absolute left-0 top-0 p-2">
                <FakeTag />
              </div>
            )}
          </div>
          {isSkeleton ? (
            <>
              <div className="my-0.5 h-3 w-8 rounded bg-gray-200" />
              <div className="mt-2.5 h-4 w-14 rounded bg-gray-200" />
              <div className="mt-1 h-1 rounded bg-gray-200" />
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Text text={tokenAcronym} variant="caption" color="grey-500" />
              <ProgressBar
                value={progressBarProps.value}
                max={progressBarProps.max}
                label={progressBarProps.label}
                size={progressBarProps.size}
                testId={progressBarProps.testId}
              />
            </div>
          )}
        </div>
      </>
    )
  },
)
