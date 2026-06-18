import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { KeyboardEvent, RefObject } from "react";
import type { SearchItem } from "./search";

interface NavMobileSearchProps {
    isOpen: boolean;
    mobileSearchRef: RefObject<HTMLDivElement | null>;
    mobileInputRef: RefObject<HTMLInputElement | null>;
    query: string;
    results: SearchItem[];
    selectedIdx: number;
    onQueryChange: (value: string) => void;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    onResultHover: (index: number) => void;
    onResultClick: (path: string) => void;
    onOpen: () => void;
}

export function NavMobileSearch({
    isOpen,
    mobileSearchRef,
    mobileInputRef,
    query,
    results,
    selectedIdx,
    onQueryChange,
    onKeyDown,
    onResultHover,
    onResultClick,
    onOpen,
}: NavMobileSearchProps) {
    return (
        <div ref={mobileSearchRef} className="relative min-w-0 flex-1 self-center md:hidden">
            <div className="flex items-center gap-2 rounded border border-(--outline) bg-(--surface-container-low) px-2 py-1.5 text-(--on-surface-subtle)">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="shrink-0 text-[12px]" />
                <input
                    ref={mobileInputRef}
                    value={query}
                    placeholder="Search"
                    onChange={(event) => onQueryChange(event.target.value)}
                    onFocus={onOpen}
                    onKeyDown={onKeyDown}
                    className="min-w-0 flex-1 border-0 bg-transparent text-[12px] font-mono text-(--on-surface-high) outline-none caret-primary"
                />
            </div>

            {isOpen && (
                <div
                    className="absolute left-1/2 top-full z-50 max-h-[55vh] w-screen -translate-x-1/2 overflow-y-auto border-b border-(--outline-variant) bg-(--surface-container) shadow-2xl md:hidden"
                    role="listbox"
                >
                    {results.length === 0 ? (
                        <div className="px-3 py-3 text-[12px] text-(--on-surface-subtle)">No results</div>
                    ) : (
                        results.map((item, index) => (
                            <button
                                key={`${item.path}-${item.label}`}
                                type="button"
                                onClick={() => onResultClick(item.path)}
                                onMouseEnter={() => onResultHover(index)}
                                className={`flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-3 py-2.5 text-left ${
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
                                <span className="ml-4 shrink-0 font-mono text-[11px] text-(--on-surface-subtle)">
                                    {item.sub}
                                </span>
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
