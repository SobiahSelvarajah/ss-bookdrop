import { Button } from "@/components/ui/button";


type NavbarButtonProps = {
    variant?: "desktop" | "mobile";
}

export default function NavbarButton({ variant = "desktop"}: NavbarButtonProps) {
    if (variant === "mobile") {
        return (
            <Button className="mt-6 w-full bg-stone-200 text-stone-900 hover:bg-amber-300">
                Start Free Week
            </Button>
        )
    }
    
    return (
        <Button className="hidden bg-stone-200 text-stone-900 hover:bg-amber-300 rounded-md px-6 md:flex">
            Start Free Week
        </Button>
    )
}