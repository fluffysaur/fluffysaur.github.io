interface FilterTabsProps<T extends string> {
    filters: ReadonlyArray<{ id: T; label: string }>;
    active: T;
    counts?: Record<T, number>;
    onSelect: (id: T) => void;
}

export function FilterTabs<T extends string>({ filters, active, counts, onSelect }: FilterTabsProps<T>) {
    return (
        <div className="mb-12 flex gap-0 overflow-x-auto border-b border-(--outline-variant) scrollbar-hide">
            {filters.map((f) => {
                const isActive = active === f.id;
                return (
                    <button
                        key={f.id}
                        onClick={() => onSelect(f.id)}
                        className={[
                            "-mb-px shrink-0 cursor-pointer whitespace-nowrap border-x-0 border-t-0 border-b-2 bg-transparent px-4 py-3.5 text-[12px] font-medium tracking-[0.2em] uppercase transition-all font-[inherit]",
                            isActive ? "border-primary text-primary" : "border-transparent text-(--on-surface-variant)",
                        ].join(" ")}
                    >
                        {f.label}
                        {counts && <span className="ml-2 text-[11px] text-(--on-surface-faint)">{counts[f.id]}</span>}
                    </button>
                );
            })}
        </div>
    );
}
