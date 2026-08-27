import Link from "next/link";
import Image from "next/image";


export default function BookDropLogo() {
    return (
        <Link 
            href="#top" 
            aria-label="BookDrop home"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
        >
            <Image
                src="/images/logo/bookdrop-icon.png"
                alt="BookDrop logo"
                width={32}
                height={32}
                priority
                className="h-9 w-9 object-contain"
            />
            <span className="font-heading text-2xl font-semibold tracking-tight text-stone-100">
                BookDrop
            </span>
        </Link>
    );
}