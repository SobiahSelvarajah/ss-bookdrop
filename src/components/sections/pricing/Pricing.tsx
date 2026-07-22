import PricingIntro from "./PricingIntro";
import PricingCard from "./PricingCard";
import { pricing } from "@/data/pricing";

export default function Pricing() {
    return (
        <section id="pricing" className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <PricingIntro />
                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {pricing.map((plan) => (
                        <PricingCard
                            key={plan.name}
                            {...plan}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}