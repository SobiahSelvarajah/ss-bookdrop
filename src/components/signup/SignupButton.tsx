import { Button } from "../ui/button";
import SignupDialog from "./SignupDialog";

type SignupButtonProps = {
    variant?: "hero" | "desktop" | "mobile";
};

const variantClasses = {
    hero: "bg-stone-100 text-stone-900 px-6 py-3 hover:bg-amber-300",
    desktop: "hidden bg-stone-200 text-stone-900 hover:bg-amber-300 rounded-md px-6 md:flex",
    mobile: "mt-6 w-full bg-stone-200 text-stone-900 hover:bg-amber-300",
};

export default function SignupButton({
    variant = "hero",
}: SignupButtonProps) {
    return (
        <SignupDialog>
            <Button className={variantClasses[variant]}>
                Start Free Week
            </Button>
        </SignupDialog>
    )
}