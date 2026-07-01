import { BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";


export default function Navbar() {

    const navLinks = [
        { href: "#how-it-works", label: "How It Works" },
        { href: "#genres", label: "Genres" },
        { href: "#pricing", label: "Pricing" },
        { href: "#testimonials", label: "Testimonials" },
    ];

    return (
        <header className="w-full sticky top-0 z-50 border-b border-stone-800  bg-stone-950/90 backdrop-blur-md">
            <nav className="flex justify-between items-center mx-auto max-w-7xl px-8 h-20">
                <Link href="/" className="text-xl font-semibold tracking-tight flex items-center gap-2 text-stone-100 transition-colors hover:text-amber-300">
                    <BookOpen className="h-6 w-6 stroke-2" />
                    <span>BookDrop</span>
                </Link>
                <ul className="flex items-center gap-8 text-sm">
                    {navLinks.map((navLink) => (
                        <li key={navLink.href} className="relative text-sm font-medium tracking-wide text-stone-400 transition-colors duration-300 hover:text-amber-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href={navLink.href}>
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button className="bg-stone-200 text-stone-900 hover:bg-amber-300 rounded-md px-6">
                    Start Free Week
                </Button>
            </nav>
        </header>
    );
}