import { useEffect, useState, type RefObject } from "react";

export const toAnchorId = (value: string) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

export function useActiveCaseSection(contentRef: RefObject<HTMLDivElement | null>, toc: string[]) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (!contentRef.current) return;

        const headings = Array.from(contentRef.current.querySelectorAll<HTMLHeadingElement>("h2"));
        headings.forEach((heading, index) => {
            const tocEntry = toc[index];
            const fallback = heading.textContent ?? "";
            heading.id = toAnchorId(tocEntry ?? fallback);
        });

        const headingIds = headings.map((heading) => heading.id).filter(Boolean);
        const hashId = window.location.hash.replace("#", "");
        const initialSection = headingIds.includes(hashId) ? hashId : headingIds[0];
        if (initialSection) setActiveSection(initialSection);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible[0]) {
                    setActiveSection((visible[0].target as HTMLHeadingElement).id);
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -65% 0px",
                threshold: [0.2, 0.5, 0.8],
            },
        );

        headings.forEach((heading) => observer.observe(heading));

        const onHashChange = () => {
            const nextHashId = window.location.hash.replace("#", "");
            if (headingIds.includes(nextHashId)) setActiveSection(nextHashId);
        };

        window.addEventListener("hashchange", onHashChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", onHashChange);
        };
    }, [contentRef, toc]);

    return { activeSection, setActiveSection };
}
