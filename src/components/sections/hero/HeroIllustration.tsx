

export default function HeroIllustration() {
    return (
        <figure className="flex items-center justify-center">
            <div className="relative w-full max-w-md">

                {/* back layer */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-stone-800 bg-stone-900/30 backdrop-blur-xl" />

                {/* middle layer */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl border border-stone-800 bg-stone-900/50 backdrop-blur-xl"/>

                {/* main layer */}
                <div className="relative rounded-3xl border border-stone-700 bg-stone-950/80 p-6 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center justify-between text-sm text-stone-500">
                        <span className="font-medium text-stone-300">BookDrop</span>
                        <span>Issue #</span>
                    </div>

                    <div className="mt-6 space-y-4">
                        <p className="text-sm text-stone-500">Hi Daniel,</p>
                        <h3 className="text-lg font-semibold text-stone-100">
                            Your weekly mystery pick
                        </h3>
                        <div className="rounded-xl border border-stone-800 bg-stone-900/40 p-4">
                            <p className="text-sm text-amber-300">
                                Mystery
                            </p>
                            <p className="mt-5 text-stone-100 font-medium">
                                The Seven Deaths of Evelyn Hardcastle
                            </p>
                            <p className="mt-2 text-sm text-stone-400 font-extralight">
                                A mind-bending mystery set in a looping estate.
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 text-sm">
                            <span className="text-stone-500">
                                Delivered every Thursday
                            </span>
                            <button className="text-amber-300 hover:text-amber-200 transition">
                                View →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    )
}