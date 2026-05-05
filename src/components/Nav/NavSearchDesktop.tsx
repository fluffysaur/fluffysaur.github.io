import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { KeyboardEvent, RefObject } from "react";
import { KBD_SHORTCUT, type SearchItem } from "./search";

interface NavSearchDesktopProps {
    containerRef: RefObject<HTMLDivElement | null>;
    inputRef: RefObject<HTMLInputElement | null>;
    query: string;
    open: boolean;
    pathname: string;
    results: SearchItem[];
    selectedIdx: number;
    onQueryChange: (value: string) => void;
    onOpen: () => void;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    onResultHover: (index: number) => void;
    onResultClick: (path: string) => void;
}

export function NavSearchDesktop({
    containerRef,
    inputRef,
    query,
    open,
    pathname,
    results,
    selectedIdx,
    onQueryChange,
    onOpen,
    onKeyDown,
    onResultHover,
    onResultClick,
}: NavSearchDesktopProps) {
    return (
        <div
            ref={containerRef}
            className="relative hidden self-center px-3 md:flex md:items-center"
            style={{
                borderLeft: "1px solid var(--border-sub)",
                borderRight: "1px solid var(--border-sub)",
                paddingTop: 6,
                paddingBottom: 6,
            }}
        >
            <div
                className="flex items-center gap-2 rounded px-2.5 py-1.5"
                style={{
                    width: 248,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--fg-6)",
                }}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 12 }} />
                <input
                    ref={inputRef}
                    value={query}
                    placeholder={open ? "Search pages & projects..." : pathname}
                    onChange={(event) => onQueryChange(event.target.value)}
                    onFocus={onOpen}
                    onKeyDown={onKeyDown}
                    className="min-w-0 flex-1 border-0 bg-transparent text-[12px] font-mono outline-none"
                    style={{ color: "var(--fg-3)", caretColor: "#f2cb05" }}
                />
                {!open && (
                    <span className="shrink-0 font-mono text-[10px]" style={{ color: "var(--fg-7)" }}>
                        {KBD_SHORTCUT}
                    </span>
                )}
            </div>

            {open && (
                <div
                    className="absolute left-3 right-3 z-50 overflow-y-auto rounded"
                    style={{
                        top: "calc(100% - 6px)",
                        maxHeight: 288,
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    }}
                >
                    {results.length === 0 ? (
                        <div className="px-3 py-3 text-[12px]" style={{ color: "var(--fg-6)" }}>
                            No results
                        </div>
                    ) : (
                        results.map((item, index) => (
                            <div
                                key={`${item.path}-${item.label}`}
                                onMouseDown={() => onResultClick(item.path)}
                                onMouseEnter={() => onResultHover(index)}
                                className="flex cursor-pointer items-center justify-between px-3 py-2"
                                style={{ background: index === selectedIdx ? "rgba(242,203,5,0.08)" : undefined }}
                            >
                                <span
                                    className="truncate text-[13px] font-medium"
                                    style={{ color: index === selectedIdx ? "#f2cb05" : "var(--fg-2)" }}
                                >
                                    {item.label}
                                </span>
                                <span className="ml-4 shrink-0 font-mono text-[11px]" style={{ color: "var(--fg-6)" }}>
                                    {item.sub}
                                </span>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
