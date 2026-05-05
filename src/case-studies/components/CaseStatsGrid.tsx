import { caseStyles } from "../styles";
import type { CaseStatItem } from "../types";

interface CaseStatsGridProps {
    items: CaseStatItem[];
}

export function CaseStatsGrid({ items }: CaseStatsGridProps) {
    return (
        <div className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(([value, label]) => (
                <div key={`${value}-${label}`} className="rounded-md border p-6" style={caseStyles.statCard}>
                    <div className="text-[40px] leading-[1.1] font-light" style={caseStyles.statValue}>
                        {value}
                    </div>
                    <div className="mt-1 text-[13px]" style={caseStyles.statLabel}>
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
}
