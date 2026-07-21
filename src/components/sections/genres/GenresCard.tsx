type GenresCardProps = {
    title: string;
    description: string;
};


export default function GenresCard({
    title, description,
}: GenresCardProps) {
    return (
        <article className="group rounded-3xl border border-stone-800 bg-stone-950/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-stone-900/80">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-lg font-semibold text-amber-300">
                📚
            </div>
            <header>
                <h3 className="font-heading text-2xl font-semibold text-stone-100">
                    {title}
                </h3>
            </header>
            <p className="mt-4 leading-7 text-stone-400">
                {description}
            </p>
        </article>
    )
}