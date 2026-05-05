import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowUpRightFromSquare,
    faEnvelope,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faVimeoV, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { EXTENSION_LINKS } from "../../data/social";

export function ActivityBarExtensionsPanel() {
    return (
        <div className="space-y-2">
            {EXTENSION_LINKS.map((item) => {
                const icon: IconDefinition =
                    item.icon === "github"
                        ? faGithub
                        : item.icon === "linkedin"
                          ? faLinkedinIn
                          : item.icon === "vimeo"
                            ? faVimeoV
                            : item.icon === "youtube"
                              ? faYoutube
                              : item.icon === "email"
                                ? faEnvelope
                                : item.icon === "resume"
                                  ? faFileLines
                                  : faArrowUpRightFromSquare;

                return (
                    <a
                        key={item.label}
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center justify-between gap-3 px-3 py-2.5 rounded border text-[12px] no-underline transition-colors hover:text-accent"
                        style={{
                            borderColor: "var(--border-sub)",
                            background: "var(--bg-card)",
                            color: "var(--fg-2)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                                icon={icon}
                                style={{ fontSize: 14 }}
                            />
                            <span className="font-mono">{item.label}</span>
                        </div>
                        <span
                            className="text-[10px] uppercase tracking-[0.12em]"
                            style={{ color: "var(--fg-6)" }}
                        >
                            {item.kind}
                        </span>
                    </a>
                );
            })}
        </div>
    );
}
