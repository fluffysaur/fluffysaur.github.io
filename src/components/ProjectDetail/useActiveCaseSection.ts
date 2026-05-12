import { useEffect, useState, type RefObject } from "react";

export const toAnchorId = (value: string) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

export function useActiveCaseSection(contentRef: RefObject<HTMLDivElement | null>, headings: string[]) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (!contentRef.current) return;

        const ids = headings.map(toAnchorId);
        const nodes = ids
            .map((id) => contentRef.current?.querySelector<HTMLHeadingElement>(`#${id}`))
            .filter((node): node is HTMLHeadingElement => Boolean(node));

        const hashId = window.location.hash.replace("#", "");
        const initial = ids.includes(hashId) ? hashId : ids[0];
        if (initial) setActiveSection(initial);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible[0]) {
                    setActiveSection((visible[0].target as HTMLHeadingElement).id);
                }
            },
            { root: null, rootMargin: "-20% 0px -65% 0px", threshold: [0.2, 0.5, 0.8] },
        );

        nodes.forEach((node) => observer.observe(node));

        const onHashChange = () => {
            const next = window.location.hash.replace("#", "");
            if (ids.includes(next)) setActiveSection(next);
        };
        window.addEventListener("hashchange", onHashChange);

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", onHashChange);
        };
    }, [contentRef, headings]);

    return { activeSection, setActiveSection };
}
