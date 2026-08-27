"use client";

import { useState } from "react";
import { subscribeAction } from "@/actions/subscribeAction";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { genres } from "@/data/genres";

import { 
    SubscriptionFormValues, 
    subscriptionSchema,
} from "@/lib/validation/subscriptionSchema";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


export default function SignupForm() {

    const [isSuccessful, setIsSuccessful] = useState(false);

    const {
        control,
        register,
        handleSubmit,
        setError,
        clearErrors,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<SubscriptionFormValues>({
        resolver: zodResolver(subscriptionSchema),
        defaultValues: {
            email: "",
            genre: "",
        },
    });

    const onSubmit = async (data: SubscriptionFormValues) => {
        const result = await subscribeAction(data);

        if (!result.success) {
            setError(
                "email",
                {
                    type: "server",
                    message:
                        result.message ??
                        "Something went wrong, please try again.",
                },
                {
                    shouldFocus: true,
                }
            );
            return;
        }

        reset();
        setIsSuccessful(true);
    };

    if (isSuccessful) {
        return (
            <section
                aria-live="polite"
                className="mt-6 flex min-h-56 flex-col items-center justify-center text-center sm:mt-8 sm:min-h-64"
            >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-2xl text-amber-300">
                    ✓
                </div>
                <h3 className="mt-6 font-heading text-3xl font-semibold text-stone-100">
                    Welcome to BookDrop.
                </h3>
                <p className="mt-7 max-w-sm text-sm leading-6 text-stone-400">
                    Your subscription is confirmed. Your first personalised 
                    recommendation will arrive this Thursday.
                </p>
            </section>
        )
    }

    return (
        <form 
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 space-y-5 sm:mt-8 lg:mt-10 lg:space-y-8"
        >
            <div className="space-y-3">
                <label 
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium tracking-wide text-stone-300"
                >
                    Email address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                        onChange: () => clearErrors("email"),
                    })}
                    className="h-12 border-stone-700 bg-stone-900/60 text-stone-100 placeholder:text-stone-500 focus-visible:border-amber-300 focus-visible:ring-amber-300/20"
                />
                {errors.email?.message && (
                    <p
                        id="email-error"
                        role="alert"
                        className="mt-1 text-sm leading-5 text-rose-300"
                    >
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="space-y-3">
                <label 
                    htmlFor="genre"
                    className="mb-2 block text-sm font-medium tracking-wide text-stone-300"
                >
                    Favourite genre
                </label>

                <Controller
                    control={control}
                    name="genre"
                    render={({ field }) => (
                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <SelectTrigger
                                id="genre"
                                aria-invalid={Boolean(errors.genre)}
                                aria-describedby={
                                    errors.genre ? "genre-error" : undefined
                                }
                                className="h-12 border-stone-700 bg-stone-900/60 text-stone-100 focus:ring-amber-300/20"
                            >
                                <SelectValue placeholder="Choose a genre" />
                            </SelectTrigger>
                            <SelectContent>
                                {genres.map((genre) => (
                                    <SelectItem
                                        key={genre.id}
                                        value={genre.id}
                                    >
                                        {genre.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>    
                    )}
                />

                {errors.genre?.message && (
                    <p
                        id="genre-error"
                        role="alert"
                        className="mt-1 text-sm leading-5 text-rose-300"
                    >
                        {errors.genre.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full bg-stone-100 font-medium text-stone-900 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg"
            >
                {isSubmitting ? "Joining BookDrop..." : "Start Free Week"}
            </Button>

             <p className="text-center text-xs leading-6 text-stone-500">
                 No spam, ever. Unsubscribe anytime.
             </p>
        </form>
    )
}
