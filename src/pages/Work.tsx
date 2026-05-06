import { useSearchParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { FileCard } from "../components/FileCard";
import { PROJECTS } from "../data/projects";

type FilterId = "engineering" | "film";

const FILTERS: { id: FilterId; label: string }[] = [
    { id: "engineering", label: "/Engineering" },
    { id: "film", label: "/Film" },
];

function normalizeTrack(track: string | null): FilterId {
    return track === "film" ? "film" : "engineering";
}

export function Work() {
    const [searchParams, setSearchParams] = useSearchParams();
    const active = normalizeTrack(searchParams.get("track"));

    const setTrack = (track: FilterId) => {
        const next = new URLSearchParams(searchParams);
        next.set("track", track);
        setSearchParams(next);
    };

    const filtered = PROJECTS.filter((project) => project.cat === active);

    return (
        <>
            <section className="py-14">
                <div className="page-wrap">
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
                        Projects across engineering and film. Browse by track.
                    </p>

                    {/* Filter tabs */}
                    <div
                        className="flex gap-0 mb-12 border-b overflow-x-auto scrollbar-hide"
                        style={{ borderColor: "var(--border-mid)" }}
                    >
                        {FILTERS.map((f) => {
                            const count = PROJECTS.filter((project) => project.cat === f.id).length;
                            const isActive = active === f.id;
                            return (
                                <button
                                    key={f.id}
                                    onClick={() => setTrack(f.id)}
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
