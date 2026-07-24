import { z } from "zod";


export const signupSchema = z.object({
    email: z
        .string()
        .trim()
        .pipe(
            z.email({
                message: "Please enter a valid email",
            })
        ),
        
    genres: z
        .string()
        .trim()
        .min(1, {
            message: "Please select your favourite genre.",
        }),
});

export type SignupFormValues = z.infer<typeof signupSchema>;