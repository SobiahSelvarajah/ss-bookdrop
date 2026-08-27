import { Button } from "../ui/button";
import SignupDialog from "./SignupDialog";

type SignupButtonProps = {
    variant?: 
        | "hero" 
        | "desktop" 
        | "mobile"
        | "pricing"
        | "pricingFeatured";
    children?: React.ReactNode;
};

const variantClasses = {
    hero: "bg-stone-100 text-stone-900 px-6 py-3 hover:bg-amber-300",
    desktop: "hidden bg-stone-200 text-stone-900 hover:bg-amber-300 rounded-md px-4 md:flex",
    mobile: "mt-6 w-full bg-stone-200 text-stone-900 hover:bg-amber-300",
    pricing: "w-full border border-stone-700 bg-stone-900 text-stone-100 hover:border-amber-300 hover:bg-stone-800",
    pricingFeatured: "w-full bg-amber-300 text-stone-900 hover:bg-amber-200",
};

export default function SignupButton({
    variant = "hero",
    children = "Start Free Week", 
}: SignupButtonProps) {
    return (
        <SignupDialog>
            <Button className={variantClasses[variant]}>
                {children}
            </Button>
        </SignupDialog>
    )
}