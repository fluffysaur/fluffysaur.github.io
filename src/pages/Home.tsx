import { useCallback, useState } from "react";
import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { HomeTerminalHero } from "../components/Home/HomeTerminalHero";
import { HomeExperiencePreview } from "../components/Home/HomeExperiencePreview";
import { HomeFilesGrid } from "../components/Home/HomeFilesGrid";
import { HomeTestimonialStrip } from "../components/Home/HomeTestimonialStrip";

export function Home() {
    const [introComplete, setIntroComplete] = useState(false);
    const handleIntroComplete = useCallback(() => {
        setIntroComplete(true);
    }, []);

    return (
        <>
            <HomeTerminalHero introComplete={introComplete} onIntroComplete={handleIntroComplete} />
            <div className={`home-reveal ${introComplete ? "is-visible" : ""}`}>
                <HomeExperiencePreview />
                <HomeFilesGrid />
                <HomeTestimonialStrip />
                <CTABlock />
                <Footer />
            </div>
        </>
    );
}
