import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { filterSearchItems } from "./search";
import { deriveTabs } from "./tabs";
import { NavTabs } from "./NavTabs";
import { NavSearchDesktop } from "./NavSearchDesktop";
import { NavActions } from "./NavActions";
import { NavMobileSearch } from "./NavMobileSearch";

export function Nav() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { theme, toggle } = useTheme();

    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const mobileInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mobileSearchRef = useRef<HTMLDivElement>(null);

    const { tabs, caseId, caseTrack } = deriveTabs(pathname);
    const results = filterSearchItems(query);

    const closeSearch = () => {
        setOpen(false);
        setMobileSearchOpen(false);
        setQuery("");
        inputRef.current?.blur();
        mobileInputRef.current?.blur();
    };

    const handleResultClick = (path: string) => {
        navigate(path);
        closeSearch();
    };

    const handleOpenMobileSearch = () => {
        setMobileSearchOpen(true);
        setOpen(false);
        setTimeout(() => mobileInputRef.current?.focus(), 0);
    };

    const handleCloseMobileSearch = () => {
        setMobileSearchOpen(false);
        setQuery("");
        mobileInputRef.current?.blur();
    };

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                if (window.innerWidth < 768) {
                    setMobileSearchOpen(true);
                    setTimeout(() => mobileInputRef.current?.focus(), 0);
                    return;
                }
                inputRef.current?.focus();
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (!open && !mobileSearchOpen) return;

        const onDown = (event: MouseEvent) => {
            const target = event.target as Node;
            if (!containerRef.current?.contains(target) && !mobileSearchRef.current?.contains(target)) {
                closeSearch();
            }
        };

        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [open, mobileSearchOpen]);

    useEffect(() => {
        setSelectedIdx(0);
    }, [query]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            closeSearch();
            return;
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (results.length === 0) return;
            setSelectedIdx((idx) => Math.min(idx + 1, results.length - 1));
            return;
        }

        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (results.length === 0) return;
            setSelectedIdx((idx) => Math.max(idx - 1, 0));
            return;
        }

        if (event.key === "Enter") {
            const item = results[selectedIdx];
            if (item) {
                handleResultClick(item.path);
            }
        }
    };

    return (
        <>
            <nav className="sticky top-0 z-30 flex items-stretch border-b border-(--outline-variant) bg-(--surface-container)">
                <div className="flex items-center border-r px-3 md:hidden border-(--outline-subtle)">
                    <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-[12px] font-black tracking-[-0.04em] text-tertiary">
                        YJ
                    </div>
                </div>

                <NavTabs
                    tabs={tabs}
                    pathname={pathname}
                    caseId={caseId}
                    onCloseCaseTab={() => navigate(`/projects?track=${caseTrack ?? "dev"}`)}
                />

                <div className="flex-1" />

                <NavSearchDesktop
                    containerRef={containerRef}
                    inputRef={inputRef}
                    query={query}
                    open={open}
                    pathname={pathname}
                    results={results}
                    selectedIdx={selectedIdx}
                    onQueryChange={setQuery}
                    onOpen={() => setOpen(true)}
                    onKeyDown={handleKeyDown}
                    onResultHover={setSelectedIdx}
                    onResultClick={handleResultClick}
                />

                <NavActions theme={theme} onOpenMobileSearch={handleOpenMobileSearch} onToggleTheme={toggle} />
            </nav>

            <NavMobileSearch
                isOpen={mobileSearchOpen}
                mobileSearchRef={mobileSearchRef}
                mobileInputRef={mobileInputRef}
                query={query}
                results={results}
                selectedIdx={selectedIdx}
                onQueryChange={setQuery}
                onKeyDown={handleKeyDown}
                onResultHover={setSelectedIdx}
                onResultClick={handleResultClick}
                onClose={handleCloseMobileSearch}
            />
        </>
    );
}
