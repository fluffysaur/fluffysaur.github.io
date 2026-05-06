import type { CurrentItem } from "./about-data";

interface AboutCurrentlyProps {
    items: CurrentItem[];
}

export function AboutCurrently({ items }: AboutCurrentlyProps) {
    return (
        <div className="mb-16">
            <h2 className="mb-4" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--fg-1)" }}>
                <strong>Currently</strong>
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((item) => (
                    <div
                        key={item.key}
                        className="rounded-lg border p-5"
                        style={{ background: "var(--bg-card)", borderColor: "var(--border-mid)" }}
                    >
                        <p
                            className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em]"
                            style={{ color: "var(--fg-6)" }}
                        >
                            {item.key}
                        </p>
                        <p className="m-0 text-[15px] font-light" style={{ color: "var(--fg-1)" }}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
