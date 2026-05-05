import { Navigate, useParams } from "react-router-dom";
import { CASES } from "../case-studies/registry";
import { WorkDetailPage } from "./WorkDetail/WorkDetailPage";

export function WorkDetail() {
    const { id } = useParams<{ id: string }>();
    const entry = id ? CASES[id] : undefined;

    if (!entry) return <Navigate to="/work" replace />;

    const { meta, Content } = entry;

    return <WorkDetailPage meta={meta} Content={Content} />;
}
