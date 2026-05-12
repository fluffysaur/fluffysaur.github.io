import { Navigate, useParams } from "react-router-dom";
import { findCase } from "../case-studies/registry";
import { PROJECTS } from "../data/projects";
import { Case } from "../components/ProjectDetail/Case";
import { Video } from "../components/ProjectDetail/Video";

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>();

    const resolved = id ? findCase(id) : null;
    if (resolved) {
        return <Case entry={resolved.entry} prev={resolved.prev} next={resolved.next} />;
    }

    const project = id ? PROJECTS.find((p) => p.id === id) : undefined;
    if (project?.youtubeUrl) {
        return <Video project={project} />;
    }

    return <Navigate to="/projects?track=engineering" replace />;
}
