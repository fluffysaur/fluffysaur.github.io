import { useState } from "react";
import { Footer } from "../components/Footer";
import { FileCard } from "../components/FileCard";
import { PROJECTS } from "../data/projects";
import type { ProjectCat } from "../types";

type FilterId = "development" | "design" | "film";

const FILTERS: { id: FilterId; label: string }[] = [
    { id: "development", label: "/Development" },
    { id: "design", label: "/Design" },
    { id: "film", label: "/Film" },
];

const designCategories: ProjectCat[] = ["product", "design"];

export function Work() {
    const [active, setActive] = useState<FilterId>("development");

    const filtered = PROJECTS.filter((p) => {
        if (active === "development") return p.cat === "fullstack";
        if (active === "design") return designCategories.includes(p.cat);
        return p.cat === "film";
    });

    return (
        <>
            <section className="py-14">
                <div className="max-w-285 mx-auto px-5 md:px-8">
                    <p
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                        style={{ color: "var(--fg-6)" }}
                    >
                        <span className="inline-block w-6 h-px bg-accent" />
                        /work
                    </p>
                    <h1
                        className="font-light mb-6"
                        style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.01em", color: "var(--fg-1)" }}
                    >
                        Everything I've <strong>shipped</strong>.
                    </h1>
                    <p className="font-light text-[20px] mb-14" style={{ color: "var(--fg-3)", maxWidth: "60ch" }}>
                        Projects across software engineering, design, and film. Browse by track.
                    </p>

                    {/* Filter tabs */}
                    <div
                        className="flex gap-0 mb-12 border-b overflow-x-auto scrollbar-hide"
                        style={{ borderColor: "var(--border-mid)" }}
                    >
                        {FILTERS.map((f) => {
                            const count = PROJECTS.filter((p) => {
                                if (f.id === "development") return p.cat === "fullstack";
                                if (f.id === "design") return designCategories.includes(p.cat);
                                return p.cat === "film";
                            }).length;
                            const isActive = active === f.id;
                            return (
                                <button
                                    key={f.id}
                                    onClick={() => setActive(f.id)}
                                    className="px-4 py-3.5 border-b-2 font-medium text-[12px] tracking-[0.2em] uppercase cursor-pointer bg-transparent border-x-0 border-t-0 transition-all shrink-0 whitespace-nowrap"
                                    style={{
                                        color: isActive ? "#f2cb05" : "var(--fg-4)",
                                        borderBottomColor: isActive ? "#f2cb05" : "transparent",
                                        marginBottom: -1,
                                        fontFamily: "inherit",
                                    }}
                                >
                                    {f.label}
                                    <span className="ml-2 text-[11px]" style={{ color: "var(--fg-7)" }}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((p) => (
                            <FileCard key={p.id} project={p} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
