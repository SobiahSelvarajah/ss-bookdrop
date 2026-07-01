import { BookOpen, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";


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
                    <BookOpen className="h-5 w-5 stroke-2" />
                    <span>BookDrop</span>
                </Link>
                <ul className="hidden items-center gap-8 text-sm md:flex">
                    {navLinks.map((navLink) => (
                        <li key={navLink.href} className="relative text-sm font-medium tracking-wide text-stone-400 transition-colors duration-300 hover:text-amber-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full">
                            <Link href={navLink.href}>
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button className="hidden bg-stone-200 text-stone-900 hover:bg-amber-300 rounded-md px-6 md:flex">
                    Start Free Week
                </Button>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-stone-200 hover:bg-amber-300 md:hidden"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col border-stone-800 bg-stone-950 text-stone-100 px-8 py-10">
                        <nav className="flex flex-1 flex-col justify-between">
                            <div className="flex flex-1 flex-col justify-center space-y-15">
                                {navLinks.map((navLink) => (
                                    <SheetClose key={navLink.href} asChild>
                                        <Link
                                            href={navLink.href}
                                            className="text-xl font-medium text-stone-300 transition-colors hover:text-amber-200"
                                        >
                                            {navLink.label}
                                        </Link>
                                    </SheetClose>
                                ))}                                
                            </div>
                            <SheetClose asChild>
                                <Button className="mt-6 w-full bg-stone-200 text-stone-900 hover:bg-amber-300">
                                    Start Free Week
                                </Button>
                            </SheetClose>
                        </nav>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}