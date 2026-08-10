import HeroLeftContent from "./HeroLeftContent";
import HeroEmail from "./HeroEmail";


export default function Hero() {
    return (
        <section className="px-8 py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <HeroLeftContent />
                <HeroEmail />              
            </div>
        </section>
    )
}