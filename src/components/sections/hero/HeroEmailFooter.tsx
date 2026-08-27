

export default function HeroEmailFooter() {
    return (
        <footer className="mt-8 border-t border-stone-800 pt-6 text-xs text-stone-500">
            <p>
                Delivered every Thursday by BookDrop
            </p>
            <nav 
                aria-label="Email footer links" 
                className="mt-4 flex flex-col items-start gap-2 text-xs sm:flex-row sm:items-center sm:gap-0"
            >
                <a 
                    href="#"
                    className="transition-colors hover:text-amber-300"
                >
                    Manage Preferences
                </a>
                <span className="mx-3 hidden text-stone-600 sm:inline">
                    •
                </span>
                <a 
                    href="#" 
                    className="transition-colors hover:text-amber-300"
                >
                    View Online
                </a>
                <span className="mx-3 hidden text-stone-600 sm:inline">
                    •
                </span>
                <a 
                    href="#" 
                    className="transition-colors hover:text-amber-300"
                >
                    Unsubscribe
                </a>
            </nav>
        </footer>
    )
}