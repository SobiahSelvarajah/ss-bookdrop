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
        <form className="mt-8 space-y-6">
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-200">
                    Email address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-stone-200">
                    Favourite genre
                </label>
                <Select>
                    <SelectTrigger>
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
            <Button className="w-full">
                Start Free Week
            </Button>
            <p className="text-center text-xs leading-6 text-stone-500">
                No spam. Unsubscribe anytime.
            </p>
        </form>
    )
}