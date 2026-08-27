import BookDropLogo from "@/components/branding/BookDropLogo"


export default function FooterIntro() {
    return (
        <section className="space-y-5">
            <BookDropLogo/>
            <p className="max-w-sm text-stone-400 leading-7">
                Curated weekly book recommendations delivered to your inbox.
            </p>
        </section>
    )
}