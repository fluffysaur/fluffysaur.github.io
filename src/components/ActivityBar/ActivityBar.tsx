import { useState } from "react";
import confetti from "canvas-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faPuzzlePiece, faCopy } from "@fortawesome/free-solid-svg-icons";
import { ActivityBarExplorerPanel } from "./ActivityBarExplorerPanel";
import { ActivityBarExtensionsPanel } from "./ActivityBarExtensionsPanel";
import { Button } from "../Button";
import { LogoMark } from "../LogoMark";

export type TabId = "explorer" | "extensions";

interface ActivityBarProps {
    activeTab: TabId | null;
    onTabChange: (tab: TabId | null) => void;
}

export function ActivityBar({ activeTab, onTabChange }: ActivityBarProps) {
    const { pathname } = useLocation();
    const [mobilePanelOpen, setMobilePanelOpen] = useState(false);
    const [collapsedFolders, setCollapsedFolders] = useState<Record<string, boolean>>({
        dev: false,
        film: false,
    });

    const launchConfetti = (source: HTMLElement) => {
        const rect = source.getBoundingClientRect();
        const originX = (rect.left + rect.width / 2) / window.innerWidth;
        const originY = (rect.top + rect.height / 2) / window.innerHeight;
        const randomVelocity = 44 + Math.random() * 12;
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const randomAngle = isMobile
            ? (() => {
                  const sourceX = rect.left + rect.width / 2;
                  const sourceY = rect.top + rect.height / 2;
                  const targetX = window.innerWidth / 2;
                  const targetY = window.innerHeight / 2;
                  const centerAngle = (Math.atan2(sourceY - targetY, targetX - sourceX) * 180) / Math.PI;

                  return centerAngle + (Math.random() * 24 - 12);
              })()
            : 52 + Math.random() * 14;

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
            isActive ? "border-primary bg-primary/10 text-primary" : "border-transparent activity-btn",
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
            <aside className="fixed left-0 top-0 bottom-0 z-20 hidden w-14 flex-col border-r border-(--outline-variant) bg-(--surface-container-lowest) pt-4 md:flex">
                <LogoMark className="mx-auto mb-4" />

                <Button
                    variant="text"
                    size="sm"
                    className={desktopButtonClass(activeTab === "explorer")}
                    onClick={() => handleDesktopTabClick("explorer")}
                    title="Explorer"
                    aria-label="Open explorer panel"
                >
                    <FontAwesomeIcon icon={faCopy} className="text-[18px]" />
                </Button>
                <Button
                    variant="text"
                    size="sm"
                    className={desktopButtonClass(activeTab === "extensions")}
                    onClick={() => handleDesktopTabClick("extensions")}
                    title="Extensions"
                    aria-label="Open extensions panel"
                >
                    <FontAwesomeIcon icon={faPuzzlePiece} className="text-[18px]" />
                </Button>

                <div className="flex-1" />

                <Button
                    variant="text"
                    size="sm"
                    className={`${desktopButtonClass(false)} mb-10`}
                    onClick={(event) => launchConfetti(event.currentTarget)}
                    title="Confetti"
                    aria-label="Launch confetti"
                >
                    <span className="text-[18px] leading-none" role="img" aria-label="confetti">
                        🎉
                    </span>
                </Button>
            </aside>

            {activeTab && (
                <section className="hidden md:block fixed left-14 top-0 bottom-0 w-75 z-10 border-r border-(--outline-variant) bg-(--surface-container) overflow-y-auto">
                    <div className="px-4 py-3 border-b border-(--outline-subtle) flex items-center justify-between">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--on-surface-subtle)">
                            {activeTab}
                        </p>
                        <Button
                            variant="text"
                            size="sm"
                            className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.12em] text-(--on-surface-subtle)"
                            onClick={() => onTabChange(null)}
                        >
                            hide
                        </Button>
                    </div>
                    <div className="p-4">{panelContent}</div>
                </section>
            )}

            <div className="fixed left-0 right-0 bottom-7 z-30 border-t border-(--outline-variant) bg-(--surface-container) md:hidden">
                <div className="grid grid-cols-3">
                    <Button
                        variant="text"
                        size="sm"
                        className={`flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em] ${
                            activeTab === "explorer" ? "text-primary" : "text-(--on-surface-muted)"
                        }`}
                        onClick={() => handleMobileTabClick("explorer")}
                    >
                        <FontAwesomeIcon icon={faCopy} className="text-[15px]" />
                    </Button>
                    <Button
                        variant="text"
                        size="sm"
                        className={`flex items-center justify-center gap-2 py-3 text-[11px] font-mono uppercase tracking-[0.12em] ${
                            activeTab === "extensions" ? "text-primary" : "text-(--on-surface-muted)"
                        }`}
                        onClick={() => handleMobileTabClick("extensions")}
                    >
                        <FontAwesomeIcon icon={faPuzzlePiece} className="text-[15px]" />
                    </Button>
                    <Button
                        variant="text"
                        size="sm"
                        className="flex items-center justify-center py-3 text-(--on-surface-muted)"
                        onClick={(event) => launchConfetti(event.currentTarget)}
                        title="Confetti"
                        aria-label="Launch confetti"
                    >
                        <span className="text-[16px] leading-none" role="img" aria-label="confetti">
                            🎉
                        </span>
                    </Button>
                </div>
            </div>

            {mobilePanelOpen && activeTab && (
                <section
                    className="fixed inset-x-3 z-30 overflow-y-auto rounded-lg border border-(--outline-variant) bg-(--surface-container) md:hidden"
                    style={{
                        bottom: 84,
                        maxHeight: "52vh",
                        boxShadow: "0 16px 50px rgba(0,0,0,0.25)",
                    }}
                >
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-(--outline-subtle)">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-(--on-surface-subtle)">
                            {activeTab}
                        </p>
                        <Button
                            variant="text"
                            size="sm"
                            className="font-mono text-sm text-(--on-surface-muted)"
                            onClick={() => {
                                setMobilePanelOpen(false);
                                onTabChange(null);
                            }}
                        >
                            close
                        </Button>
                    </div>
                    <div className="p-4">{panelContent}</div>
                </section>
            )}
        </>
    );
}
