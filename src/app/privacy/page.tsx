import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection from "@/components/legal/LegalSection";


export default function PrivacyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="July 2026"
        >
            <LegalSection title="Introduction">
                <p>
                    At BookDrop, we value your privacy. 
                    This Privacy Policy explains what 
                    information we collect, how we 
                    use it, and the choices you have 
                    regarding your personal data.
                </p>
            </LegalSection>

            <LegalSection title="Information We Collect">
                <p>
                    We may collect information you provide 
                    directly, such as your name, email address, 
                    and book genre preferences when you sign up 
                    for our newsletter or subscription service.                    
                </p>
            </LegalSection>

            <LegalSection title="How We Use Your Information">
                <p>
                    We use your information to deliver weekly book 
                    recommendations, improve our services, respond 
                    to enquiries, and communicate important updates 
                    about BookDrop.                    
                </p>
            </LegalSection>

            <LegalSection title="Cookies">
                <p>
                    BookDrop may use cookies and similar technologies 
                    to improve your browsing experience, analyse 
                    website traffic, and remember your preferences.
                </p>
            </LegalSection>

            <LegalSection title="Data Security">
                <p>
                    We take reasonable measures to protect your 
                    personal information against unauthorised 
                    access, disclosure, or misuse.
                </p>
            </LegalSection>

            <LegalSection title="Third-Party Services">
                <p>
                    We may rely on trusted third-party providers 
                    to help operate BookDrop. These providers 
                    only receive the information necessary to 
                    perform their services on our behalf.
                </p>
            </LegalSection>

            <LegalSection title="Your Rights">
                <p>
                    Depending on your location, you may have 
                    the right to access, update, or request 
                    deletion of your personal information.
                </p>
            </LegalSection>

            <LegalSection title="Changes To This Privacy Policy">
                <p>
                    We may update this Privacy Policy from 
                    time to time. Any changes will be 
                    published on this page with the 
                    revised "Last updated" date.
                </p>
            </LegalSection>

            <LegalSection title="Contact">
                <p>
                    If you have any questions about this 
                    Privacy Policy or about how we handle
                    your data, please contact us through 
                    the Contact page.
                </p>
            </LegalSection>

        </LegalLayout>
    )
}