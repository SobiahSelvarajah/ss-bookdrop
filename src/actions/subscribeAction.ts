"use server";

import { prisma } from "@/lib/server/prisma";
import { subscriptionSchema } from "@/lib/validation/subscriptionSchema";


export async function subscribeAction(data: unknown) {
    const validated = subscriptionSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            message: "Invalid subscription details given.",
        };
    }

    const subscription = await prisma.subscription.create({
        data: validated.data,
    });

    return {
        success: true,
        subscriptionId: subscription.id,
    };
}