

type LegalLayoutProps = {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
};

export default function LegalLayout({
    title, lastUpdated, children,
}: LegalLayoutProps) {
    return (
        <main className="mx-auto max-w-4xl px-8 py-20">
            <article className="space-y-12">
                <header className="space-y-3 border-b border-stone-800 pb-8">
                    <h1 className="font-heading font-semibold text-5xl tracking-tight text-stone-100">
                        {title}
                    </h1>
                    <p className="text-sm text-stone-500">
                        Last updated: {lastUpdated}
                    </p>
                </header>
                {children}
            </article>
        </main>
    )
}