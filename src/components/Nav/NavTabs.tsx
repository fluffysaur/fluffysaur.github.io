import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CSSProperties } from "react";
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
                    active ? "border-accent" : "border-transparent",
                ].join(" ");

                const style: CSSProperties = {
                    background: active ? "var(--bg)" : undefined,
                    color: active ? "#f2cb05" : "var(--fg-4)",
                    borderRight: "1px solid var(--border-sub)",
                };

                if (tab.closeable) {
                    return (
                        <div key={key} className={className} style={style}>
                            <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 12 }} />
                            <span>{tab.label}</span>
                            <button
                                type="button"
                                onClick={onCloseCaseTab}
                                className="ml-1.5 cursor-pointer border-0 bg-transparent p-0 leading-none opacity-50 transition-opacity hover:opacity-100"
                                style={{ color: "inherit", fontSize: 15 }}
                                title="Close"
                            >
                                ×
                            </button>
                        </div>
                    );
                }

                return (
                    <Link key={key} to={tab.to} className={`${className} no-underline transition-colors`} style={style}>
                        <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 12 }} />
                        {tab.label}
                    </Link>
                );
            })}
        </div>
    );
}
