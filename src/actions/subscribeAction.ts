"use server";

import { subscriptionSchema } from "@/lib/validation/subscriptionSchema";


export async function subscribeAction(data: unknown) {
    const validated = subscriptionSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
        };
    }

    console.log(validated.data);

    return {
        success: true,
    };
}