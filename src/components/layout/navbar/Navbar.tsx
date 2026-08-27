import Link from "next/link";
import BookDropLogo from "@/components/branding/BookDropLogo";
import { navLinks } from "../../../data/navLinks";
import NavbarMobile from "./NavbarMobile";
import SignupButton from "@/components/signup/SignupButton";


export default function Navbar() {
    return (
        <header className="w-full sticky top-0 z-50 border-b border-stone-800  bg-stone-950/90 backdrop-blur-md">
            <nav className="relative mx-auto flex h-20 max-w-7xl items-center px-8">
                <BookDropLogo />
                <ul className="ml-12 hidden items-center gap-6 text-sm md:flex lg:absolute lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:gap-8">
                    {navLinks.map((navLink) => (
                        <li key={navLink.href} className="relative text-sm font-medium tracking-wide text-stone-400 transition-colors duration-300 hover:text-amber-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href={navLink.href}>
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="ml-auto hidden md:block">
                    <SignupButton variant="desktop" />
                </div>
                <div className="ml-auto md:hidden">
                    <NavbarMobile />
                </div>
            </nav>
        </header>
    );
}