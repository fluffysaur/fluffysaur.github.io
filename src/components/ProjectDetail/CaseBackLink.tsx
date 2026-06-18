import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";
import { Button } from "../Button";

export function CaseBackLink() {
    const { pathname } = useLocation();
    const projectId = pathname.match(/^\/projects\/(.+)$/)?.[1];
    const project = projectId ? PROJECTS.find((item) => item.id === projectId) : undefined;
    const track = project?.cat === "film" ? "film" : "dev";

    return (
        <Button
            to={`/projects?track=${track}`}
            variant="text"
            size="sm"
            className="flex items-center gap-2 font-mono text-[13px] text-(--on-surface-muted)"
        >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            back to projects
        </Button>
    );
}
