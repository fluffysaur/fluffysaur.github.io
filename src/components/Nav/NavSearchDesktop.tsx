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
            className="relative hidden self-center border-x border-(--outline-subtle) px-3 py-2 md:flex md:items-center"
        >
            <div className="flex w-62 items-center gap-2 rounded border border-(--outline) bg-(--surface-container-low) px-2.5 py-1.5 text-(--on-surface-subtle)">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[12px]" />
                <input
                    ref={inputRef}
                    value={query}
                    placeholder={open ? "Search pages & projects..." : pathname}
                    onChange={(event) => onQueryChange(event.target.value)}
                    onFocus={onOpen}
                    onKeyDown={onKeyDown}
                    className="min-w-0 flex-1 border-0 bg-transparent text-[12px] font-mono text-(--on-surface-medium) outline-none caret-primary"
                />
                {!open && (
                    <span className="shrink-0 font-mono text-[10px] text-(--on-surface-faint)">{KBD_SHORTCUT}</span>
                )}
            </div>

            {open && (
                <div
                    className="absolute left-3 right-3 z-50 max-h-72 overflow-y-auto rounded border border-(--outline) bg-(--surface-container)"
                    style={{
                        top: "calc(100% - 6px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    }}
                >
                    {results.length === 0 ? (
                        <div className="px-3 py-3 text-[12px] text-(--on-surface-subtle)">No results</div>
                    ) : (
                        results.map((item, index) => (
                            <div
                                key={`${item.path}-${item.label}`}
                                onMouseDown={() => onResultClick(item.path)}
                                onMouseEnter={() => onResultHover(index)}
                                className={`flex cursor-pointer items-center justify-between px-3 py-2 ${
                                    index === selectedIdx ? "bg-primary/8" : ""
                                }`}
                            >
                                <span
                                    className={`truncate text-[13px] font-medium ${
                                        index === selectedIdx ? "text-primary" : "text-(--on-surface-high)"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <span className="ml-4 truncate font-mono text-[11px] text-(--on-surface-subtle)">
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
