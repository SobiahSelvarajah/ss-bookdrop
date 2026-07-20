

export default function HeroEmailRecommendation() {
    return (
        <section className="mt-8 rounded-2xl border border-stone-800 bg-stone-900/50 p-5">
            <header>
                <span className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20">
                    Mystery
                </span>
            </header>
            <article className="mt-5 flex gap-5">
                <figure className="flex h-28 w-20 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-200 via-amber-400 to-amber-600 text-center text-xs font-bold text-stone-900 shadow-lg">
                    <div>
                        BOOK
                    </div>
                    <figcaption className="sr-only">
                        Cover of The Seven Deaths of Evelyn Hardcastle
                    </figcaption>
                </figure>
                <section className="flex-1">
                    <header>
                        <h4 className="font-semibold text-stone-100">
                            The Seven Deaths of Evelyn Hardcastle
                        </h4>
                        <p className="mt-1 text-sm text-stone-400">
                            Stuart Turton
                        </p>
                    </header>
                    <p className="mt-4 text-sm leading-6 text-stone-400">
                        A twisting murder mystery where the
                        same day is relieved through eight
                        different guests until the 
                        killer is revealed.
                    </p>
                </section>
            </article>
        </section>
    )
}
