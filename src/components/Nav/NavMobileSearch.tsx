import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import type { KeyboardEvent, RefObject } from "react";
import { Button } from "../Button";
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
    onClose: () => void;
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
    onClose,
}: NavMobileSearchProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            ref={mobileSearchRef}
            className="fixed inset-x-0 top-12 z-40 border-b border-(--outline-variant) bg-(--surface-container) md:hidden"
        >
            <div className="border-b border-(--outline-subtle) p-3">
                <div className="flex items-center gap-2 rounded border border-(--outline) bg-(--surface-container-low) px-2.5 py-2 text-(--on-surface-subtle)">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[12px]" />
                    <input
                        ref={mobileInputRef}
                        value={query}
                        placeholder="Search pages & projects..."
                        onChange={(event) => onQueryChange(event.target.value)}
                        onKeyDown={onKeyDown}
                        className="min-w-0 flex-1 border-0 bg-transparent text-[13px] font-mono text-(--on-surface-high) outline-none caret-primary"
                    />
                    <Button
                        variant="text"
                        size="sm"
                        className="font-mono text-[11px] text-(--on-surface-subtle)"
                        onClick={onClose}
                    >
                        close
                    </Button>
                </div>
            </div>

            <div className="max-h-[55vh] overflow-y-auto">
                {results.length === 0 ? (
                    <div className="px-3 py-3 text-[12px] text-(--on-surface-subtle)">No results</div>
                ) : (
                    results.map((item, index) => (
                        <Button
                            key={`${item.path}-${item.label}`}
                            variant="text"
                            size="sm"
                            onClick={() => onResultClick(item.path)}
                            onMouseEnter={() => onResultHover(index)}
                            className={`flex w-full items-center justify-between px-3 py-2.5 text-left ${
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
                        </Button>
                    ))
                )}
            </div>
        </div>
    );
}
