import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { HomeTerminalHero } from "../components/Home/HomeTerminalHero";
import { HomeFilesGrid } from "../components/Home/HomeFilesGrid";
import { HomeTestimonialStrip } from "../components/Home/HomeTestimonialStrip";
import { HomeStackStrip } from "../components/Home/HomeStackStrip";

export function Home() {
    return (
        <>
            <HomeTerminalHero />
            <HomeStackStrip />
            <HomeFilesGrid />
            <HomeTestimonialStrip />
            <CTABlock />
            <Footer />
        </>
    );
}
