import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { navLinks } from "./navLinks";
import NavbarButton from "./NavbarButton";


export default function NavbarMobile() {
    return (
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
            <SheetContent side="right" className="flex flex-col border-stone-800 bg-stone-950 text-stone-100 px-8 py-10 opacity-0 translate-x-2 data-[state=open]:opacity-100 data-[state=open]:translate-x-0 data-[state=closed]:opacity-0 data-[state=closed]:translate-x-4 transition-all duration-400 ease-out">
                <nav className="flex flex-1 flex-col justify-center space-y-15">
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
                    <SheetClose asChild>
                        <NavbarButton variant="mobile" />
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    );
}