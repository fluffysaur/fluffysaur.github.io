import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { RefObject } from "react";
import type { TabDef } from "./tabs";
import { isTabActive } from "./NavTabs";
import { Button } from "../Button";

interface NavMobileMenuProps {
    tabs: TabDef[];
    pathname: string;
    caseId: string | undefined;
    theme: "dark" | "light";
    isOpen: boolean;
    menuRef: RefObject<HTMLDivElement | null>;
    onToggle: () => void;
    onNavigate: (path: string) => void;
    onCloseCaseTab: () => void;
    onToggleTheme: () => void;
}

export function NavMobileMenu({
    tabs,
    pathname,
    caseId,
    theme,
    isOpen,
    menuRef,
    onToggle,
    onNavigate,
    onCloseCaseTab,
    onToggleTheme,
}: NavMobileMenuProps) {
    return (
        <div ref={menuRef} className="relative flex items-stretch px-2 md:hidden">
            <Button
                onClick={onToggle}
                variant="icon"
                size="sm"
                className="aspect-square h-auto w-auto self-stretch"
                title={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
            >
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-[13px]" />
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-screen border-b border-(--outline-variant) bg-(--surface-container) shadow-2xl">
                    {tabs.map((tab) => {
                        const active = isTabActive(tab, pathname);
                        const key = tab.closeable ? `case-${caseId ?? "current"}` : tab.to;

                        return (
                            <div
                                key={key}
                                className={`group flex items-center border-l-2 transition-colors ${
                                    active
                                        ? "border-primary bg-(--surface) text-primary"
                                        : "border-transparent text-(--on-surface-variant) hover:border-primary/40 hover:text-primary"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => onNavigate(tab.to)}
                                    className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 border-0 bg-transparent px-4 py-3 text-left font-mono text-[12px] text-inherit"
                                    aria-current={active ? "page" : undefined}
                                >
                                    <FontAwesomeIcon icon={tab.icon} className="shrink-0 text-[12px]" />
                                    <span className="truncate">{tab.label}</span>
                                </button>

                                {tab.closeable ? (
                                    <button
                                        type="button"
                                        onClick={onCloseCaseTab}
                                        className="mr-2 flex h-8 w-8 cursor-pointer items-center justify-center border-0 bg-transparent text-[16px] leading-none text-inherit opacity-55 transition-opacity hover:opacity-100"
                                        title="Close"
                                        aria-label="Close case tab"
                                    >
                                        ×
                                    </button>
                                ) : null}
                            </div>
                        );
                    })}

                    <div className="mt-1 border-t border-(--outline-subtle)">
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            className="flex w-full cursor-pointer items-center gap-2 border-0 bg-transparent px-4 py-3 text-left font-mono text-[12px] text-(--on-surface-variant) transition-colors hover:text-primary"
                        >
                            {theme === "dark" ? (
                                <FontAwesomeIcon icon={faSun} className="shrink-0 text-[12px]" />
                            ) : (
                                <FontAwesomeIcon icon={faMoon} className="shrink-0 text-[12px]" />
                            )}
                            <span>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
