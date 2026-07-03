import Link from "next/link";
import FooterLinks from "./FooterLinks";
import { companyLinks, socialLinks } from "@/data/footerLinks";


export default function Footer() {
    return (
        <footer className="border-t border-stone-800 bg-stone-950">
            <div className="mx-auto max-w-7xl px-8 py-20">
                <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
                    <section className="space-y-5">
                        <h2 className="text-2xl font-heading font-semibold text-stone-100">
                            BookDrop
                        </h2>
                        <p className="max-w-sm text-stone-400 leading-7">
                            Curated weekly book recommendations delivered to your inbox.
                        </p>
                    </section>
                    <FooterLinks 
                        title="Company"
                        links={companyLinks}
                    />
                    <FooterLinks 
                        title="Follow Us"
                        links={socialLinks}
                    />
                </div>
                <address className="mt-16 flex flex-col gap-3 border-t border-stone-800 pt-8 text-sm not-italic text-stone-500 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 BookDrop. All rights reserved.</p>
                    <p>
                        London, UK
                    </p>
                </address>
            </div>
        </footer>
    )
}