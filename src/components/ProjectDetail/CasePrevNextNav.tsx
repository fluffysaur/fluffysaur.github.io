import { Link } from "react-router-dom";
import type { CaseNeighbour } from "../../case-studies/types";

interface CasePrevNextNavProps {
    prev: CaseNeighbour;
    next: CaseNeighbour;
}

export function CasePrevNextNav({ prev, next }: CasePrevNextNavProps) {
    return (
        <nav className="mt-20 flex justify-between border-t pt-8" style={{ borderColor: "var(--border-mid)" }}>
            {prev ? (
                <Link to={`/projects/${prev.id}`} className="no-underline" style={{ color: "inherit" }}>
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--fg-5)" }}>
                        Previous
                    </div>
                    <div className="text-lg font-light" style={{ color: "var(--fg-1)" }}>
                        {prev.title}
                    </div>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link to={`/projects/${next.id}`} className="text-right no-underline" style={{ color: "inherit" }}>
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--fg-5)" }}>
                        Next
                    </div>
                    <div className="text-lg font-light" style={{ color: "var(--fg-1)" }}>
                        {next.title}
                    </div>
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
