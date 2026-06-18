import { Link, useLocation } from "react-router-dom";
import { scrollToPageTop, shouldScrollForLinkClick } from "../utils/navigation";

type LogoMarkSize = "sm" | "md";

interface LogoMarkProps {
    size?: LogoMarkSize;
    className?: string;
}

const sizeClass: Record<LogoMarkSize, string> = {
    sm: "h-7 w-7",
    md: "h-8 w-8",
};

const logo = "/assets/logos/logo.png";
const logoDark = "/assets/logos/logo-dark.png";

export function LogoMark({ size = "md", className = "" }: LogoMarkProps) {
    const location = useLocation();

    return (
        <Link
            to="/"
            className={`logo-mark grid shrink-0 place-items-center rounded-md no-underline ${sizeClass[size]} ${className}`}
            aria-label="Go to home"
            onClick={(event) => {
                if (shouldScrollForLinkClick(event, "/", location)) {
                    scrollToPageTop();
                }
            }}
        >
            <img className="logo-mark__image logo-mark__image--light" src={logo} alt="" aria-hidden="true" />
            <img className="logo-mark__image logo-mark__image--dark" src={logoDark} alt="" aria-hidden="true" />
        </Link>
    );
}
