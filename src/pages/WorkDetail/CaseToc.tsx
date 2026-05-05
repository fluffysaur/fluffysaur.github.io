import { toAnchorId } from "./useActiveCaseSection";

interface CaseTocProps {
    toc: string[];
    activeSection: string;
    onSectionSelect: (sectionId: string) => void;
}

export function CaseToc({ toc, activeSection, onSectionSelect }: CaseTocProps) {
    return (
        <aside
            className="self-start rounded-md p-4 text-sm lg:sticky lg:top-24"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-mid)" }}
        >
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--fg-6)" }}>
                On this page
            </p>
            {toc.map((title, index) => {
                const sectionId = toAnchorId(title);
                return (
                    <a
                        key={`${title}-${index}`}
                        href={`#${sectionId}`}
                        onClick={() => onSectionSelect(sectionId)}
                        className="block py-1.5 text-sm no-underline transition-colors hover:text-accent"
                        style={{ color: activeSection === sectionId ? "#f2cb05" : "var(--fg-4)" }}
                    >
                        {title}
                    </a>
                );
            })}
        </aside>
    );
}
