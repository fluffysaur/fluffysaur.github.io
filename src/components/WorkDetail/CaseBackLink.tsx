import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";

export function CaseBackLink() {
    const { pathname } = useLocation();
    const projectId = pathname.match(/^\/work\/(.+)$/)?.[1];
    const project = projectId ? PROJECTS.find((item) => item.id === projectId) : undefined;
    const track = project?.cat === "film" ? "film" : "engineering";

    return (
        <Link
            to={`/work?track=${track}`}
            className="font-mono text-[13px] no-underline transition-colors hover:text-accent flex items-center gap-2"
            style={{ color: "var(--fg-5)" }}
        >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            back to work
        </Link>
    );
}
