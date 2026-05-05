export function StatusBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-20 h-7 bg-accent text-graphite flex items-center font-mono text-[11px] font-medium"
      style={{ paddingLeft: 56 }}
    >
      <span className="px-3">● main</span>
      <span className="px-3">↑1 ↓0</span>
      <span className="px-3">typescript: 5.4</span>
      <span className="px-3 ml-auto">Singapore · UTC+8</span>
      <span className="px-3">spaces: 2</span>
      <span className="px-3">UTF-8</span>
    </div>
  )
}
