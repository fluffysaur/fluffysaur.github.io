import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { HomeTerminalHero } from "../components/Home/HomeTerminalHero";
import { HomeExperiencePreview } from "../components/Home/HomeExperiencePreview";
import { HomeFilesGrid } from "../components/Home/HomeFilesGrid";
import { HomeTestimonialStrip } from "../components/Home/HomeTestimonialStrip";
import { HomeStackStrip } from "../components/Home/HomeStackStrip";

export function Home() {
    return (
        <>
            <HomeTerminalHero />
            <HomeStackStrip />
            <HomeExperiencePreview />
            <HomeFilesGrid />
            <HomeTestimonialStrip />
            <CTABlock />
            <Footer />
        </>
    );
}
