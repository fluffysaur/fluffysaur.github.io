import { FileCard } from "../FileCard";
import { Button } from "../Button";
import { SectionIntro } from "../SectionIntro";
import { FEATURED_PROJECTS } from "../../data/projects";

export function HomeFilesGrid() {
    const featured = FEATURED_PROJECTS;
    return (
        <section className="pb-24">
            <div className="page-wrap">
                <SectionIntro
                    path="~/portfolio/"
                    title={
                        <>
                            Selected <strong>projects</strong>
                        </>
                    }
                    subtitle={`// ${featured.length} highlighted files. Click any to open the case study.`}
                    subtitleClassName="mb-10 font-mono text-sm text-(--on-surface-muted)"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {featured.map((p) => (
                        <FileCard key={p.id} project={p} />
                    ))}
                </div>
                <div className="mt-10">
                    <Button to="/projects">View all projects →</Button>
                </div>
            </div>
        </section>
    );
}
