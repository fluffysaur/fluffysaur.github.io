import { FileCard } from "./FileCard";
import type { Project } from "../types";

type ProjectsGridProps = {
    projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <FileCard key={project.id} project={project} />
            ))}
        </div>
    );
}
