import FooterIntro from "./FooterIntro";
import FooterLinks from "./FooterLinks";
import { companyLinks, socialLinks } from "@/data/footerLinks";
import FooterBottom from "./FooterBottom";


export default function Footer() {
    return (
        <footer className="border-t border-stone-800 bg-stone-950">
            <div className="mx-auto max-w-7xl px-8 py-20">
                <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
                    <FooterIntro />
                    <FooterLinks 
                        title="Company"
                        links={companyLinks}
                    />
                    <FooterLinks 
                        title="Follow Us"
                        links={socialLinks}
                    />
                </div>
                <FooterBottom />
            </div>
        </footer>
    )
}