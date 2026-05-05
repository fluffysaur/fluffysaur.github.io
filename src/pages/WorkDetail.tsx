import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../components/Footer";
import { Tag } from "../components/Tag";
import { meta as interseedMeta, InterseedContent } from "../case-studies/interseed";
import { meta as staffanyMeta, StaffanyContent } from "../case-studies/staffany";
import { meta as launchpadMeta, LaunchpadContent } from "../case-studies/launchpad";
import { meta as rnMeta, RnMigrationContent } from "../case-studies/rn-migration";

type CaseMeta = {
    id: string;
    title: string;
    subtitle: string;
    repoLabel: string;
    dates: string;
    role: string;
    team: string;
    tags: string[];
    toc: string[];
    prev: { id: string; title: string } | null;
    next: { id: string; title: string } | null;
};

const CASES: Record<string, { meta: CaseMeta; Content: () => React.ReactElement }> = {
    interseed: { meta: interseedMeta, Content: InterseedContent },
    staffany: { meta: staffanyMeta, Content: StaffanyContent },
    launchpad: { meta: launchpadMeta, Content: LaunchpadContent },
    "rn-migration": { meta: rnMeta, Content: RnMigrationContent },
};

const toAnchorId = (value: string) =>
    value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

export function WorkDetail() {
    const { id } = useParams<{ id: string }>();
    const entry = id ? CASES[id] : undefined;
    const contentRef = useRef<HTMLDivElement>(null);

    if (!entry)
        return (
            <Navigate
                to="/work"
                replace
            />
        );

    const { meta, Content } = entry;
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (!contentRef.current) return;

        const headings = Array.from(contentRef.current.querySelectorAll<HTMLHeadingElement>("h2"));
        headings.forEach((heading, index) => {
            const tocEntry = meta.toc[index];
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
    }, [meta.toc]);

    return (
        <>
            <article className="py-14 pb-24">
                <div
                    className="mx-auto px-8"
                    style={{ maxWidth: 880 }}
                >
                    {/* Back link */}
                    <Link
                        to="/work"
                        className="font-mono text-[13px] no-underline transition-colors hover:text-accent"
                        style={{ color: "var(--fg-5)" }}
                    >
                        ← /work
                    </Link>

                    {/* Repo header */}
                    <div
                        className="mt-7 pb-7 border-b"
                        style={{ borderColor: "var(--border-mid)" }}
                    >
                        <div
                            className="flex items-baseline gap-3 font-mono text-sm mb-4"
                            style={{ color: "var(--fg-5)" }}
                        >
                            <span>fluffysaur</span>
                            <span>/</span>
                            <span className="text-accent font-bold">{meta.repoLabel}</span>
                            <Tag ghost>Public</Tag>
                        </div>

                        <h1
                            className="font-light mb-4"
                            style={{ fontSize: 56, letterSpacing: "-0.01em", color: "var(--fg-1)" }}
                        >
                            <strong>{meta.title.split(":")[0]}</strong>
                            {meta.title.includes(":") ? `:${meta.title.split(":")[1]}` : ""}
                        </h1>

                        <p
                            className="font-light text-[20px] leading-relaxed mb-6"
                            style={{ color: "var(--fg-3)" }}
                        >
                            {meta.subtitle}
                        </p>

                        <div
                            className="flex gap-4 text-sm mb-5"
                            style={{ color: "var(--fg-5)" }}
                        >
                            <span>📅 {meta.dates}</span>
                            <span>·</span>
                            <span>🧑 {meta.role}</span>
                            <span>·</span>
                            <span>👥 {meta.team}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {meta.tags.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                        </div>
                    </div>

                    {/* Layout: body + TOC sidebar */}
                    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_200px]">
                        {/* Body */}
                        <div ref={contentRef}>
                            <Content />
                        </div>

                        {/* TOC */}
                        <aside
                            className="self-start rounded-md p-4 text-sm lg:sticky lg:top-24"
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-mid)",
                            }}
                        >
                            <p
                                className="text-[10px] tracking-[0.22em] uppercase font-medium mb-3"
                                style={{ color: "var(--fg-6)" }}
                            >
                                On this page
                            </p>
                            {meta.toc.map((t, i) => (
                                <a
                                    key={i}
                                    href={`#${toAnchorId(t)}`}
                                    onClick={() => setActiveSection(toAnchorId(t))}
                                    className="block py-1.5 no-underline text-sm transition-colors hover:text-accent"
                                    style={{ color: activeSection === toAnchorId(t) ? "#f2cb05" : "var(--fg-4)" }}
                                >
                                    {t}
                                </a>
                            ))}
                        </aside>
                    </div>

                    {/* Prev / Next */}
                    <nav
                        className="mt-20 pt-8 border-t flex justify-between"
                        style={{ borderColor: "var(--border-mid)" }}
                    >
                        {meta.prev ? (
                            <Link
                                to={`/work/${meta.prev.id}`}
                                className="no-underline"
                                style={{ color: "inherit" }}
                            >
                                <div
                                    className="text-[11px] tracking-[0.2em] uppercase mb-1.5"
                                    style={{ color: "var(--fg-5)" }}
                                >
                                    ← Previous
                                </div>
                                <div
                                    className="text-lg font-light"
                                    style={{ color: "var(--fg-1)" }}
                                >
                                    {meta.prev.title}
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {meta.next ? (
                            <Link
                                to={`/work/${meta.next.id}`}
                                className="no-underline text-right"
                                style={{ color: "inherit" }}
                            >
                                <div
                                    className="text-[11px] tracking-[0.2em] uppercase mb-1.5"
                                    style={{ color: "var(--fg-5)" }}
                                >
                                    Next →
                                </div>
                                <div
                                    className="text-lg font-light"
                                    style={{ color: "var(--fg-1)" }}
                                >
                                    {meta.next.title}
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </nav>
                </div>
            </article>
            <Footer />
        </>
    );
}
