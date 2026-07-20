

export default function HeroEmailFooter() {
    return (
        <footer className="mt-8 border-t border-stone-800 pt-6 text-xs text-stone-500">
            <p>
                Delivered every Thursday by Bookdrop
            </p>
            <nav aria-label="Email footer links" className="mt-4 flex flex-wrap items-center text-xs">
                <a href="#" className="hover:text-amber-300">
                    Manage Preferences
                </a>
                <span className="mx-3 text-stone-600">•</span>
                <a href="#" className="hover:text-amber-300">
                    View Online
                </a>
                <span className="mx-3 text-stone-600">•</span>
                <a href="#" className="hover:text-amber-300">
                    Unsubscribe
                </a>
            </nav>
        </footer>
    )
}