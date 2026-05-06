import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { HomeTerminalHero } from "../components/Home/HomeTerminalHero";
import { HomeExperiencePreview } from "../components/Home/HomeExperiencePreview";
import { HomeFilesGrid } from "../components/Home/HomeFilesGrid";
import { HomeTestimonialStrip } from "../components/Home/HomeTestimonialStrip";

export function Home() {
    return (
        <>
            <HomeTerminalHero />
            <HomeExperiencePreview />
            <HomeFilesGrid />
            <HomeTestimonialStrip />
            <CTABlock />
            <Footer />
        </>
    );
}
