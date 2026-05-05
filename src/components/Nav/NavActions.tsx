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
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded border bg-transparent transition-colors hover:border-accent hover:text-accent md:hidden"
                style={{ borderColor: "var(--border)", color: "var(--fg-5)" }}
                title="Search"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 13 }} />
            </button>

            <button
                type="button"
                onClick={onToggleTheme}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded border bg-transparent transition-colors hover:border-accent hover:text-accent"
                style={{ borderColor: "var(--border)", color: "var(--fg-5)" }}
                title="Toggle light/dark mode (⌘L)"
            >
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} style={{ fontSize: 13 }} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} style={{ fontSize: 13 }} />
                )}
            </button>

            <a
                href="mailto:tanyijia@gmail.com"
                className="hidden whitespace-nowrap rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] no-underline transition-all hover:bg-accent-deep md:inline-flex"
                style={{ color: "#262626" }}
            >
                Get in touch
            </a>
        </div>
    );
}
