import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TabDef } from "./tabs";

interface NavTabsProps {
    tabs: TabDef[];
    pathname: string;
    caseId: string | undefined;
    onCloseCaseTab: () => void;
}

function isTabActive(tab: TabDef, pathname: string): boolean {
    if (tab.closeable) {
        return true;
    }

    if (tab.to === "/") {
        return pathname === "/";
    }

    if (tab.to === "/projects") {
        return pathname === "/projects";
    }

    return pathname.startsWith(tab.to);
}

export function NavTabs({ tabs, pathname, caseId, onCloseCaseTab }: NavTabsProps) {
    return (
        <div className="flex items-stretch overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
                const active = isTabActive(tab, pathname);
                const key = tab.closeable ? `case-${caseId ?? "current"}` : tab.to;

                const className = [
                    "flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-mono border-b-2 whitespace-nowrap shrink-0",
                    active
                        ? "border-primary bg-(--surface) text-primary"
                        : "border-transparent border-r border-(--outline-subtle) text-(--on-surface-variant)",
                ].join(" ");

                if (tab.closeable) {
                    return (
                        <div key={key} className={className}>
                            <FontAwesomeIcon icon={tab.icon} className="text-[12px]" />
                            <span>{tab.label}</span>
                            <button
                                type="button"
                                onClick={onCloseCaseTab}
                                className="ml-1.5 cursor-pointer border-0 bg-transparent p-0 text-[15px] leading-none text-inherit opacity-50 transition-opacity hover:opacity-100"
                                title="Close"
                            >
                                ×
                            </button>
                        </div>
                    );
                }

                return (
                    <Link key={key} to={tab.to} className={`${className} no-underline transition-colors`}>
                        <FontAwesomeIcon icon={tab.icon} className="text-[12px]" />
                        {tab.label}
                    </Link>
                );
            })}
        </div>
    );
}
