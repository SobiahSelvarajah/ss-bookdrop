import Link from "next/link";


export default function Footer() {
    return (
        <footer className="text-stone-50">
            <div>
                <section>
                    <h2>BookDrop</h2>
                    <p>Curated weekly book recommendations delivered to your inbox.</p>
                </section>
                <nav aria-label="Company">
                    <h3>Company</h3>
                    <ul>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/privacy">Privacy</Link>
                        </li>
                        <li>
                            <Link href="/terms">Terms of Service</Link>
                        </li>
                    </ul>
                </nav>
                <section>
                    <h3>Follow Us</h3>
                    <ul>
                        <li>
                            <Link href="#">Instagram</Link>
                        </li>
                        <li>
                            <Link href="#">X</Link>
                        </li>
                        <li>
                            <Link href="#">LinkedIn</Link>
                        </li>
                    </ul>
                </section>
            </div>
            <address>
                <p>© 2026 BookDrop. All rights reserved.</p>
                <p>
                    123 Library Lane
                    <br />
                    London, UK
                </p>
            </address>
        </footer>
    )
}