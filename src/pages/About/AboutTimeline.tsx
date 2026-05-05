import type { TimelineEntry } from "../../types";

interface AboutTimelineProps {
    entries: TimelineEntry[];
}

export function AboutTimeline({ entries }: AboutTimelineProps) {
    return (
        <div className="mb-16">
            <h2 className="mb-4" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--fg-1)" }}>
                The <strong>journey</strong>
            </h2>
            {entries.map((entry, index) => (
                <div
                    key={`${entry.year}-${entry.title}`}
                    className={`grid items-baseline gap-4 py-6 grid-cols-[70px_1fr] md:flex md:items-baseline md:gap-8${index > 0 ? " border-t" : ""}`}
                    style={{ borderColor: "var(--border-mid)" }}
                >
                    <span className="font-mono text-sm md:w-30 md:shrink-0" style={{ color: "var(--fg-5)" }}>
                        {entry.year}
                    </span>
                    <div className="md:flex-1 md:min-w-0">
                        <h3 className="mb-1 text-[22px] font-light" style={{ color: "var(--fg-1)" }}>
                            {entry.title}
                        </h3>
                        <p className="m-0 text-sm" style={{ color: "var(--fg-4)" }}>
                            {entry.org}
                        </p>
                    </div>
                    {entry.tag && (
                        <span className="hidden md:inline justify-self-end whitespace-nowrap rounded bg-accent px-2.5 py-1 font-mono text-[11px] font-medium text-graphite">
                            {entry.tag}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
