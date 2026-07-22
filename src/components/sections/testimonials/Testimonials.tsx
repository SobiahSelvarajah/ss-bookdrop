import TestimonialsIntro from "./TestimonialsIntro";
import TestimonialsCard from "./TestimonialsCard";
import { testimonials } from "@/data/testimonials";


export default function Testimonials() {
    return (
        <section id="testimonials" className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <TestimonialsIntro />
                <div className="mt-16">
                    <TestimonialsCard
                        {...testimonials[0]}
                    />
                </div>
            </div>
        </section>
    )
}