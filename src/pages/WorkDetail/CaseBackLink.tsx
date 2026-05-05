import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export function CaseBackLink() {
    return (
        <Link
            to="/work"
            className="font-mono text-[13px] no-underline transition-colors hover:text-accent flex items-center gap-2"
            style={{ color: "var(--fg-5)" }}
        >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            back /work
        </Link>
    );
}
