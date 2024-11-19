import clsx from 'clsx'
import Image from 'next/image'
import { memo, type ReactElement } from 'react'

import { Icon } from '~/components/atoms/Icon'
import { Number } from '~/components/atoms/Number'
import { Text } from '~/components/atoms/Text'

interface ICreatorCardCommonProps {
  imageUrl: string
  initiallyLiked?: boolean
  name: string
  testId?: string
  variant?: 'default' | 'skeleton'
}

interface ICreatorCardWithInvestorsCount extends ICreatorCardCommonProps {
  followersCount?: never
  investorsCount: number
}

interface ICreatorCardWithFollowersCount extends ICreatorCardCommonProps {
  followersCount?: number
  investorsCount?: never
}

export type TCreatorCardProps =
  | ICreatorCardWithInvestorsCount
  | ICreatorCardWithFollowersCount

export const CreatorCard = memo(
  ({
    imageUrl,
    investorsCount,
    followersCount,
    initiallyLiked,
    name,
    testId,
    variant = 'default',
  }: TCreatorCardProps): ReactElement => {
    const isSkeleton = variant === 'skeleton'

    return (
      <>
        <div
          className="flex flex-col"
          data-testid={testId ? `${testId}` : 'creator-card'}
        >
          <div
            className={clsx(
              'relative h-[177px] w-[169px] overflow-hidden rounded-xl',
              {
                'bg-[#EFF1F3]': isSkeleton,
                'bg-[#D9DDE1]': !isSkeleton,
              },
            )}
          >
            {!isSkeleton && (
              <Image
                src={imageUrl}
                alt={name}
                className="h-[177px] w-[169px]"
                height={177}
                width={169}
                priority
              />
            )}
            <div
              className={clsx(
                'absolute inset-0 bg-gradient-to-t via-black/0 to-black/0',
                {
                  'from-black/50': isSkeleton,
                  'from-black/100': !isSkeleton,
                },
              )}
            />
            <div className="absolute bottom-0 left-0 p-3">
              <div className="flex items-center gap-1">
                {initiallyLiked ? (
                  <Icon
                    name="heartFilled"
                    height={24}
                    width={24}
                    fill="#FF5101"
                  />
                ) : (
                  <Icon name="heart" size={24} fill="#fff" />
                )}

                {isSkeleton ? (
                  <Text text="..." variant="caption" color="white" />
                ) : (
                  <>
                    <Number
                      text={investorsCount ?? followersCount ?? 0}
                      textProps={{
                        variant: 'caption',
                        color: 'white',
                      }}
                      precision={[
                        {
                          magnitude: 1_000,
                          precision: 0,
                        },
                        {
                          magnitude: 1_000_000,
                          precision: 1,
                        },
                      ]}
                    />
                    <Text
                      text={
                        investorsCount !== undefined ? 'investors' : 'followers'
                      }
                      variant="caption"
                      color="white"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="mt-2">
            {isSkeleton ? (
              <div className="my-0.5 h-4 w-[88px] rounded bg-gray-200" />
            ) : (
              <Text text={name} variant="body5-bold" color="black" />
            )}
          </div>
        </div>
      </>
    )
  },
)
