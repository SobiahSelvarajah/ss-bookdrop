"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { genres } from "@/data/genres";

import { 
    SignupFormValues, 
    signupSchema 
} from "@/lib/validation/signupSchema";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";



export default function SignupForm() {

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            genre: "",
        },
    });

    const onSubmit = (data: SignupFormValues) => {
        console.log(data);
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