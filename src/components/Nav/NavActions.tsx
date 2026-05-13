import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface NavActionsProps {
    theme: "dark" | "light";
    onOpenMobileSearch: () => void;
    onToggleTheme: () => void;
}

export function NavActions({ theme, onOpenMobileSearch, onToggleTheme }: NavActionsProps) {
    return (
        <div className="flex items-center gap-2 px-3">
            <button
                type="button"
                onClick={onOpenMobileSearch}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-(--outline) bg-transparent text-(--on-surface-muted) transition-colors hover:border-primary hover:text-primary md:hidden"
                title="Search"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[13px]" />
            </button>

            <button
                type="button"
                onClick={onToggleTheme}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded border border-(--outline) bg-transparent text-(--on-surface-muted) transition-colors hover:border-primary hover:text-primary"
                title="Toggle light/dark mode (⌘L)"
            >
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} className="text-[13px]" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className="text-[13px]" />
                )}
            </button>

            <a
                href="mailto:tanyijia@gmail.com"
                className="hidden whitespace-nowrap rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-tertiary no-underline transition-all hover:bg-primary-deep md:inline-flex"
            >
                Get in touch
            </a>
        </div>
    );
}
