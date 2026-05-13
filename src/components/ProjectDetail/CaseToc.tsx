import { toAnchorId } from "./useActiveCaseSection";

interface CaseTocProps {
    headings: string[];
    activeSection: string;
    onSectionSelect: (sectionId: string) => void;
}

export function CaseToc({ headings, activeSection, onSectionSelect }: CaseTocProps) {
    return (
        <aside className="self-start rounded-md border border-(--outline-variant) bg-(--surface-container-low) p-4 text-sm lg:sticky lg:top-24">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-(--on-surface-subtle)">
                On this page
            </p>
            {headings.map((heading) => {
                const sectionId = toAnchorId(heading);
                return (
                    <a
                        key={sectionId}
                        href={`#${sectionId}`}
                        onClick={() => onSectionSelect(sectionId)}
                        className={`block py-1.5 text-sm no-underline transition-colors hover:text-primary ${
                            activeSection === sectionId ? "text-primary" : "text-(--on-surface-variant)"
                        }`}
                    >
                        {heading}
                    </a>
                );
            })}
        </aside>
    );
}
