import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ActivityBar } from "./ActivityBar";
import { Nav } from "./Nav";
import { StatusBar } from "./StatusBar";
import { useTheme } from "../contexts/ThemeContext";

type TabId = "explorer" | "extensions";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export function Layout() {
    const { toggle } = useTheme();
    const [activeTab, setActiveTab] = useState<TabId | null>(null);

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

    return (
        <div className="relative min-h-screen" style={{ background: "var(--bg)" }}>
            <ScrollToTop />
            <ActivityBar activeTab={activeTab} onTabChange={setActiveTab} />
            <div
                className={`pb-22 md:pb-7 transition-[padding-left] duration-200 ${activeTab ? "md:pl-89" : "md:pl-14"}`}
            >
                <Nav />
                <Outlet />
            </div>
            <StatusBar />
        </div>
    );
}
