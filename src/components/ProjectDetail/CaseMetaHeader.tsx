import { Tag } from "../Tag";
import type { CaseMeta } from "../../case-studies/types";
import { TerminalComment, TerminalPath } from "../TerminalPath";

interface CaseMetaHeaderProps {
    meta: CaseMeta;
}

function splitCaseTitle(title: string) {
    const colonIndex = title.indexOf(":");
    if (colonIndex === -1) {
        return { leadingTitle: title, trailingTitle: "" };
    }
    return {
        leadingTitle: title.slice(0, colonIndex),
        trailingTitle: title.slice(colonIndex),
    };
}

export function CaseMetaHeader({ meta }: CaseMetaHeaderProps) {
    const { leadingTitle, trailingTitle } = splitCaseTitle(meta.title);

    return (
        <div className="mt-7 border-b pb-7 border-(--outline-variant)">
            <TerminalPath parts={["projects", meta.id]} />

            <h1 className="mb-4 text-[56px] font-light tracking-[-0.01em] text-(--on-surface)">
                <strong>{leadingTitle}</strong>
                {trailingTitle}
            </h1>

            <p className="mb-6 text-[20px] font-light leading-relaxed text-(--on-surface-medium)">
                {meta.subtitle}
            </p>

            <TerminalComment className="mb-5">
                {meta.dates} · {meta.role} · {meta.team}
            </TerminalComment>

            <div className="flex flex-wrap gap-1.5">
                {meta.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
        </div>
    );
}
