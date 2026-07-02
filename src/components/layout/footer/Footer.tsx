import Link from "next/link";
import { navLinks } from "../navbar/navLinks";


export default function Footer() {
    return (
        <footer className="text-stone-50">
            <p>
                © 2026 BookDrop. All rights reserved.
            </p>
            <nav aria-label="Footer navigation">
                <ul>
                    {navLinks.map((navLink) => (
                        <li key={navLink.href}>
                            <Link href={navLink.href}>
                                {navLink.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}