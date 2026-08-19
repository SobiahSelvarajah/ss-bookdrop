import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function NotFound() {
    return (
        <main className="flex min-h-[75vh] items-center justify-center px-8 py-24">
            <section className="mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-400/20">
                    <BookOpen
                        aria-hidden="true"
                        className="h-7 w-7 text-amber-300"
                    />
                </div>
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-amber-300">
                    404
                </p>
                <h1 className="mt-4 font-heading text-5xl font-semibold text-stone-100 md:text-6xl">
                    This page got lost between the chapters.
                </h1>
                <p className="mx-auto mt-6 max-w-md leading-7 text-stone-400">
                    We couldn&apos;t find the page that you were looking for.
                    Let&apos;s get you back to your next great read.
                </p>
                <Button
                    asChild
                    className="mt-10 bg-stone-100 px-6 text-stone-900 hover:bg-amber-300"
                >
                    <Link href="/">
                        Back to BookDrop
                    </Link>
                </Button>
            </section>
        </main>
    );
}