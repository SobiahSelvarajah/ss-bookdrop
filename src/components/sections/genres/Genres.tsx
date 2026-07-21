import GenresIntro from "./GenresIntro";
import GenresCard from "./GenresCard";
import { genres } from "@/data/genres";


export default function Genres() {
    return (
        <section id="genres" className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <GenresIntro />
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {genres.map((genre) => (
                        <GenresCard 
                            key={genre.title}
                            title={genre.title}
                            description={genre.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}