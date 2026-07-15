import { howItWorksSteps } from "@/data/howItWorksSteps";


export default function HowItWorks() {
    return (
        <section id="how-it-works" className="text-white">
            <div>
                <header>
                    <p>
                        How It Works
                    </p>
                    <h2>
                        Discover your next favourite book in 
                        three simple steps.
                    </h2>
                    <p>
                        From choosing your favourite genre 
                        to receiving carefully curated 
                        recommendations, Bookdrop makes 
                        finding your next great 
                        read effortless.
                    </p>
                </header>

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