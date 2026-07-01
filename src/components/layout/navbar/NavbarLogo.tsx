import Link from "next/link";
import { BookOpen } from "lucide-react";


export default function NavbarLogo() {
    return (
        <Link 
            href="/" 
            className="text-xl font-semibold tracking-tight flex items-center gap-2 text-stone-100 transition-colors hover:text-amber-300"
        >
            <BookOpen className="h-5 w-5 stroke-2" />
            <span>BookDrop</span>
        </Link>
    );
}