import HowItWorksIntro from "./HowItWorksIntro";
import { howItWorksSteps } from "@/data/howItWorksSteps";
import HowItWorksStepCard from "./HowItWorksStepCard";


export default function HowItWorks() {
    return (
        <section id="how-it-works" className="text-white">
            <div>
                <HowItWorksIntro />

                <div>
                    {howItWorksSteps.map((step) => (
                        <HowItWorksStepCard
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}