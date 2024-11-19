import { initContract } from '@ts-rest/core'
import z from 'zod'

const c = initContract()

type TRevenuePerformance = {
  difference: number
  reach: number
}

export const revenuePerformancesContract = c.router({
  read: {
    method: 'GET',
    path: '/revenuePerformances/:code',
    pathParams: z.object({
      code: z.string(),
    }),
    responses: {
      200: c.type<TRevenuePerformance[]>(),
    },
    query: z.object({
      /**
       * @type {string} - UTC timestamp in milliseconds
       */
      timestamp: z.string().transform(Number),
    }),
  },
})
