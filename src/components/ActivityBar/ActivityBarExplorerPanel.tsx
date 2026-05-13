import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronDown, faChevronRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";

const PROJECT_GROUPS = [
    { id: "engineering", label: "engineering", items: PROJECTS.filter((project) => project.cat === "engineering") },
    { id: "film", label: "film", items: PROJECTS.filter((project) => project.cat === "film") },
];

function projectHref(project: (typeof PROJECTS)[number]) {
    if (project.cat === "film") return `/projects/${project.id}`;
    if (project.hasCase) return `/projects/${project.id}`;
    return `/projects?track=${project.cat}`;
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
                        className="rounded border border-(--outline-subtle) bg-(--surface-container-low)"
                    >
                        <button
                            type="button"
                            className="w-full cursor-pointer border-b border-(--outline-subtle) px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-(--on-surface-subtle)"
                            onClick={() => {
                                setCollapsedFolders((current) => ({
                                    ...current,
                                    [group.id]: !current[group.id],
                                }));
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faFolder} className="text-[13px]" />
                                {group.label}
                            </span>
                            <FontAwesomeIcon
                                icon={isCollapsed ? faChevronRight : faChevronDown}
                                className="text-[10px] text-(--on-surface-faint)"
                            />
                        </button>
                        {!isCollapsed && (
                            <div className="py-1.5">
                                {group.items.map((project) => {
                                    const href = projectHref(project);
                                    const active = href.startsWith("/projects?")
                                        ? pathname === "/projects"
                                        : pathname === href;
                                    const extension = project.cat === "film" ? "mov" : "tsx";

                                    const rowClass = [
                                        "flex items-center gap-2 px-3 py-1.5 text-[12px] font-mono no-underline transition-colors",
                                        active ? "text-primary" : "text-(--on-surface-medium)",
                                    ].join(" ");

                                    return (
                                        <Link key={project.id} to={href} className={rowClass}>
                                            <span className="text-(--on-surface-faint)">└</span>
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
