"use server";

import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/server/prisma";
import { subscriptionSchema } from "@/lib/validation/subscriptionSchema";
import { sendConfirmationEmail } from "@/lib/server/sendConfirmationEmail";


export async function subscribeAction(data: unknown) {
    const validated = subscriptionSchema.safeParse(data);

    if (!validated.success) {
        return {
            success: false,
            message: "Invalid subscription details given.",
        };
    }

    try {
        const subscription = await prisma.subscription.create({
            data: validated.data,
        });

        try {
            await sendConfirmationEmail({
                email: validated.data.email,
                genre: validated.data.genre,
            });
        } catch (error) {
            console.error("Confirmation email failed:", error);
        }

        return {
            success: true,
            subscriptionId: subscription.id,
            message: "Your subscription has been created.",
        };
        
    } catch(error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return {
                success: false,
                message: "This email has already been subscribed.",
            };
        }

        console.error("Subscription creation failed:", error);

        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}