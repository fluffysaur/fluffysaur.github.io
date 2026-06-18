import type { MouseEvent } from "react";
import type { Location, To } from "react-router-dom";

export function scrollToPageTop() {
    const pageScroller = document.getElementById("page-scroll-container");
    if (pageScroller) {
        pageScroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function isSamePath(to: To, location: Location) {
    if (typeof to === "string") {
        if (to.startsWith("#")) return false;
        return new URL(to, window.location.origin).pathname === location.pathname;
    }

    return (to.pathname ?? location.pathname) === location.pathname;
}

export function shouldScrollForLinkClick(event: MouseEvent<HTMLAnchorElement>, to: To, location: Location) {
    return (
        !event.defaultPrevented &&
        event.button === 0 &&
        !event.metaKey &&
        !event.altKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        isSamePath(to, location)
    );
}
