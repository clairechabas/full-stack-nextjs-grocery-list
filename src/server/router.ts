import * as trpc from '@trpc/server'
// Zod provides TypeScript-first schema validation 
// with static type inference.
import { z } from 'zod'

import { Context } from './context'

// Keep in mind:
// An endpoint is called a `procedure`.
// A `procedure` can have two types of operations: `query` and `mutation`.
// `Queries` are responsible for fetching data.
// `Mutations` are responsible for making changes to the data (server-side).
export const serverRouter = trpc
  // We use our context data type as a generic in our router 
  // this way we have the typed context object (to have access to our prisma instance)
  .router<Context>()
  .query('findAll', {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.groceryList.findMany()
    }
  })
  .mutation('InsertOne', {
    input: z.object({
      title: z.string()
    }),
    resolve: async ({ input, ctx }) => {
      return await ctx.prisma.groceryList.create({
        data: { title: input.title }
      })
    }
  })
  .mutation('UpdateOne', {
    input: z.object({
      id: z.number(),
      title: z.string(),
      checked: z.boolean(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input

      return await ctx.prisma.groceryList.update({
        where: { id },
        data: { ...rest },
      })
    }
  })
  .mutation('DeleteAll', {
    input: z.object({
      ids: z.number().array(),
    }),
    resolve: async ({ input, ctx }) => {
      const { ids } = input

      return await ctx.prisma.groceryList.deleteMany({
        where: {
          id: { in: ids },
        }
      })
    }
  })

export type ServerRouter = typeof serverRouter