import HeroEmailHeader from "./HeroEmailHeader";
import HeroEmailIntro from "./HeroEmailIntro";
import HeroEmailRecommendation from "./HeroEmailRecommendation";


export default function HeroEmail() {
    return (
        <div className="relative rounded-3xl border border-stone-700 bg-stone-950/80 p-6 shadow-2xl backdrop-blur-xl">
            <HeroEmailHeader />
            <HeroEmailIntro />    
            <HeroEmailRecommendation />       
        </div>

    )
}