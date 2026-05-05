import { useState } from "react";
import confetti from "canvas-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowUpRightFromSquare,
    faEnvelope,
    faFileLines,
    faFolder,
    faPuzzlePiece,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faVimeoV, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { PROJECTS } from "../data/projects";
import { EXTENSION_LINKS } from "../data/social";

type TabId = "explorer" | "extensions";

const PROJECT_GROUPS = [
    { id: "work", label: "work", items: PROJECTS.filter((project) => project.type === "work") },
    { id: "personal", label: "personal", items: PROJECTS.filter((project) => project.type === "personal") },
    { id: "film", label: "film", items: PROJECTS.filter((project) => project.type === "film") },
];

function projectHref(project: (typeof PROJECTS)[number]) {
    if (project.youtubeUrl) return project.youtubeUrl;
    if (project.hasCase) return `/work/${project.id}`;
    return "/work";
}

function isProjectExternal(project: (typeof PROJECTS)[number]) {
    return Boolean(project.youtubeUrl);
}

export function ActivityBar() {
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState<TabId | null>(null);
    const [mobilePanelOpen, setMobilePanelOpen] = useState(false);
    const [collapsedFolders, setCollapsedFolders] = useState<Record<string, boolean>>({
        work: false,
        personal: false,
        film: false,
    });

    const launchConfetti = (source: HTMLElement) => {
        const rect = source.getBoundingClientRect();
        const originX = (rect.left + rect.width / 2) / window.innerWidth;
        const originY = (rect.top + rect.height / 2) / window.innerHeight;
        const randomVelocity = 44 + Math.random() * 12;
        const randomAngle = 52 + Math.random() * 14;

        confetti({
            particleCount: 90,
            spread: 55,
            startVelocity: randomVelocity,
            angle: randomAngle,
            scalar: 0.95,
            origin: { x: originX, y: originY },
        });
    };

    const desktopButtonClass = (isActive: boolean) =>
        [
            "w-10 h-10 mx-auto my-1 border-l-2 rounded flex items-center justify-center cursor-pointer transition-all",
            isActive ? "border-accent bg-accent/10 text-accent" : "border-transparent activity-btn",
        ].join(" ");

    const renderExplorer = () => (
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
                            className="w-full flex items-center justify-between gap-2 px-3 py-2 border-b text-[11px] uppercase tracking-[0.14em] font-mono text-left"
                            style={{ borderColor: "var(--border-sub)", color: "var(--fg-6)" }}
                            onClick={() => {
                                setCollapsedFolders((current) => ({
                                    ...current,
                                    [group.id]: !current[group.id],
                                }));
                            }}
                        >
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon
                                    icon={faFolder}
                                    style={{ fontSize: 13 }}
                                />
                                {group.label}
                            </span>
                            <span style={{ color: "var(--fg-7)" }}>{isCollapsed ? "▸" : "▾"}</span>
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

    const renderExtensions = () => (
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

    const panelContent = activeTab === "explorer" ? renderExplorer() : renderExtensions();
    const handleDesktopTabClick = (tab: TabId) => {
        setActiveTab((current) => (current === tab ? null : tab));
    };

    const handleMobileTabClick = (tab: TabId) => {
        setActiveTab((current) => {
            if (current === tab) {
                setMobilePanelOpen(false);
                return null;
            }
            setMobilePanelOpen(true);
            return tab;
        });
    };

    return (
        <>
            <aside
                className="hidden md:flex fixed left-0 top-0 bottom-0 w-14 z-20 flex-col pt-4 border-r"
                style={{ background: "var(--sidebar-bg)", borderColor: "var(--border-mid)" }}
            >
                <div
                    className="w-8 h-8 mx-auto mb-4 rounded-md bg-accent text-graphite grid place-items-center font-black text-[13px]"
                    style={{ letterSpacing: "-0.04em" }}
                >
                    YJ
                </div>

                <button
                    type="button"
                    className={desktopButtonClass(activeTab === "explorer")}
                    onClick={() => handleDesktopTabClick("explorer")}
                    title="Explorer"
                >
                    <FontAwesomeIcon
                        icon={faCopy}
                        style={{ fontSize: 18 }}
                    />
                </button>
                <button
                    type="button"
                    className={desktopButtonClass(activeTab === "extensions")}
                    onClick={() => handleDesktopTabClick("extensions")}
                    title="Extensions"
                >
                    <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        style={{ fontSize: 18 }}
                    />
                </button>
                <button
                    type="button"
                    className={desktopButtonClass(false)}
                    onClick={(event) => launchConfetti(event.currentTarget)}
                    title="Confetti"
                >
                    <span
                        className="text-[18px] leading-none"
                        role="img"
                        aria-label="confetti"
                    >
                        🎉
                    </span>
                </button>
            </aside>

            {activeTab && (
                <section
                    className="hidden md:block fixed left-14 top-0 bottom-0 w-75 z-10 border-r overflow-y-auto"
                    style={{ background: "var(--bg-elevated)", borderColor: "var(--border-mid)" }}
                >
                    <div
                        className="px-4 py-3 border-b flex items-center justify-between"
                        style={{ borderColor: "var(--border-sub)" }}
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.16em] font-mono"
                            style={{ color: "var(--fg-6)" }}
                        >
                            {activeTab}
                        </p>
                        <button
                            type="button"
                            className="text-[10px] uppercase tracking-[0.12em] font-mono"
                            style={{ color: "var(--fg-6)" }}
                            onClick={() => setActiveTab(null)}
                        >
                            hide
                        </button>
                    </div>
                    <div className="p-4">{panelContent}</div>
                </section>
            )}

            <div
                className="md:hidden fixed left-0 right-0 bottom-7 z-30 border-t"
                style={{ background: "var(--bg-elevated)", borderColor: "var(--border-mid)" }}
            >
                <div className="grid grid-cols-3">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em]"
                        style={{ color: activeTab === "explorer" ? "#f2cb05" : "var(--fg-5)" }}
                        onClick={() => handleMobileTabClick("explorer")}
                    >
                        <FontAwesomeIcon
                            icon={faCopy}
                            style={{ fontSize: 15 }}
                        />{" "}
                        Explorer
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em]"
                        style={{ color: activeTab === "extensions" ? "#f2cb05" : "var(--fg-5)" }}
                        onClick={() => handleMobileTabClick("extensions")}
                    >
                        <FontAwesomeIcon
                            icon={faPuzzlePiece}
                            style={{ fontSize: 15 }}
                        />{" "}
                        Ext
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em]"
                        style={{ color: "var(--fg-5)" }}
                        onClick={(event) => launchConfetti(event.currentTarget)}
                    >
                        <span
                            className="text-[16px] leading-none"
                            role="img"
                            aria-label="confetti"
                        >
                            🎉
                        </span>{" "}
                        Pop
                    </button>
                </div>
            </div>

            {mobilePanelOpen && activeTab && (
                <section
                    className="md:hidden fixed inset-x-3 z-30 rounded-lg border overflow-y-auto"
                    style={{
                        bottom: 84,
                        maxHeight: "52vh",
                        background: "var(--bg-elevated)",
                        borderColor: "var(--border-mid)",
                        boxShadow: "0 16px 50px rgba(0,0,0,0.25)",
                    }}
                >
                    <div
                        className="flex items-center justify-between px-4 py-2.5 border-b"
                        style={{ borderColor: "var(--border-sub)" }}
                    >
                        <p
                            className="text-[10px] uppercase tracking-[0.16em] font-mono"
                            style={{ color: "var(--fg-6)" }}
                        >
                            {activeTab}
                        </p>
                        <button
                            type="button"
                            className="text-sm font-mono"
                            style={{ color: "var(--fg-5)" }}
                            onClick={() => {
                                setMobilePanelOpen(false);
                                setActiveTab(null);
                            }}
                        >
                            close
                        </button>
                    </div>
                    <div className="p-4">{panelContent}</div>
                </section>
            )}
        </>
    );
}
