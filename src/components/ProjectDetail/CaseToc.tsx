import { toAnchorId } from "./useActiveCaseSection";
import { Button } from "../Button";

interface CaseTocProps {
    headings: string[];
    activeSection: string;
    onSectionSelect: (sectionId: string) => void;
}

export function CaseToc({ headings, activeSection, onSectionSelect }: CaseTocProps) {
    const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        onSectionSelect(sectionId);

        const heading = document.getElementById(sectionId);
        const pageScroller = document.getElementById("page-scroll-container");

        if (!heading) return;

        if (pageScroller) {
            const headingTop = heading.getBoundingClientRect().top;
            const scrollerTop = pageScroller.getBoundingClientRect().top;
            pageScroller.scrollTo({
                top: pageScroller.scrollTop + headingTop - scrollerTop,
                left: 0,
                behavior: "smooth",
            });
            window.history.pushState(null, "", `#${sectionId}`);
            return;
        }

        heading.scrollIntoView({ block: "start", behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
    };

    return (
        <aside className="hidden self-start rounded-md border border-(--outline-variant) bg-(--surface-container-low) p-4 text-sm lg:sticky lg:top-14 lg:block">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-(--on-surface-subtle)">
                On this page
            </p>
            {headings.map((heading) => {
                const sectionId = toAnchorId(heading);
                return (
                    <Button
                        key={sectionId}
                        href={`#${sectionId}`}
                        variant="text"
                        size="sm"
                        onClick={(event) => handleSectionClick(event, sectionId)}
                        className={`block py-1.5 ${
                            activeSection === sectionId ? "text-primary" : "text-(--on-surface-variant)"
                        }`}
                    >
                        {heading}
                    </Button>
                );
            })}
        </aside>
    );
}
