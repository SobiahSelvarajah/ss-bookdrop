"use client";

import Link from "next/link";
import { BookX } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function ErrorPage() {
    return (
        <main className="flex min-h-[75vh] items-center justify-center px-8 py-24">
            <section className="mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-400/20">
                    <BookX
                        aria-hidden="true"
                        className="h-7 w-7 text-amber-300"
                    />
                </div>
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
                    Something went wrong
                </p>
                <h1 className="mt-4 font-heading text-5xl font-semibold text-stone-100 md:text-6xl">
                    We lost our place
                </h1>
                <p className="mx-auto mt-6 max-w-md leading-7 text-stone-400">
                    Something unexpected happened while loading this page.
                    You can try again or return to BookDrop.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button 
                        type="button"
                        className="bg-stone-100 px-6 text-stone-900 hover:bg-amber-300"
                    >
                        Try Again
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="border-stone-700 bg-transparent px-6 text-stone-200 hover:border-amber-300 hover:bg-stone-900 hover:text-amber-200"
                    >
                        <Link href="/">
                            Back to BookDrop
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}