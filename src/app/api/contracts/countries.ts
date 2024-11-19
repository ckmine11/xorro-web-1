import { initContract } from '@ts-rest/core'
import z from 'zod'

const c = initContract()

type TCountry = {
  cca2: string
  name: { common: string }
}

export const countriesContract = c.router({
  read: {
    method: 'GET',
    path: '/alpha/:code',
    pathParams: z.object({
      code: z.string(),
    }),
    responses: {
      200: c.type<TCountry[]>(),
    },
    // headers: z.object({
    //   pagination: z.string().optional(),
    // }),
    query: z.object({
      /**
       * @type {string} - UTC timestamp in milliseconds
       */
      take: z.string().transform(Number),
      skip: z.string().transform(Number).optional(),
      search: z.string().optional(),
    }),
  },
})
