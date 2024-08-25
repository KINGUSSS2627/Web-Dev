import { z } from "zod";

export const messageSchema = z.object({

    content: z
        .string()
        .min(10, "Min Length 10")
        .max(200, "Max Length 10")

})