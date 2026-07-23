"use client";

import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

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
            <DialogContent className="border-stone-800 bg-stone-950 text-stone-100 sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="font-heading text-3xl">
                        Start your free week
                    </DialogTitle>
                    <DialogDescription className="text-stone-400">
                        Join BookDrop and receive your first
                        personalised recommendation every Thursday.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}