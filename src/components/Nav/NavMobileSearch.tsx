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
            className="fixed inset-x-0 top-12 z-40 border-b md:hidden"
            style={{ background: "var(--bg-elevated)", borderColor: "var(--border-mid)" }}
        >
            <div className="border-b p-3" style={{ borderColor: "var(--border-sub)" }}>
                <div
                    className="flex items-center gap-2 rounded px-2.5 py-2"
                    style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        color: "var(--fg-6)",
                    }}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 12 }} />
                    <input
                        ref={mobileInputRef}
                        value={query}
                        placeholder="Search pages & projects..."
                        onChange={(event) => onQueryChange(event.target.value)}
                        onKeyDown={onKeyDown}
                        className="min-w-0 flex-1 border-0 bg-transparent text-[13px] font-mono outline-none"
                        style={{ color: "var(--fg-2)", caretColor: "#f2cb05" }}
                    />
                    <button
                        type="button"
                        className="font-mono text-[11px]"
                        style={{ color: "var(--fg-6)" }}
                        onClick={onClose}
                    >
                        close
                    </button>
                </div>
            </div>

            <div className="max-h-[55vh] overflow-y-auto">
                {results.length === 0 ? (
                    <div className="px-3 py-3 text-[12px]" style={{ color: "var(--fg-6)" }}>
                        No results
                    </div>
                ) : (
                    results.map((item, index) => (
                        <button
                            type="button"
                            key={`${item.path}-${item.label}`}
                            onClick={() => onResultClick(item.path)}
                            onMouseEnter={() => onResultHover(index)}
                            className="flex w-full items-center justify-between px-3 py-2.5 text-left"
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
                        </button>
                    ))
                )}
            </div>
        </div>
    );
}
