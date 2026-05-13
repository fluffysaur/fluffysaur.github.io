import { Link } from "react-router-dom";
import type { CaseNeighbour } from "../../case-studies/types";

interface CasePrevNextNavProps {
    prev: CaseNeighbour;
    next: CaseNeighbour;
}

export function CasePrevNextNav({ prev, next }: CasePrevNextNavProps) {
    return (
        <nav className="mt-20 flex justify-between border-t pt-8 border-(--outline-variant)">
            {prev ? (
                <Link to={`/projects/${prev.id}`} className="no-underline">
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-(--on-surface-muted)">
                        Previous
                    </div>
                    <div className="text-lg font-light text-(--on-surface)">{prev.title}</div>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link to={`/projects/${next.id}`} className="text-right no-underline">
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-(--on-surface-muted)">Next</div>
                    <div className="text-lg font-light text-(--on-surface)">{next.title}</div>
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
