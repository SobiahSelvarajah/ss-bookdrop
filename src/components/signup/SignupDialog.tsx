"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import SignupForm from "./SignupForm";


type SignupDialogProps = {
    children: React.ReactNode;
};


export default function SignupDialog({
    children,
}: SignupDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="border-stone-800 bg-stone-950 p-8 text-stone-100 shadow-2xl sm:max-w-lg">
                <DialogHeader className="items-center text-center space-y-5">
                    <span className="mx-auto inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                        Free 7-day Trial
                    </span>
                    <DialogTitle className="font-heading text-4xl font-semibold text-stone-100">
                        Start your free week
                    </DialogTitle>
                    <DialogDescription className="text-stone-400">
                        Join BookDrop and receive your first
                        personalised recommendation every Thursday.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-8 border-t border-stone-800"/>
                <SignupForm />
            </DialogContent>
        </Dialog>
    )
}