import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { PrismaClient } from '@prisma/client'

// The context is used to pass contextual data to all router resolvers.
// In our context we will just pass our prisma client instance.
export async function createContext(options?: trpcNext.CreateNextContextOptions) {
  const prisma = new PrismaClient()

  return { prisma}
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>