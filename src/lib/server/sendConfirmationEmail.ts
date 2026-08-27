import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type SendConfirmationEmailProps = {
    email: string;
    genre: string;
};


export async function sendConfirmationEmail({
    email,
    genre,
}: SendConfirmationEmailProps) {
    const { error } = await resend.emails.send({
        from: "BookDrop <onboarding@resend.dev>",
        to: email,
        subject: "Welcome to BookDrop",
        html: `
            <h1>Welcome to BookDrop</h1>
            <p>Your subscription has been confirmed.</p>
            <p>Based on your selected genre of <strong>${genre}</strong>, your first recommendation will be arriving soon.</p>
        `
    });
    if (error) {
        throw new Error(error.message);
    }
}