import Link from "next/link";


export default function Navbar() {
    return (
        <header>
            <nav>
                <Link href="/">Bookdrop</Link>
                <ul>
                    <li>
                        <Link href="#how-it-works">How It Works</Link>
                    </li>
                    <li>
                        <Link href="#genres">Genres</Link>
                    </li>
                    <li>
                        <Link href="#pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#testimonials">Testimonials</Link>
                    </li>
                </ul>
                <button>Start Free Week</button>
            </nav>
        </header>
    );
}