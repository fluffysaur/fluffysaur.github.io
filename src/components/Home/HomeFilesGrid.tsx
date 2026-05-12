import { FileCard } from "../FileCard";
import { CTAButton } from "../CTAButton";
import { FEATURED_PROJECTS } from "../../data/projects";

export function HomeFilesGrid() {
    const featured = FEATURED_PROJECTS;
    return (
        <section className="pb-24">
            <div className="page-wrap">
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-sm" style={{ color: "var(--fg-7)" }}>
                        ~/portfolio/
                    </span>
                </div>
                <h2 className="font-light mb-2" style={{ fontSize: 36, color: "var(--fg-1)" }}>
                    Selected <strong>projects</strong>
                </h2>
                <p className="font-mono text-sm mb-10" style={{ color: "var(--fg-5)" }}>
                    // {featured.length} highlighted files. Click any to open the case study.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {featured.map((p) => (
                        <FileCard key={p.id} project={p} />
                    ))}
                </div>
                <div className="mt-10">
                    <CTAButton href="/projects">View all projects →</CTAButton>
                </div>
            </div>
        </section>
    );
}
