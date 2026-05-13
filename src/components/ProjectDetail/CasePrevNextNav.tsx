import type { CaseNeighbour } from "../../case-studies/types";
import { Button } from "../Button";

interface CasePrevNextNavProps {
    prev: CaseNeighbour;
    next: CaseNeighbour;
}

export function CasePrevNextNav({ prev, next }: CasePrevNextNavProps) {
    return (
        <nav className="mt-20 flex justify-between border-t pt-8 border-(--outline-variant)">
            {prev ? (
                <Button to={`/projects/${prev.id}`} variant="text" className="flex flex-col">
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-(--on-surface-muted)">
                        Previous
                    </div>
                    <div className="text-lg font-light text-(--on-surface)">{prev.title}</div>
                </Button>
            ) : (
                <div />
            )}

            {next ? (
                <Button to={`/projects/${next.id}`} variant="text" className="flex flex-col text-right">
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-(--on-surface-muted)">Next</div>
                    <div className="text-lg font-light text-(--on-surface)">{next.title}</div>
                </Button>
            ) : (
                <div />
            )}
        </nav>
    );
}
