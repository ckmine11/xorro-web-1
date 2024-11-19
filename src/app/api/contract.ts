import { initContract } from '@ts-rest/core'

import { countriesContract } from './contracts/countries'
import { revenuePerformancesContract } from './contracts/revenuePerformances'

const c = initContract()

export const rootContract = c.router(
  {
    countries: countriesContract,
    revenuePerformances: revenuePerformancesContract,
  },
  {
    commonResponses: {
      400: c.type<{ message: 'Not Found'; reason: string }>(),
      404: c.type<{ message: 'Not Found'; reason: string }>(),
      500: c.type<{ message: 'Not Found'; reason: string }>(),
    },
    // baseHeaders: z.object({
    //   authorization: z.string(),
    // }),
    pathPrefix: '/v3.1',
  },
)
