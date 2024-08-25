import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(5, "Username must be at least 5 charaters long")
    .max(10, "Username must be at max 10 charaters long")
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special charater")

export const signUpSchema = z.object({

    username: usernameValidation,
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(6, { message: "Password should be at least 6 character" })

})