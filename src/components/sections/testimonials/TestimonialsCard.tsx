
type TestimonialsCardProps = {
    name: string;
    role: string;
    quote: string;
};


export default function TestimonialsCard({
    name, 
    role, 
    quote,
}: TestimonialsCardProps) {
    return (
        <article className="relative mx-auto max-w-4xl rounded-3xl border border-stone-800 bg-stone-950/60 p-7 text-center shadow-xl backdrop-blur-sm sm:p-10 md:p-16">
            <blockquote className="relative z-10 flex min-h-52 items-center justify-center sm:min-h-64">
                <span
                    aria-hidden="true"
                    className="absolute -top-8 left-0 font-heading text-7xl text-amber-300/20 md:text-9xl"
                >
                    "
                </span>
                <p className="mx-auto max-w-3xl font-heading text-2xl leading-relaxed text-stone-100 sm:text-3xl md:text-4xl">
                    {quote}
                </p>
                <span
                    aria-hidden="true"
                    className="absolute -bottom-8 right-0 font-heading text-7xl text-amber-300/20 md:text-9xl"
                >
                        "
                    </span>
            </blockquote>

            <footer className="relative z-10 mt-12 border-t border-stone-800 pt-8">
                <p className="font-semibold text-stone-100">
                    {name}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-amber-300">
                    {role}
                </p>
            </footer>
        </article>
    );
}