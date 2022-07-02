import type { ServerRouter } from "@/server/router";
import { createReactQueryHooks } from "@trpc/react";

// Create the tRPC hook and adding our router data type to it as a generic
// so that we can make api calls
export const trpc = createReactQueryHooks<ServerRouter>()