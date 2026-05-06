import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";

const PROJECT_GROUPS = [
    { id: "engineering", label: "engineering", items: PROJECTS.filter((project) => project.cat === "engineering") },
    { id: "film", label: "film", items: PROJECTS.filter((project) => project.cat === "film") },
];

function projectHref(project: (typeof PROJECTS)[number]) {
    if (project.cat === "film") return `/work/${project.id}`;
    if (project.hasCase) return `/work/${project.id}`;
    return `/work?track=${project.cat}`;
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
                                    const active = href.startsWith("/work?") ? pathname === "/work" : pathname === href;
                                    const extension = project.cat === "film" ? "mov" : "tsx";

                                    const rowClass = [
                                        "flex items-center gap-2 px-3 py-1.5 text-[12px] font-mono no-underline transition-colors",
                                        active ? "text-accent" : "",
                                    ].join(" ");

                                    return (
                                        <Link
                                            key={project.id}
                                            to={href}
                                            className={rowClass}
                                            style={{ color: active ? "#f2cb05" : "var(--fg-3)" }}
                                        >
                                            <span style={{ color: "var(--fg-7)" }}>└</span>
                                            {project.id}.{extension}
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
