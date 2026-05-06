import type { ReactNode } from "react";
import { caseStyles } from "../../case-studies/styles";

interface CaseHeadingProps {
    children: ReactNode;
}

export function CaseHeading({ children }: CaseHeadingProps) {
    return (
        <h2 className="mt-14 mb-5 border-b pb-3 text-[32px] font-light tracking-[-0.01em]" style={caseStyles.heading}>
            <span className="font-mono font-normal" style={caseStyles.headingPrefix}>
                ##{" "}
            </span>
            {children}
        </h2>
    );
}
