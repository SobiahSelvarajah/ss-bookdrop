import Link from "next/link";

type FooterLinksProps = {
    title: string;
    links: {
        href: string;
        label: string;
    }[];
};


export default function FooterLinks({
    title, links,
}: FooterLinksProps) {
    return (
        <section>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-stone-500">
                {title}
            </h3>
            <ul className="space-y-3 text-stone-400">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="transition-colors duration-300 hover:text-amber-300"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}