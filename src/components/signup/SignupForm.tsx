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

    const form = useForm<SubscriptionFormValues>({
        resolver: zodResolver(subscriptionSchema),
        defaultValues: {
            email: "",
            genre: "",
        },
    });

    const onSubmit = async (data: SubscriptionFormValues) => {
        const result = await subscribeAction(data);

        console.log(result);
    };


    return (
        <form 
            noValidate 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="mt-10 space-y-12"
        >
            <div className="space-y-3">
                <label htmlFor="email" className="mb-2 block text-sm font-medium tracking-wide text-stone-300">
                    Email address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...form.register("email")}
                    className="h-12 border-stone-700 bg-stone-900/60 text-stone-100 placeholder:text-stone-500 focus-visible:border-amber-300 focus-visible:ring-amber-300/20"
                />

                {form.formState.errors.email && (
                    <p className="mt-2 text-sm text-rose-300">
                        {form.formState.errors.email.message}
                    </p>
                )}

            </div>
            <div className="space-y-3">
                <label className="mb-2 block text-sm font-medium text-stone-200">
                    Favourite genre
                </label>
                <Controller
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                        <Select
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <SelectTrigger className="h-12 border-stone-700 bg-stone-900/60 text-stone-100 focus:ring-amber-300/20">
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

                {form.formState.errors.genre && (
                    <p className="mt-2 text-sm text-rose-300">
                        {form.formState.errors.genre.message}
                    </p>
                )}

            </div>
            <Button type="submit" className="h-12 w-full bg-stone-100 font-medium text-stone-900 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg">
                Start Free Week
            </Button>
            <p className="text-center text-xs leading-6 text-stone-500">
                No spam, ever. Unsubscribe anytime.
            </p>
        </form>
    )
}


// also, need to include modal closing once data goes through on click
// of the submit button