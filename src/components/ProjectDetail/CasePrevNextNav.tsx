import { Link } from "react-router-dom";
import type { CaseMeta } from "../../case-studies/types";

interface CasePrevNextNavProps {
    meta: CaseMeta;
}

export function CasePrevNextNav({ meta }: CasePrevNextNavProps) {
    return (
        <nav className="mt-20 flex justify-between border-t pt-8" style={{ borderColor: "var(--border-mid)" }}>
            {meta.prev ? (
                <Link to={`/projects/${meta.prev.id}`} className="no-underline" style={{ color: "inherit" }}>
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--fg-5)" }}>
                        Previous
                    </div>
                    <div className="text-lg font-light" style={{ color: "var(--fg-1)" }}>
                        {meta.prev.title}
                    </div>
                </Link>
            ) : (
                <div />
            )}

            {meta.next ? (
                <Link to={`/projects/${meta.next.id}`} className="text-right no-underline" style={{ color: "inherit" }}>
                    <div className="mb-1.5 text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--fg-5)" }}>
                        Next
                    </div>
                    <div className="text-lg font-light" style={{ color: "var(--fg-1)" }}>
                        {meta.next.title}
                    </div>
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
