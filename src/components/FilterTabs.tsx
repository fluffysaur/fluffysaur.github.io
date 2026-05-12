interface FilterTabsProps<T extends string> {
    filters: ReadonlyArray<{ id: T; label: string }>;
    active: T;
    counts?: Record<T, number>;
    onSelect: (id: T) => void;
}

export function FilterTabs<T extends string>({ filters, active, counts, onSelect }: FilterTabsProps<T>) {
    return (
        <div
            className="flex gap-0 mb-12 border-b overflow-x-auto scrollbar-hide"
            style={{ borderColor: "var(--border-mid)" }}
        >
            {filters.map((f) => {
                const isActive = active === f.id;
                return (
                    <button
                        key={f.id}
                        onClick={() => onSelect(f.id)}
                        className="px-4 py-3.5 border-b-2 font-medium text-[12px] tracking-[0.2em] uppercase cursor-pointer bg-transparent border-x-0 border-t-0 transition-all shrink-0 whitespace-nowrap"
                        style={{
                            color: isActive ? "#f2cb05" : "var(--fg-4)",
                            borderBottomColor: isActive ? "#f2cb05" : "transparent",
                            marginBottom: -1,
                            fontFamily: "inherit",
                        }}
                    >
                        {f.label}
                        {counts && (
                            <span className="ml-2 text-[11px]" style={{ color: "var(--fg-7)" }}>
                                {counts[f.id]}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
