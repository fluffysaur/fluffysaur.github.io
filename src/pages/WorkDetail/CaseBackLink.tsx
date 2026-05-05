import { Link } from "react-router-dom";

export function CaseBackLink() {
    return (
        <Link
            to="/work"
            className="font-mono text-[13px] no-underline transition-colors hover:text-accent"
            style={{ color: "var(--fg-5)" }}
        >
            back /work
        </Link>
    );
}
