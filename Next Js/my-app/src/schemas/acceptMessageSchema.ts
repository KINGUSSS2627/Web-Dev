import { boolean, z } from "zod";

export const acceptSchema = z.object({

    acceptMessages: z.boolean()

})