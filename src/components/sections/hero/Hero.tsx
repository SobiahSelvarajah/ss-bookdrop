import { Button } from "@/components/ui/button";


export default function Hero() {
    return (
        <section className="px-8 py-20 lg:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
                <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
                    <h1 className="font-heading font-semibold text-5xl leading-tight tracking-tight text-stone-100 md:text-6xl md:leading-1.1 lg:text-7xl">
                        Your next favourite book,
                        <br />
                        delivered every week.
                    </h1>
                    <p className="mt-6 mx-auto max-w-lg text-lg leading-8 text-stone-400 lg:mt-8 lg:mx-0">
                        Pick a genre and get a mystery book recommendation straight to your inbox.
                    </p>
                    <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Button className="bg-stone-100 text-stone-900 px-6 py-3 hover:bg-amber-300">Start Free Week</Button>
                        <Button 
                            variant="outline"
                            className="border-stone-700 bg-stone-900/30 text-stone-200 backdrop-blur-sm px-6 py-3 hover:border-amber-300 hover:bg-stone-900/60 hover:text-amber-200 transition-colors"
                        >
                            View Sample Recommendation
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex h-96 w-full max-w-md items-center justify-center rounded-2xl border border-dashed border-stone-700 text-stone-500">
                        Illustration Placeholder
                    </div>
                </div>                
            </div>
        </section>
    )
}