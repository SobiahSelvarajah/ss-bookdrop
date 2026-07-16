

export default function HowItWorksIntro() {
    return (
        <header className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
                How It Works
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-stone-100 md:text-5xl lg:text-6xl">
                Discover your next favourite book in 
                <br className="hidden sm:block" />
                {" "}three simple steps.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-400 md:text-lg">
                From choosing your favourite genre 
                to receiving carefully curated 
                recommendations, Bookdrop makes 
                finding your next great 
                read effortless.
            </p>
        </header>
    )
}