import { caseStyles } from "../../case-studies/styles";
import type { CaseChecklistItem } from "../../case-studies/types";

interface CaseChecklistProps {
    items: CaseChecklistItem[];
    middleWidth?: number;
}

export function CaseChecklist({ items, middleWidth = 160 }: CaseChecklistProps) {
    return (
        <ul className="m-0 list-none p-0">
            {items.map(([title, details]) => (
                <li
                    key={`${title}-${details}`}
                    className="grid gap-4 border-t py-3.5"
                    style={{
                        ...caseStyles.listBorder,
                        gridTemplateColumns: `auto ${middleWidth}px minmax(0, 1fr)`,
                    }}
                >
                    <span style={caseStyles.headingPrefix}>✓</span>
                    <strong className="font-medium" style={caseStyles.strong}>
                        {title}
                    </strong>
                    <span>{details}</span>
                </li>
            ))}
        </ul>
    );
}
