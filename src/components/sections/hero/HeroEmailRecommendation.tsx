import Image from "next/image";

export default function HeroEmailRecommendation() {
    return (
        <section className="mt-8 rounded-2xl border border-stone-800 bg-stone-900/60 p-5 shadow-lg sm:p-7">
            <header className="flex">
                <span className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20">
                    Mystery
                </span>
            </header>
            <article className="mt-5 flex flex-col gap-5 sm:flex-row">
                <figure className="relative mx-auto aspect-2/3 w-32 overflow-hidden rounded-lg shadow-lg sm:mx-0 sm:w-20 sm:shrink-0">
                    <Image
                        src="/images/books/evelyn-hardcastle.jpg"
                        alt="Cover of The Seven Deaths of Evelyn Hardcastle"
                        fill
                        className="object-cover"
                        sizes="(max-width: 639px) 128px, 80px"
                    />
                </figure>
                <section className="flex-1">
                    <header className="space-y-1">
                        <h4 className="font-semibold text-stone-100">
                            The Seven Deaths of Evelyn Hardcastle
                        </h4>
                        <p className="text-sm text-stone-400">
                            Stuart Turton
                        </p>
                    </header>
                    <p className="mt-4 text-sm leading-7 text-stone-400">
                        A twisting murder mystery where the
                        same day is relived through eight
                        different guests until the 
                        killer is revealed.
                    </p>
                </section>
            </article>
        </section>
    )
}