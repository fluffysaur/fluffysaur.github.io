import type { ReactNode } from "react";
import { caseStyles } from "../styles";

interface CaseContentProps {
    children: ReactNode;
}

export function CaseContent({ children }: CaseContentProps) {
    return (
        <div className="text-[17px] leading-[1.75]" style={caseStyles.content}>
            {children}
        </div>
    );
}
