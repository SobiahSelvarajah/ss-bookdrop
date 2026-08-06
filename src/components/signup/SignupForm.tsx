"use client";

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
    const {
        control,
        register,
        handleSubmit,
        setError,
        clearErrors,
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

        console.log("Subscription successful:", result);
    };


    return (
        <form 
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-12"
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
                        className="mt-3 text-sm leading-5 text-rose-300"
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
                        className="mt-3 text-sm leading-5 text-rose-300"
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


// also, need to include modal closing once data goes through on click
// of the submit button