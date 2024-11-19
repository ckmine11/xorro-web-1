import { initTsrReactQuery } from '@ts-rest/react-query/v5'

import { rootContract } from './contract'

export const apiClient = initTsrReactQuery(rootContract, {
  baseUrl: 'https://restcountries.com',
  // baseHeaders: {},
})
