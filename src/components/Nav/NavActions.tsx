import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

interface NavActionsProps {
    theme: "dark" | "light";
    onOpenMobileSearch: () => void;
    onToggleTheme: () => void;
}

export function NavActions({ theme, onOpenMobileSearch, onToggleTheme }: NavActionsProps) {
    return (
        <div className="flex items-center gap-2 px-3">
            <Button
                onClick={onOpenMobileSearch}
                variant="icon"
                size="sm"
                className="md:hidden"
                title="Search"
                aria-label="Open search"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[13px]" />
            </Button>

            <Button
                onClick={onToggleTheme}
                variant="icon"
                size="sm"
                title="Toggle light/dark mode (⌘L)"
                aria-label="Toggle light or dark mode"
            >
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} className="text-[13px]" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className="text-[13px]" />
                )}
            </Button>

            <Button
                href="mailto:tanyijia@gmail.com"
                variant="primary"
                size="sm"
                className="hidden whitespace-nowrap md:inline-flex"
            >
                Get in touch
            </Button>
        </div>
    );
}
