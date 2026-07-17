

type StepCardProps = {
    number: string;
    title: string;
    description: string;
};


export default function HowItWorksStepCard({
    number, title, description,
}: StepCardProps) {
    return (
        <article className="rounded-3xl border border-stone-800 bg-stone-900/40 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 text-lg font-semibold text-amber-300 ring-1 ring-amber-400/20">
                {number}
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-stone-100">
                {title}
            </h3>
            <p className="mt-4 leading-7 text-stone-400">
                {description}
            </p>
        </article>
    )
}