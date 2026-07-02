import HeroContent from "./HeroContent";


export default function Hero() {
    return (
        <section className="px-8 py-20 lg:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
                <HeroContent />
                <div className="flex items-center justify-center">
                    <div className="flex h-96 w-full max-w-md items-center justify-center rounded-2xl border border-dashed border-stone-700 text-stone-500">
                        Illustration Placeholder
                    </div>
                </div>                
            </div>
        </section>
    )
}