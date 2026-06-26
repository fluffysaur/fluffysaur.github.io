import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TabDef } from "./tabs";
import { Tab } from "../Tab";
import { scrollToPageTop } from "../../utils/navigation";

interface NavTabsProps {
    tabs: TabDef[];
    pathname: string;
    onCloseTab: (tab: TabDef) => void;
}

export function isTabActive(tab: TabDef, pathname: string): boolean {
    if (tab.closeable) {
        return true;
    }

    if (tab.to === "/") {
        return pathname === "/";
    }

    if (tab.to === "/projects") {
        return pathname === "/projects";
    }

    if (tab.to === "/experience") {
        return pathname === "/experience";
    }

    return pathname.startsWith(tab.to);
}

export function NavTabs({ tabs, pathname, onCloseTab }: NavTabsProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const activeTab = containerRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
        activeTab?.scrollIntoView({ block: "nearest", inline: "center" });
    }, [pathname]);

    return (
        <div ref={containerRef} className="hidden items-stretch overflow-x-auto scrollbar-hide md:flex">
            {tabs.map((tab) => {
                const active = isTabActive(tab, pathname);
                const key = tab.to;

                const className = "flex items-center";

                if (tab.closeable) {
                    return (
                        <Tab
                            key={key}
                            as="div"
                            variant="nav"
                            active={active}
                            className={`${className} cursor-pointer`}
                            onClick={scrollToPageTop}
                            role="button"
                            tabIndex={0}
                            aria-current={active ? "page" : undefined}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    scrollToPageTop();
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={tab.icon} className="text-[12px]" />
                            <span>{tab.label}</span>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    onCloseTab(tab);
                                }}
                                className="ml-1.5 cursor-pointer border-0 bg-transparent p-0 text-[15px] leading-none text-inherit opacity-50 transition-opacity hover:opacity-100"
                                title="Close"
                                aria-label="Close tab"
                            >
                                ×
                            </button>
                        </Tab>
                    );
                }

                return (
                    <Tab
                        key={key}
                        to={tab.to}
                        variant="nav"
                        active={active}
                        className={className}
                        aria-current={active ? "page" : undefined}
                    >
                        <FontAwesomeIcon icon={tab.icon} className="text-[12px]" />
                        {tab.label}
                    </Tab>
                );
            })}
        </div>
    );
}
