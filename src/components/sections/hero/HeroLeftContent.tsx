import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function HeroLeftContent() {
    return (
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
            <h1 className="font-heading font-semibold text-5xl leading-tight tracking-tight text-stone-100 md:text-6xl md:leading-1.1 lg:text-7xl">
                Your next favourite book,
                <br />
                <span className="text-amber-300">delivered </span> 
                every week.
            </h1>
            <p className="mt-6 mx-auto max-w-lg text-lg leading-8 text-stone-400 lg:mt-8 lg:mx-0">
                Pick a genre and get a mystery book recommendation straight to your inbox.
            </p>
            <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button className="bg-stone-100 text-stone-900 px-6 py-3 hover:bg-amber-300">
                    Start Free Week
                </Button>
                <Button 
                    variant="outline"
                    className="border-stone-700 bg-stone-900/30 text-stone-200 backdrop-blur-sm px-6 py-3 hover:border-amber-300 hover:bg-stone-900/60 hover:text-amber-200 transition-colors"
                >
                    View Sample Recommendation
                </Button>
            </div>

            <Link
                href="https://github.com/SobiahSelvarajah/ss-bookdrop"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-amber-300"
            >
                View Source Code
                <ArrowUpRight className="h-4 w-4" />
            </Link>
        </div>
    )
}