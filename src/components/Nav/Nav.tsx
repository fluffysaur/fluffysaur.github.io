import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { filterSearchItems } from "./search";
import { deriveTabs } from "./tabs";
import { NavTabs } from "./NavTabs";
import { NavSearchDesktop } from "./NavSearchDesktop";
import { NavActions } from "./NavActions";
import { NavMobileSearch } from "./NavMobileSearch";
import { NavMobileMenu } from "./NavMobileMenu";
import { LogoMark } from "../LogoMark";
import { isSamePath, scrollToPageTop } from "../../utils/navigation";

export function Nav() {
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    const { theme, toggle } = useTheme();

    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const mobileInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mobileSearchRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

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
        if (isSamePath(path, location)) {
            scrollToPageTop();
        }
        navigate(path);
        setMobileMenuOpen(false);
        closeSearch();
    };

    const handleMobileSearchOpen = () => {
        setMobileSearchOpen(true);
        setMobileMenuOpen(false);
        setOpen(false);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen((current) => !current);
        closeSearch();
    };

    const handleMobileMenuNavigate = (path: string) => {
        if (isSamePath(path, location)) {
            scrollToPageTop();
        }
        navigate(path);
        setMobileMenuOpen(false);
    };

    const handleCloseCaseTab = () => {
        navigate(`/projects?track=${caseTrack ?? "dev"}`);
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                if (window.innerWidth < 768) {
                    setMobileSearchOpen(true);
                    setMobileMenuOpen(false);
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
        if (!open && !mobileSearchOpen && !mobileMenuOpen) return;

        const onDown = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                !containerRef.current?.contains(target) &&
                !mobileSearchRef.current?.contains(target) &&
                !mobileMenuRef.current?.contains(target)
            ) {
                closeSearch();
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [open, mobileSearchOpen, mobileMenuOpen]);

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
            <nav className="intro-chrome sticky top-0 z-30 flex items-stretch border-b border-(--outline-variant) bg-(--surface-container)">
                <div className="flex items-center border-r px-3 md:hidden border-(--outline-subtle)">
                    <LogoMark size="sm" />
                </div>

                <NavTabs tabs={tabs} pathname={pathname} caseId={caseId} onCloseCaseTab={handleCloseCaseTab} />

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
                    onOpen={handleMobileSearchOpen}
                />

                <div className="hidden flex-1 md:block" />

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

                <NavActions theme={theme} onToggleTheme={toggle} />

                <NavMobileMenu
                    tabs={tabs}
                    pathname={pathname}
                    caseId={caseId}
                    theme={theme}
                    isOpen={mobileMenuOpen}
                    menuRef={mobileMenuRef}
                    onToggle={handleMobileMenuToggle}
                    onNavigate={handleMobileMenuNavigate}
                    onCloseCaseTab={handleCloseCaseTab}
                    onToggleTheme={toggle}
                />
            </nav>
        </>
    );
}
