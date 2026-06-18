import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

interface NavActionsProps {
    theme: "dark" | "light";
    onToggleTheme: () => void;
}

export function NavActions({ theme, onToggleTheme }: NavActionsProps) {
    return (
        <div className="hidden items-center gap-2 px-3 md:flex">
            <Button
                onClick={onToggleTheme}
                className="cursor-pointer"
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
        </div>
    );
}
