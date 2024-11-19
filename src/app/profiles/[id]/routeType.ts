import { type DynamicRoute, type InferPagePropsType } from 'next-typesafe-url'
import { z } from 'zod'

export const Route = {
  routeParams: z.object({
    id: z.number(),
  }),
  // searchParams: z.object({
  //   location: z.enum(['us', 'eu']).optional(),
  //   userInfo: z.object({
  //     name: z.string(),
  //     age: z.number(),
  //   }),
  // }),
} satisfies DynamicRoute

// Need to export the type with this exact name
// eslint-disable-next-line @typescript-eslint/naming-convention
export type RouteType = typeof Route

export type TPageProps = InferPagePropsType<RouteType>
