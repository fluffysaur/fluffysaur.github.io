import { useState } from "react";
import { Footer } from "../components/Footer";
import { FileCard } from "../components/FileCard";
import { PROJECTS } from "../data/projects";
import type { ProjectType, ProjectCat } from "../types";

type FilterId = "all" | ProjectType | ProjectCat;

const FILTERS: { id: FilterId; label: string }[] = [
    { id: "all", label: "All" },
    { id: "work", label: "Work Projects" },
    { id: "personal", label: "Personal" },
    { id: "film", label: "Film" },
    { id: "design", label: "Design" },
];

export function Work() {
    const [active, setActive] = useState<FilterId>("all");

    const filtered = PROJECTS.filter((p) => {
        if (active === "all") return true;
        if (active === "work" || active === "personal" || active === "film") return p.type === active;
        return p.cat === active;
    });

    return (
        <>
            <section className="py-14">
                <div className="max-w-285 mx-auto px-8">
                    <p
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                        style={{ color: "var(--fg-6)" }}
                    >
                        <span className="inline-block w-6 h-px bg-accent" />
                        /work
                    </p>
                    <h1
                        className="font-light mb-6"
                        style={{ fontSize: 72, letterSpacing: "-0.01em", color: "var(--fg-1)" }}
                    >
                        Everything I've <strong>shipped</strong>.
                    </h1>
                    <p
                        className="font-light text-[20px] mb-14"
                        style={{ color: "var(--fg-3)", maxWidth: "60ch" }}
                    >
                        Projects across software engineering, design, and film. Filter by type or scroll the lot.
                    </p>

                    {/* Filter tabs */}
                    <div
                        className="flex gap-0 mb-12 border-b"
                        style={{ borderColor: "var(--border-mid)" }}
                    >
                        {FILTERS.map((f) => {
                            const count =
                                f.id === "all"
                                    ? PROJECTS.length
                                    : PROJECTS.filter((p) => p.type === f.id || p.cat === f.id).length;
                            const isActive = active === f.id;
                            return (
                                <button
                                    key={f.id}
                                    onClick={() => setActive(f.id)}
                                    className="px-4 py-3.5 border-b-2 font-medium text-[12px] tracking-[0.2em] uppercase cursor-pointer bg-transparent border-x-0 border-t-0 transition-all"
                                    style={{
                                        color: isActive ? "#f2cb05" : "var(--fg-4)",
                                        borderBottomColor: isActive ? "#f2cb05" : "transparent",
                                        marginBottom: -1,
                                        fontFamily: "inherit",
                                    }}
                                >
                                    {f.label}
                                    <span
                                        className="ml-2 text-[11px]"
                                        style={{ color: "var(--fg-7)" }}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {filtered.map((p) => (
                            <FileCard
                                key={p.id}
                                project={p}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
