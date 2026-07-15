import HowItWorksIntro from "./HowItWorksIntro";
import { howItWorksSteps } from "@/data/howItWorksSteps";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="text-white">
            <div>
                <HowItWorksIntro />

                <div>
                    {howItWorksSteps.map((step) => (
                        <article key={step.number}>
                            <span>{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}