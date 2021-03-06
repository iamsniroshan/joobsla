export default function BounceLoader() {
    return (
        <>
            <div className="flex items-center justify-center space-x-2 ">
                <div className="w-10 h-10 bg-indigo-600 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-10 h-10 bg-cyan-600 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.75s' }}></div>
                <div className="w-10 h-10 bg-green-700 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '1s' }}></div>
            </div>
        </>
    )
}

