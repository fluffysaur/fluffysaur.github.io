import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ActivityBar } from "./ActivityBar";
import { Nav } from "./Nav";
import { StatusBar } from "./StatusBar";
import { useTheme } from "../contexts/ThemeContext";
import { scrollToPageTop } from "../utils/navigation";

type TabId = "explorer" | "extensions";

const shouldHideHomeIntroChrome = (pathname: string) => {
    if (typeof window === "undefined" || pathname !== "/") return false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return false;

    return window.sessionStorage.getItem("homeTerminalIntroPlayed") !== "true";
};

function ScrollToTop() {
    const { pathname, search, hash } = useLocation();
    useEffect(() => {
        if (hash) return;
        scrollToPageTop();
    }, [hash, pathname, search]);
    return null;
}

export function Layout() {
    const { toggle } = useTheme();
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState<TabId | null>(null);
    const [introChromeHidden, setIntroChromeHidden] = useState(() => shouldHideHomeIntroChrome(pathname));

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "l") {
                e.preventDefault();
                toggle();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [toggle]);

    useEffect(() => {
        if (pathname !== "/") {
            setIntroChromeHidden(false);
        }
    }, [pathname]);

    useEffect(() => {
        const handleIntroPlayingChange = (event: Event) => {
            setIntroChromeHidden(Boolean((event as CustomEvent<boolean>).detail));
        };

        window.addEventListener("home-intro-playing-change", handleIntroPlayingChange);
        return () => window.removeEventListener("home-intro-playing-change", handleIntroPlayingChange);
    }, []);

    return (
        <div
            className={`relative h-screen overflow-hidden bg-(--surface) ${
                introChromeHidden ? "home-intro-chrome-hidden" : ""
            }`}
        >
            <ScrollToTop />
            <ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />
            <div
                className={`flex h-[calc(100vh-1.75rem)] flex-col overflow-hidden transition-[padding-left] duration-200 ${
                    activeTab ? "md:pl-89" : "md:pl-14"
                }`}
            >
                <Nav />
                <div id="page-scroll-container" key={pathname} className="page-in min-h-0 flex-1 overflow-y-auto pb-7">
                    <Outlet />
                </div>
            </div>
            <StatusBar />
        </div>
    );
}
