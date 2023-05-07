export default function ShimmerLoader({ repeatCount, type = '' }) {
    const skeletons = [];

    for (let i = 0; i < repeatCount; i++) {
        if (type === 'home-page-job-list') {
            {skeletons.push(
                <li className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg hover:border-solid hover:cursor-pointer" key={i}>
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="p-3 space-y-4">
                            <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>
                            <div className="flex space-x-4">
                                <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                                <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                                <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                                <div className="animate-pulse w-full h-3 bg-slate-200"></div>
                            </div>
                        </div>
                    </div>

                </li>
            )}
        } else {
            skeletons.push(
                <div className="divide-y divide-gray-200 shadow p-4 my-4 w-full mx-auto" key={i}>
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
     
    if(type === 'home-page-job-list') return <><ul className="grid grid-cols-3 gap-4 mt-4">{skeletons}</ul></>
    return <>{skeletons}</>;
};