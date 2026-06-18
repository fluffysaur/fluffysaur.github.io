import { useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { HomeTerminalHero } from "../components/Home/HomeTerminalHero";
import { HomeExperiencePreview } from "../components/Home/HomeExperiencePreview";
import { HomeFilesGrid } from "../components/Home/HomeFilesGrid";
import { HomeTestimonialStrip } from "../components/Home/HomeTestimonialStrip";

export function Home() {
    const { pathname } = useLocation();
    const [pageContentVisible, setPageContentVisible] = useState(false);

    const shouldPlayIntro = useMemo(() => {
        if (typeof window === "undefined") return false;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return false;
        const hasPlayed = window.sessionStorage.getItem("homeTerminalIntroPlayed") === "true";

        return pathname === "/" && !hasPlayed;
    }, [pathname]);

    const handleIntroComplete = useCallback(() => {
        setPageContentVisible(true);
    }, []);

    return (
        <>
            <HomeTerminalHero shouldPlayIntro={shouldPlayIntro} onIntroComplete={handleIntroComplete} />
            <div className={`home-reveal ${pageContentVisible ? "is-visible" : ""}`}>
                <HomeExperiencePreview />
                <HomeFilesGrid />
                <HomeTestimonialStrip />
                <CTABlock />
                <Footer />
            </div>
        </>
    );
}
