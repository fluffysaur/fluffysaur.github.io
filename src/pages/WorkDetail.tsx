import { Navigate, useParams } from "react-router-dom";
import { CASES } from "../case-studies/registry";
import { PROJECTS } from "../data/projects";
import { WorkDetailPage } from "./WorkDetail/WorkDetailPage";
import { VideoDetailPage } from "./WorkDetail/VideoDetailPage";

export function WorkDetail() {
    const { id } = useParams<{ id: string }>();

    const entry = id ? CASES[id] : undefined;
    if (entry) {
        const { meta, Content } = entry;
        return <WorkDetailPage meta={meta} Content={Content} />;
    }

    const project = id ? PROJECTS.find((p) => p.id === id) : undefined;
    if (project?.youtubeUrl) {
        return <VideoDetailPage project={project} />;
    }

    return <Navigate to="/work" replace />;
}
