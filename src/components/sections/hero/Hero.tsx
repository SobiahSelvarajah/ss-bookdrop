import HeroContent from "./HeroContent";
import HeroEmail from "./HeroEmail";


export default function Hero() {
    return (
        <section className="px-8 py-20 lg:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
                <HeroContent />
                <HeroEmail />              
            </div>
        </section>
    )
}