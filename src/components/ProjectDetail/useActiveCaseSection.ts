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

        const getActiveFromScroll = () => {
            if (!nodes.length) return;

            // Keep in sync with sticky nav/header spacing so highlight updates at the right moment.
            const offset = 140;
            let nextActive = nodes[0].id;

            for (const node of nodes) {
                const top = node.getBoundingClientRect().top;
                if (top - offset <= 0) {
                    nextActive = node.id;
                } else {
                    break;
                }
            }

            setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
        };

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                getActiveFromScroll();
                ticking = false;
            });
        };

        getActiveFromScroll();
        const pageScroller = document.getElementById("page-scroll-container");
        pageScroller?.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        const onHashChange = () => {
            const next = window.location.hash.replace("#", "");
            if (ids.includes(next)) setActiveSection(next);
        };
        window.addEventListener("hashchange", onHashChange);

        return () => {
            pageScroller?.removeEventListener("scroll", onScroll);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            window.removeEventListener("hashchange", onHashChange);
        };
    }, [contentRef, headings]);

    return { activeSection, setActiveSection };
}
