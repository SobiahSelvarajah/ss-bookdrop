import Link from "next/link";
import NavbarLogo from "./NavbarLogo";
import { navLinks } from "../../../data/navLinks";
import NavbarMobile from "./NavbarMobile";
import NavbarButton from "./NavbarButton";


export default function Navbar() {
    return (
        <header className="w-full sticky top-0 z-50 border-b border-stone-800  bg-stone-950/90 backdrop-blur-md">
            <nav className="flex justify-between items-center mx-auto max-w-7xl px-8 h-20">
                <NavbarLogo />
                <ul className="hidden items-center gap-8 text-sm md:flex">
                    {navLinks.map((navLink) => (
                        <li key={navLink.href} className="relative text-sm font-medium tracking-wide text-stone-400 transition-colors duration-300 hover:text-amber-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href={navLink.href}>
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <NavbarButton variant="desktop" />
                <NavbarMobile />
            </nav>
        </header>
    );
}