import { Navigate, useParams } from "react-router-dom";
import { CASES } from "../case-studies/registry";
import { PROJECTS } from "../data/projects";
import { Case } from "../components/WorkDetail/Case";
import { Video } from "../components/WorkDetail/Video";

export function WorkDetail() {
    const { id } = useParams<{ id: string }>();

    const entry = id ? CASES[id] : undefined;
    if (entry) {
        const { meta, Content } = entry;
        return <Case meta={meta} Content={Content} />;
    }

    const project = id ? PROJECTS.find((p) => p.id === id) : undefined;
    if (project?.youtubeUrl) {
        return <Video project={project} />;
    }

    return <Navigate to="/work" replace />;
}
