import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const publicRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .output(z.object({ greeting: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    }),
})
