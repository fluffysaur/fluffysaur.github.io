import { Tag } from "../Tag";
import type { CaseMeta } from "../../case-studies/types";

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
        <div className="mt-7 border-b pb-7" style={{ borderColor: "var(--border-mid)" }}>
            <div className="mb-4 flex items-baseline gap-3 font-mono text-sm" style={{ color: "var(--fg-5)" }}>
                <span>projects</span>
                <span>/</span>
                <span className="font-bold text-accent">{meta.id}</span>
                <Tag ghost>Public</Tag>
            </div>

            <h1 className="mb-4 text-[56px] font-light tracking-[-0.01em]" style={{ color: "var(--fg-1)" }}>
                <strong>{leadingTitle}</strong>
                {trailingTitle}
            </h1>

            <p className="mb-6 text-[20px] font-light leading-relaxed" style={{ color: "var(--fg-3)" }}>
                {meta.subtitle}
            </p>

            <div className="mb-5 flex gap-4 text-sm" style={{ color: "var(--fg-5)" }}>
                <span>Date: {meta.dates}</span>
                <span>|</span>
                <span>Role: {meta.role}</span>
                <span>|</span>
                <span>Team: {meta.team}</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
                {meta.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
        </div>
    );
}
