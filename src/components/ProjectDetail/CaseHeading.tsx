import type { ReactNode } from "react";
import { caseStyles } from "../../case-studies/styles";

interface CaseHeadingProps {
    children: ReactNode;
    id?: string;
}

export function CaseHeading({ children, id }: CaseHeadingProps) {
    return (
        <h2
            id={id}
            className="mt-14 mb-5 border-b pb-3 text-[32px] font-light tracking-[-0.01em] scroll-mt-24"
            style={caseStyles.heading}
        >
            <span className="font-mono font-normal" style={caseStyles.headingPrefix}>
                ##{" "}
            </span>
            {children}
        </h2>
    );
}
