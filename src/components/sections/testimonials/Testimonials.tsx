"use client";

import { useEffect, useState } from "react";
import TestimonialsIntro from "./TestimonialsIntro";
import TestimonialsCard from "./TestimonialsCard";
import { testimonials } from "@/data/testimonials";

const ROTATION_INTERVAL = 10000;
const FADE_DURATION = 1200;


export default function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const intervalId = setInterval(() => {
            setIsVisible(false);

            timeoutId = setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    return (prevIndex + 1) % testimonials.length
                });
                setIsVisible(true);                
            }, FADE_DURATION);
        }, ROTATION_INTERVAL);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }, []);

    return (
        <section id="testimonials" className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <TestimonialsIntro />
                <div className={`mt-16 transition-all duration-1200 ease-in-out ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                }`}>
                    <TestimonialsCard
                        {...testimonials[currentIndex]}
                    />
                </div>
            </div>
        </section>
    )
}