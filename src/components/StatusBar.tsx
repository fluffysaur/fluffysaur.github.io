export function StatusBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-20 h-7 bg-primary text-tertiary flex items-center font-mono text-[11px] font-medium md:pl-14">
            <span className="px-3">● main</span>
            <span className="px-3 hidden sm:inline">↑1 ↓0</span>
            <span className="px-3 hidden sm:inline">typescript: 5.4</span>
            <span className="px-3 ml-auto">Singapore · UTC+8</span>
            <span className="px-3 hidden sm:inline">spaces: 4</span>
            <span className="px-3 hidden sm:inline">UTF-8</span>
        </div>
    );
}
