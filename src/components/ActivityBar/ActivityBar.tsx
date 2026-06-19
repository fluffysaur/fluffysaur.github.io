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

    return (
        <>
            <aside className="intro-chrome fixed left-0 top-0 bottom-0 z-20 hidden w-14 flex-col border-r border-(--outline-variant) bg-(--surface-container-lowest) pt-4 md:flex">
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
                <section className="intro-chrome hidden md:block fixed left-14 top-0 bottom-0 w-75 z-10 border-r border-(--outline-variant) bg-(--surface-container) overflow-y-auto">
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
        </>
    );
}
