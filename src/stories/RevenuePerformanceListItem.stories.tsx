import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactElement } from 'react'

import { RevenuePerformanceListItem } from '~/components/organisms/accordions/RevenuePerformanceListItem'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
})

const meta = {
  title: 'Atoms/RevenuePerformanceListItem',
  component: RevenuePerformanceListItem,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (_Story, { args }): ReactElement => {
      const { testId, isInitiallyExpanded } = args
      queryClient.setQueryData(['/performanceRevenues', 'YTBE'], {
        test: 'frex',
      })

      return (
        <QueryClientProvider client={queryClient}>
          <RevenuePerformanceListItem
            testId={testId}
            isInitiallyExpanded={isInitiallyExpanded}
          />
        </QueryClientProvider>
      )
    },
  ],
} satisfies Meta<typeof RevenuePerformanceListItem>

type Story = StoryObj<typeof meta>

export const Generic: Story = {
  args: {
    testId: 'youtube',
  },
}

export const InitiallyExpanded: Story = {
  args: {
    isInitiallyExpanded: true,
  },
}

export default meta

// export const BlogPost: Story = {
//   args: {},
//   decorators: [
//     (Story) => {
//       queryClient.setQueryData(["cash-key"], {
//         //... set your mocked data here
//       });
//       return (
//         <QueryClientProvider client={queryClient}>
//           <Story />
//         <QueryClientProvider>
//       );
//     },
//   ],
// };
