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
            <DialogContent className="border-stone-800 bg-stone-950 px-5 py-6 text-stone-100 shadow-2xl sm:max-w-lg sm:px-8 sm:py-8 lg:p-10">
                <DialogHeader className="items-center text-center space-y-3 sm:space-y-4">
                    <span className="mx-auto inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                        Free 7-day Trial
                    </span>
                    <DialogTitle className="font-heading text-3xl font-semibold text-stone-100 sm:text-4xl">
                        Start your free week
                    </DialogTitle>
                    <DialogDescription className="text-sm leading-6 text-stone-400 sm:text-base">
                        Join BookDrop and receive your first
                        personalised recommendation every Thursday.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-6 border-t border-stone-800 sm:mt-8"/>
                <SignupForm />
            </DialogContent>
        </Dialog>
    )
}