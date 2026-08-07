import SignupButton from "@/components/signup/SignupButton";
import { Check } from "lucide-react";

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
    name,
    price, 
    period, 
    description, 
    features, 
    buttonText, 
    featured,
}: PricingCardProps) {
    return (
        <article 
            className={`group flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                featured
                    ? "border-amber-400/40 bg-stone-900/80 shadow-xl shadow-amber-950/10"
                    : "border-stone-800 bg-stone-950/60 hover:border-amber-400/40 hover:bg-stone-900/80"
            }`}
        >
            <header>
                {featured && (
                    <p className="inline-flex rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/20">
                        Most Popular
                    </p>
                )}
                <h3 className="mt-6 font-heading text-3xl font-semibold text-stone-100">
                    {name}
                </h3>
                <div className="mt-4 flex items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight text-stone-100">
                        {price}
                    </span>
                    <span className="pb-1 text-sm text-stone-400">
                        {period}
                    </span>
                </div>
            </header>
            <p className="mt-6 leading-7 text-stone-400">
                {description}
            </p>
            <section className="mt-8 flex-1">
                <h4 className="sr-only">
                    Plan features
                </h4>
                <ul className="space-y-4 text-sm text-stone-300">
                    {features.map((feature) => (
                        <li 
                            key={feature}
                            className="flex items-start gap-3"
                        >
                            <Check
                                aria-hidden="true"
                                className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                            />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <footer className="mt-10">
                <SignupButton
                    variant={featured ? "pricingFeatured" : "pricing"}
                >
                    {buttonText}
                </SignupButton>
            </footer>
        </article>
    );
}