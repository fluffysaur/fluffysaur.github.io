import type { CurrentItem } from "./about-data";

interface AboutCurrentlyProps {
    items: CurrentItem[];
}

export function AboutCurrently({ items }: AboutCurrentlyProps) {
    return (
        <div className="mb-16">
            <h2 className="mb-4 text-(--on-surface)" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
                <strong>Currently</strong>
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((item) => (
                    <div
                        key={item.key}
                        className="rounded-lg border border-(--outline-variant) bg-(--surface-container-low) p-5"
                    >
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-(--on-surface-subtle)">
                            {item.key}
                        </p>
                        <p className="m-0 text-[15px] font-light text-(--on-surface)">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
