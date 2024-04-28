import { z } from "zod"

const User = z.object({
	name: z.string()
})
export type user = z.infer<typeof User>
