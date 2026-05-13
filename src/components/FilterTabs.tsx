import { Tab } from "./Tab";

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
                    <Tab
                        key={f.id}
                        variant="filter"
                        active={isActive}
                        onClick={() => onSelect(f.id)}
                        className="cursor-pointer font-[inherit]"
                    >
                        {f.label}
                        {counts && <span className="ml-2 text-[11px] text-(--on-surface-faint)">{counts[f.id]}</span>}
                    </Tab>
                );
            })}
        </div>
    );
}
