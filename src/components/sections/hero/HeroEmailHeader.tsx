

export default function HeroEmailHeader() {
    return (
        <section className="border-b border-stone-800 pb-4">
            <div className="mb-4 flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <h3 className="sr-only">
                Email Details
            </h3>
            <dl className="space-y-2 text-sm">
                <div className="flex">
                    <dt className="w-16 text-stone-500">
                        From
                    </dt>
                    <dd className="text-stone-200">
                        BookDrop &lt;hello@bookdrop.com&gt;
                    </dd>
                </div>
                <div className="flex">
                    <dt className="w-16 text-stone-500">
                        To
                    </dt>
                    <dd className="text-stone-300">
                        daniel@email.com
                    </dd>
                </div>
                <div className="flex">
                    <dt className="w-16 text-stone-500">
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