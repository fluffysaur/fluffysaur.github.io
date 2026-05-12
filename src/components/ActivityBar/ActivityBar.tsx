import { useState } from "react";
import confetti from "canvas-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faPuzzlePiece, faCopy } from "@fortawesome/free-solid-svg-icons";
import { ActivityBarExplorerPanel } from "./ActivityBarExplorerPanel";
import { ActivityBarExtensionsPanel } from "./ActivityBarExtensionsPanel";

export type TabId = "explorer" | "extensions";

interface ActivityBarProps {
    activeTab: TabId | null;
    onTabChange: (tab: TabId | null) => void;
}

export function ActivityBar({ activeTab, onTabChange }: ActivityBarProps) {
    const { pathname } = useLocation();
    const [mobilePanelOpen, setMobilePanelOpen] = useState(false);
    const [collapsedFolders, setCollapsedFolders] = useState<Record<string, boolean>>({
        engineering: false,
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
            "w-10 h-10 mx-auto my-1 border-l-2 rounded flex items-center justify-center cursor-pointer transition-all hover:scale-105",
            isActive ? "border-accent bg-accent/10 text-accent" : "border-transparent activity-btn",
        ].join(" ");

    const panelContent =
        activeTab === "explorer" ? (
            <ActivityBarExplorerPanel
                pathname={pathname}
                collapsedFolders={collapsedFolders}
                setCollapsedFolders={setCollapsedFolders}
            />
        ) : (
            <ActivityBarExtensionsPanel />
        );

    const handleDesktopTabClick = (tab: TabId) => {
        onTabChange(activeTab === tab ? null : tab);
    };

    const handleMobileTabClick = (tab: TabId) => {
        if (activeTab === tab) {
            setMobilePanelOpen(false);
            onTabChange(null);
        } else {
            setMobilePanelOpen(true);
            onTabChange(tab);
        }
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
                    <FontAwesomeIcon icon={faCopy} style={{ fontSize: 18 }} />
                </button>
                <button
                    type="button"
                    className={desktopButtonClass(activeTab === "extensions")}
                    onClick={() => handleDesktopTabClick("extensions")}
                    title="Extensions"
                >
                    <FontAwesomeIcon icon={faPuzzlePiece} style={{ fontSize: 18 }} />
                </button>

                <div className="flex-1" />

                <button
                    type="button"
                    className={`${desktopButtonClass(false)} mb-10`}
                    onClick={(event) => launchConfetti(event.currentTarget)}
                    title="Confetti"
                >
                    <span className="text-[18px] leading-none" role="img" aria-label="confetti">
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
                            className="text-[10px] uppercase tracking-[0.12em] font-mono cursor-pointer"
                            style={{ color: "var(--fg-6)" }}
                            onClick={() => onTabChange(null)}
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
                        <FontAwesomeIcon icon={faCopy} style={{ fontSize: 15 }} /> Explorer
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em]"
                        style={{ color: activeTab === "extensions" ? "#f2cb05" : "var(--fg-5)" }}
                        onClick={() => handleMobileTabClick("extensions")}
                    >
                        <FontAwesomeIcon icon={faPuzzlePiece} style={{ fontSize: 15 }} /> Ext
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em]"
                        style={{ color: "var(--fg-5)" }}
                        onClick={(event) => launchConfetti(event.currentTarget)}
                    >
                        <span className="text-[16px] leading-none" role="img" aria-label="confetti">
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
                                onTabChange(null);
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
