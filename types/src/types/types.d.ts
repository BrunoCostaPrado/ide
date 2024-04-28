import { z } from "zod"
declare const User: z.ZodObject<
	{
		name: z.ZodString
	},
	"strip",
	z.ZodTypeAny,
	{
		name: string
	},
	{
		name: string
	}
>
export type user = z.infer<typeof User>
export {}
