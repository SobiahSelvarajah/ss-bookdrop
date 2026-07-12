import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";


export default function ContactPage() {
    return (
        <LegalLayout
            title="Contact"
            lastUpdated="July 2026"
        >
            <LegalSection title="Get in Touch">
                <p>
                    We'd love to hear from you! Whether 
                    you have a question, feedback, or 
                    simply want to say hello, feel free 
                    to get in touch with us.
                </p>
            </LegalSection>

            <LegalSection title="Email">
                <p>
                    For general enquiries, please email 
                    us at: 
                </p>
                <p>
                    <a 
                        href="mailto:hello@bookdrop.dev"
                        className="text-amber-300 transition-colors hover:text-amber-200"
                    >
                        hello@bookdrop.dev
                    </a>
                </p>
            </LegalSection>

            <LegalSection title="Response Time">
                <p>
                    We aim to respond to all queries 
                    within 2-3 business working days.
                </p>
            </LegalSection>
        </LegalLayout>
    )
}