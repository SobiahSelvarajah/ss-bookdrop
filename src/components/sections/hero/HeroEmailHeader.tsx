

export default function HeroEmailHeader() {
    return (
        <section className="border-b border-stone-800 pb-4">
            <div 
                aria-hidden="true"
                className="mb-4 flex items-center gap-2"
            >
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <h3 className="sr-only">
                Email Details
            </h3>
            <dl className="space-y-2 text-xs sm:text-sm">
                <div className="grid grid-cols-[3.5rem_1fr] gap-2">
                    <dt className="text-stone-500">
                        From
                    </dt>
                    <dd className="break-all text-stone-200 sm:break-normal">
                        BookDrop &lt;hello@bookdrop.com&gt;
                    </dd>
                </div>
                <div className="grid grid-cols-[3.5rem_1fr] gap-2">
                    <dt className="text-stone-500">
                        To
                    </dt>
                    <dd className="break-all text-stone-200 sm:break-normal">
                        daniel@email.com
                    </dd>
                </div>
                <div className="grid grid-cols-[3.5rem_1fr] gap-2">
                    <dt className="text-stone-500">
                        Subject
                    </dt>
                    <dd className="font-medium text-stone-100">
                        📚 Your Weekly Mystery Pick
                    </dd>
                </div>
            </dl>
        </section> 
    )
}