import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";

const PROJECT_GROUPS = [
    { id: "work", label: "work", items: PROJECTS.filter((p) => p.type === "work") },
    { id: "personal", label: "personal", items: PROJECTS.filter((p) => p.type === "personal") },
    { id: "film", label: "film", items: PROJECTS.filter((p) => p.type === "film") },
];

function projectHref(project: (typeof PROJECTS)[number]) {
    if (project.youtubeUrl) return project.youtubeUrl;
    if (project.hasCase) return `/work/${project.id}`;
    return "/work";
}

function isProjectExternal(project: (typeof PROJECTS)[number]) {
    return Boolean(project.youtubeUrl);
}

interface ActivityBarExplorerPanelProps {
    pathname: string;
    collapsedFolders: Record<string, boolean>;
    setCollapsedFolders: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export function ActivityBarExplorerPanel({
    pathname,
    collapsedFolders,
    setCollapsedFolders,
}: ActivityBarExplorerPanelProps) {
    return (
        <div className="space-y-4">
            {PROJECT_GROUPS.map((group) => {
                const isCollapsed = collapsedFolders[group.id];

                return (
                    <div
                        key={group.id}
                        className="border rounded"
                        style={{ borderColor: "var(--border-sub)", background: "var(--bg-card)" }}
                    >
                        <button
                            type="button"
                            className="w-full flex items-center justify-between gap-2 px-3 py-2 border-b text-[11px] uppercase tracking-[0.14em] font-mono text-left cursor-pointer"
                            style={{ borderColor: "var(--border-sub)", color: "var(--fg-6)" }}
                            onClick={() => {
                                setCollapsedFolders((current) => ({
                                    ...current,
                                    [group.id]: !current[group.id],
                                }));
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faFolder} style={{ fontSize: 13 }} />
                                {group.label}
                            </span>
                            <FontAwesomeIcon
                                icon={isCollapsed ? faChevronRight : faChevronDown}
                                style={{ fontSize: 10, color: "var(--fg-7)" }}
                            />
                        </button>
                        {!isCollapsed && (
                            <div className="py-1.5">
                                {group.items.map((project) => {
                                    const href = projectHref(project);
                                    const external = isProjectExternal(project);
                                    const active =
                                        !external && (href === "/work" ? pathname === "/work" : pathname === href);

                                    const rowClass = [
                                        "flex items-center gap-2 px-3 py-1.5 text-[12px] font-mono no-underline transition-colors",
                                        active ? "text-accent" : "",
                                    ].join(" ");

                                    if (external) {
                                        return (
                                            <a
                                                key={project.id}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={rowClass}
                                                style={{ color: active ? "#f2cb05" : "var(--fg-3)" }}
                                            >
                                                <span style={{ color: "var(--fg-7)" }}>└</span>
                                                {project.id}.mp4
                                            </a>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={project.id}
                                            to={href}
                                            className={rowClass}
                                            style={{ color: active ? "#f2cb05" : "var(--fg-3)" }}
                                        >
                                            <span style={{ color: "var(--fg-7)" }}>└</span>
                                            {project.id}.tsx
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
