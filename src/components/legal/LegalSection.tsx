
type LegalSectionProps = {
    title: string;
    children: React.ReactNode;
};


export default function LegalSection({
    title, children,
}: LegalSectionProps) {
    return (
        <section className="space-y-4">
            <h2 className="font-heading font-semibold text-2xl text-stone-100">
                {title}
            </h2>
            <div className="space-y-4 text-stone-400 leading-8">
                {children}
            </div>
        </section>
    )
}