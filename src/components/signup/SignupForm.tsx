import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { genres } from "@/data/genres";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


export default function SignupForm() {
    return (
        <form className="mt-10 space-y-12">
            <div className="space-y-3">
                <label htmlFor="email" className="mb-2 block text-sm font-medium tracking-wide text-stone-300">
                    Email address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 border-stone-700 bg-stone-900/60 text-stone-100 placeholder:text-stone-500 focus-visible:border-amber-300 focus-visible:ring-amber-300/20"
                />
            </div>
            <div className="space-y-3">
                <label className="mb-2 block text-sm font-medium text-stone-200">
                    Favourite genre
                </label>
                <Select>
                    <SelectTrigger className="h-12 border-stone-700 bg-stone-900/60 text-stone-100 focus:ring-amber-300/20">
                        <SelectValue placeholder="Choose a genre" />
                    </SelectTrigger>
                    <SelectContent>
                        {genres.map((genre) => (
                            <SelectItem
                                key={genre.title}
                                value={genre.title.toLowerCase()}
                            >
                                {genre.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Button className="h-12 w-full bg-stone-100 font-medium text-stone-900 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg">
                Start Free Week
            </Button>
            <p className="text-center text-xs leading-6 text-stone-500">
                No spam, ever. Unsubscribe anytime.
            </p>
        </form>
    )
}