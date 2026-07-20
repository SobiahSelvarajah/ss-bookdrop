import HeroEmailHeader from "./HeroEmailHeader";
import HeroEmailIntro from "./HeroEmailIntro";
import HeroEmailRecommendation from "./HeroEmailRecommendation";
import HeroEmailFooter from "./HeroEmailFooter";


export default function HeroEmail() {
    return (
        <figure className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
                <div className="absolute -inset-8 -z-10 rounded-full bg-amber-400/10 blur-3xl" />
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-stone-800 bg-stone-900/10 transition-transform lg:rotate-1" />
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl border border-stone-800 bg-stone-900/25 backdrop-blur-xl transition-transform lg:rotate-2" />
                <div className="relative rounded-3xl border border-stone-700 bg-stone-950/80 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-500 lg:rotate-2">
                    <HeroEmailHeader />
                    <HeroEmailIntro />
                    <HeroEmailRecommendation />
                    <HeroEmailFooter />
                </div>
            </div>
        </figure>
    )
}