import { Link, useLocation } from "react-router-dom";
import { scrollToPageTop, shouldScrollForLinkClick } from "../utils/navigation";

type LogoMarkSize = "sm" | "md";

interface LogoMarkProps {
    size?: LogoMarkSize;
    className?: string;
    linked?: boolean;
}

const sizeClass: Record<LogoMarkSize, string> = {
    sm: "h-7 w-7",
    md: "h-8 w-8",
};

const logo = "/assets/logos/logo.png";
const logoDark = "/assets/logos/logo-dark.png";

export function LogoMark({ size = "md", className = "", linked = true }: LogoMarkProps) {
    const location = useLocation();
    const classes = `grid shrink-0 place-items-center overflow-hidden rounded-md no-underline ${sizeClass[size]} ${className}`;
    const images = (
        <>
            <img
                className="hidden h-full w-full object-contain [html[data-theme=light]_&]:block"
                src={logo}
                alt=""
                aria-hidden="true"
            />
            <img
                className="block h-full w-full object-contain [html[data-theme=light]_&]:hidden"
                src={logoDark}
                alt=""
                aria-hidden="true"
            />
        </>
    );

    if (!linked) {
        return <span className={classes}>{images}</span>;
    }

    return (
        <Link
            to="/"
            className={classes}
            aria-label="Go to home"
            onClick={(event) => {
                if (shouldScrollForLinkClick(event, "/", location)) {
                    scrollToPageTop();
                }
            }}
        >
            {images}
        </Link>
    );
}
