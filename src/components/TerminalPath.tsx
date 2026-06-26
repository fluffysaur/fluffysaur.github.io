import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";
import { Button } from "./Button";

interface TerminalPathProps {
    parts: string[];
}

interface TerminalBackLinkProps {
    to: string;
    children: ReactNode;
    className?: string;
}

interface TerminalCommentProps {
    children: ReactNode;
    className?: string;
}

function normalizePart(part: string) {
    return part.replace(/^\/+|\/+$/g, "").toLowerCase();
}

export function TerminalPath({ parts }: TerminalPathProps) {
    const normalizedParts = parts.map(normalizePart).filter(Boolean);
    const path = `~/${normalizedParts.join("/")}/`;

    return (
        <div className="terminal-path" style={{ color: "var(--on-surface-faint)" }}>
            {path}
        </div>
    );
}

export function TerminalBackLink({ to, children, className }: TerminalBackLinkProps) {
    return (
        <Button
            to={to}
            variant="text"
            size="sm"
            className={["terminal-back-link", className].filter(Boolean).join(" ")}
        >
            <FontAwesomeIcon icon={faArrowLeftLong} />
            {children}
        </Button>
    );
}

export function TerminalComment({ children, className }: TerminalCommentProps) {
    return <p className={["terminal-comment", className].filter(Boolean).join(" ")}>// {children}</p>;
}
