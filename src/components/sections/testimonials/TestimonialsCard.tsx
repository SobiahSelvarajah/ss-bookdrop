
type TestimonialsCardProps = {
    name: string;
    role: string;
    quote: string;
};


export default function TestimonialsCard({
    name, role, quote,
}: TestimonialsCardProps) {
    return (
        <article className="relative mx-auto max-w-4xl rounded-3xl border border-stone-800 bg-stone-950/60 p-10 text-center shadow-xl backdrop-blur-sm md:p-16">
            <span aria-hidden="true" className="absolute left-8 top-6 font-heading text-7xl text-amber-300/20 md:text-9xl">
                "
            </span>
            <blockquote className="relative z-10">
                <p className="font-heading text-3xl leading-relaxed text-stone-100 md:text-5xl">
                    {quote}
                </p>
            </blockquote>
            <span aria-hidden="true" className="absolute bottom-24 right-8 font-heading text-7xl text-amber-300/20 md:text-9xl">
                "
            </span>
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