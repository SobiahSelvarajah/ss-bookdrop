import { Button } from "@/components/ui/button";


export default function Hero() {
    return (
        <section>
            <div>
                <h1>
                    Your next favourite book, delivered every week.
                </h1>
                <p>
                    Pick a genre and get a mystery book Recommendation straight to your inbox.
                </p>
                <div>
                    <Button>Start Free Week</Button>
                    <Button variant="outline">View Sample Recommendation</Button>
                </div>
            </div>
            <div>
                {/* Illustration placeholder */}
            </div>
        </section>
    )
}