import { Button } from "@/components/ui/button";

type PricingCardProps = {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    buttonText: string;
    featured: boolean;
};


export default function PricingCard({
    name, price, period, description, features, buttonText, featured,
}: PricingCardProps) {
    return (
        <article className="group rounded-3xl border border-stone-800 bg-stone-950/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-stone-900/80">
            <header>
                {featured && (
                    <p className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20">
                        Most Popular
                    </p>
                )}
                <h3 className="mt-6 font-heading text-3xl font-semibold text-stone-100">
                    {name}
                </h3>
                <div className="mt-4 flex items-end gap-2">
                    <span className="text-5xl font-bold text-stone-100">
                        {price}
                    </span>
                    <span className="pb-1 text-stone-400">
                        {period}
                    </span>
                </div>
            </header>
            <p className="mt-6 leading-7 text-stone-400">
                {description}
            </p>
            <section className="mt-8">
                <h4 className="sr-only">
                    Plan features
                </h4>
                <ul className="space-y-4 text-sm text-stone-300">
                    {features.map((feature) => (
                        <li key={feature}>
                            ✓ {feature}
                        </li>
                    ))}
                </ul>
            </section>
            <footer className="mt-10">
                <Button className="w-full bg-amber-300 text-stone-900 hover:bg-amber-200">
                    {buttonText}
                </Button>
            </footer>
        </article>
    );
}