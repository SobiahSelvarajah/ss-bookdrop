import HowItWorksIntro from "./HowItWorksIntro";
import { howItWorksSteps } from "@/data/howItWorksSteps";
import HowItWorksStepCard from "./HowItWorksStepCard";


export default function HowItWorks() {
    return (
        <section id="how-it-works" className="text-white px-8 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <HowItWorksIntro />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {howItWorksSteps.map((step) => (
                        <HowItWorksStepCard
                            key={step.number}
                            {...step}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}