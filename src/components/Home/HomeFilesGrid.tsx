import { Button } from "../Button";
import { SectionIntro } from "../SectionIntro";
import { ProjectsGrid } from "../ProjectsGrid";
import { FEATURED_PROJECTS } from "../../data/projects";

export function HomeFilesGrid() {
    const featured = FEATURED_PROJECTS;
    return (
        <section className="pb-24">
            <div className="page-wrap">
                <SectionIntro
                    path="~/projects/"
                    title={
                        <>
                            Selected <strong>projects</strong>
                        </>
                    }
                    subtitle={`// ${featured.length} highlighted files. Click any to open the case study.`}
                    subtitleClassName="mb-10 font-mono text-sm text-(--on-surface-muted)"
                />
                <ProjectsGrid projects={featured} />
                <div className="mt-10">
                    <Button to="/projects">View all projects →</Button>
                </div>
            </div>
        </section>
    );
}
