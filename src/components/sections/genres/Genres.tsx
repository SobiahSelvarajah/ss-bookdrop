import GenresIntro from "./GenresIntro";
import GenresCard from "./GenresCard";


export default function Genres() {
    return (
        <section id="genres" className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <GenresIntro />
                <div>
                    <GenresCard />
                </div>
            </div>
        </section>
    )
}