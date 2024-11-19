import { isFetchError } from '@ts-rest/react-query/v5'
import { type ReactElement } from 'react'

import { apiClient } from '~/api/client'
import { Icon } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'
import { Accordion } from '~/components/molecules/Accordion'
import { ListSkeleton } from '~/components/skeletons/ListSkeleton'

// Might use a charting library later? Just a placeholder for now
function FakeSmallChart(): ReactElement {
  return (
    <svg
      width="54"
      height="22"
      viewBox="0 0 54 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-5 18.6561C-2.8236 21.2674 2.39651 21.0262 6.74737 18.9289C7.81611 18.4137 8.40245 17.6911 9.4 17.2921C12.0844 16.2185 12.4856 19.8295 14.7053 20.7173C17.2328 21.7281 20.5912 19.7448 24.3684 19.2017C25.9957 18.9677 28.7575 16.5627 31.5684 14.8672C34.0767 13.3542 37.8016 7.49251 39.5474 11.442C40.1794 12.8718 40.8656 16.2405 42.7474 17.3224C46.3167 19.3745 47.321 10.7313 49 6.38001C50.4796 2.54541 56.3507 -2.42136 57.5263 4.34915C57.8076 5.96888 58.09 8.68609 59.1263 9.80519C60.5823 11.3774 62.336 8.13432 62.9158 6.77405C64.0083 4.21065 64.817 1.19677 67 1.19677"
        stroke="#009143"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Might use a charting library later? Just a placeholder for now
function FakeStockIcon(): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.4 15.7158V9.28424L15.86 12.5L10.4 15.7158Z" fill="white" />
      <path
        d="M22.557 7.34184C22.4375 6.88881 22.2035 6.47575 21.8784 6.14401C21.5533 5.81226 21.1485 5.57347 20.7046 5.45153C19.0696 5 12.5 5 12.5 5C12.5 5 5.93035 5 4.29544 5.45153C3.85149 5.57347 3.44672 5.81226 3.12163 6.14401C2.79654 6.47575 2.56254 6.88881 2.44304 7.34184C2.13777 9.04332 1.98962 10.7703 2.00056 12.5C1.98962 14.2297 2.13777 15.9567 2.44304 17.6582C2.56254 18.1112 2.79654 18.5243 3.12163 18.856C3.44672 19.1877 3.85149 19.4265 4.29544 19.5485C5.93035 20 12.5 20 12.5 20C12.5 20 19.0696 20 20.7046 19.5485C21.1485 19.4265 21.5533 19.1877 21.8784 18.856C22.2035 18.5243 22.4375 18.1112 22.557 17.6582C22.8622 15.9567 23.0104 14.2297 22.9994 12.5C23.0104 10.7703 22.8622 9.04332 22.557 7.34184ZM10.4001 15.7143V9.28571L15.8523 12.5L10.4001 15.7143Z"
        fill="#FC0100"
      />
    </svg>
  )
}

// Might use a charting library later? Just a placeholder for now
function FakeFullChart(): ReactElement {
  return (
    <svg
      width="303"
      height="113"
      viewBox="0 0 303 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="81" width="4" height="31" rx="2" fill="#687787" />
      <rect x="39" y="23" width="4" height="88.951" rx="2" fill="#687787" />
      <rect x="52" y="68" width="4" height="44.4755" rx="2" fill="#687787" />
      <rect x="65" y="50" width="4" height="62.2657" rx="2" fill="#687787" />
      <rect x="13" y="49" width="4" height="63.2659" rx="2" fill="#687787" />
      <rect x="26" y="40" width="4" height="72.2727" rx="2" fill="#687787" />
      <rect x="78" width="4" height="112" rx="2" fill="#687787" />
      <rect x="117" y="85" width="4" height="27" rx="2" fill="#687787" />
      <rect x="130" y="68" width="4" height="44.4755" rx="2" fill="#687787" />
      <rect x="143" y="50" width="4" height="62.2657" rx="2" fill="#687787" />
      <rect x="91" y="49" width="4" height="63.2659" rx="2" fill="#687787" />
      <rect x="104" y="31" width="4" height="81" rx="2" fill="#687787" />
      <rect x="156" y="59" width="4" height="53" rx="2" fill="#687787" />
      <rect x="195" y="81" width="4" height="31" rx="2" fill="#687787" />
      <rect x="208" y="85" width="4" height="27" rx="2" fill="#687787" />
      <rect x="221" y="96" width="4" height="16" rx="2" fill="#687787" />
      <rect x="169" y="73" width="4" height="39" rx="2" fill="#687787" />
      <rect x="182" y="100" width="4" height="12" rx="2" fill="#687787" />
      <rect x="234" y="73" width="4" height="39" rx="2" fill="#687787" />
      <rect x="273" y="96" width="4" height="16" rx="2" fill="#687787" />
      <rect x="286" y="78" width="4" height="34" rx="2" fill="#687787" />
      <rect x="299" y="50" width="4" height="62.2657" rx="2" fill="#687787" />
      <rect x="247" y="59" width="4" height="53" rx="2" fill="#687787" />
      <rect x="260" y="81" width="4" height="31" rx="2" fill="#687787" />
    </svg>
  )
}

function RevenuePerformanceStats(): ReactElement {
  const { isExpanded } = Accordion.useAccordion()
  const { data, isPending, error } =
    apiClient.revenuePerformances.read.useQuery({
      queryKey: ['/performanceRevenues', 'YTBE'],
      queryData: {
        params: { code: 'YTBE' },
        query: { timestamp: '10' },
      },
      enabled: isExpanded,
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

  return (
    <div className="flex flex-col gap-5">
      {/*
      Fake text and chart that the query would populate
      Just to show how this might look like, and making it work in Storybook
      */}
      <Text
        text="This influencer reached 4,374 accounts in the last 30 days, +6.1% compared to last week’s performance"
        variant="caption"
      />
      <FakeFullChart />
    </div>
  )
}

export function RevenuePerformanceListItem({
  isInitiallyExpanded,
  testId,
}: {
  isInitiallyExpanded?: boolean
  testId?: string
}): ReactElement {
  return (
    <Accordion
      testId={`${testId}-revenue-performance-list-item`}
      isInitiallyExpanded={isInitiallyExpanded}
    >
      <div className="flex items-center bg-[#F7F8F9] px-4 py-3">
        <div className="mr-4 flex flex-1 justify-between">
          <div className="flex gap-2">
            <FakeStockIcon />
            <div className="flex flex-col gap-2">
              <Text text="Youtube" variant="body1-bold" />
              <Text
                text="$0.28 per JMSCHRLSLX"
                variant="body2"
                color="grey-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <FakeSmallChart />
            <div className="flex flex-col items-end gap-1">
              <Text text="$6.28" variant="body1-bold" />
              <div className="flex items-center gap-2">
                <Icon name="chevronLeft" fill="#009143" />
                <Text text="4%" color="success" />
              </div>
            </div>
          </div>
        </div>
        <Accordion.Toggler fill="#B3BAC3" size={32} />
      </div>
      <Accordion.Content>
        <div className="border-t border-[#D9DDE1] bg-[#F7F8F9] px-6 py-5">
          <Text
            text="Youtube performance"
            variant="body2-bold"
            color="orange-300"
          />
          <div className="mt-2">
            <RevenuePerformanceStats />
          </div>
          <div className="mt-5">
            <Text
              text="Recent activity"
              variant="body2-bold"
              color="orange-300"
            />
          </div>
          <div className="mt-2">
            <Text
              text="Placeholder for another component later"
              variant="caption"
            />
          </div>
        </div>
      </Accordion.Content>
    </Accordion>
  )
}
