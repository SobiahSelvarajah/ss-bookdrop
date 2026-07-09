import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";

export default function TermsPage() {
    return (
        <LegalLayout
            title="Terms of Service"
            lastUpdated="July 2026"
        >
            <LegalSection title="Introduction">
                <p>
                    Welcome to BookDrop. These Terms of Service govern your use of
                    our website and book recommendation subscription service.
                </p>
            </LegalSection>

            <LegalSection title="Eligibility">
                <p>
                    You must be at least 18 years old, or have permission from a
                    parent or guardian, to use BookDrop.
                </p>
            </LegalSection>

            <LegalSection title="Subscriptions">
                <p>
                    BookDrop provides curated book recommendations delivered by
                    email. Subscription features and availability may change over
                    time.
                </p>
            </LegalSection>

            <LegalSection title="Acceptable Use">
                <p>
                    You agree not to misuse the service, interfere with its
                    operation, or attempt to gain unauthorised access to our
                    systems.
                </p>
            </LegalSection>

            <LegalSection title="Intellectual Property">
                <p>
                    All branding, content and design elements on BookDrop remain
                    the intellectual property of BookDrop unless otherwise stated.
                </p>
            </LegalSection>

            <LegalSection title="Limitation of Liability">
                <p>
                    BookDrop is provided on an "as is" basis. We make reasonable
                    efforts to maintain the service but cannot guarantee
                    uninterrupted availability.
                </p>
            </LegalSection>

            <LegalSection title="Changes to These Terms">
                <p>
                    We may update these Terms of Service from time to time. Any
                    significant changes will be reflected on this page.
                </p>
            </LegalSection>

            <LegalSection title="Contact">
                <p>
                    If you have any questions regarding these Terms of Service,
                    please contact us through the contact page.
                </p>
            </LegalSection>
        </LegalLayout>
    );
}