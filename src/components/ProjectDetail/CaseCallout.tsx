import type { ReactNode } from "react";
import { caseStyles } from "../../case-studies/styles";

interface CaseCalloutProps {
    label: string;
    children: ReactNode;
}

export function CaseCallout({ label, children }: CaseCalloutProps) {
    return (
        <div className="my-6 border-l-[3px] px-5 py-4 text-[15px] leading-[1.6]" style={caseStyles.callout}>
            <strong style={caseStyles.calloutTitle}>{label}</strong> - {children}
        </div>
    );
}
