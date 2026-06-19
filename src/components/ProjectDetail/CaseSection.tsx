import type { ReactNode } from "react";
import { CaseHeading } from "./CaseHeading";
import { CaseCallout } from "./CaseCallout";
import { toAnchorId } from "./useActiveCaseSection";

interface CaseSectionProps {
    heading: string;
    tldr?: string;
    children: ReactNode;
}

export function CaseSection({ heading, tldr, children }: CaseSectionProps) {
    return (
        <section>
            <CaseHeading id={toAnchorId(heading)}>{heading}</CaseHeading>
            {tldr && <CaseCallout label="TL;DR">{tldr}</CaseCallout>}
            <div className="flex flex-col gap-3">{children}</div>
        </section>
    );
}
