import { z } from "zod";
import { VALIDATION_MESSAGES } from "./messages";


export const signupSchema = z.object({
    email: z
        .string()
        .trim()
        .pipe(
            z.email({
                message: VALIDATION_MESSAGES.email,
            })
        ),
        
    genre: z
        .string()
        .trim()
        .min(1, {
            message: VALIDATION_MESSAGES.genre,
        }),
});

export type SignupFormValues = z.infer<typeof signupSchema>;