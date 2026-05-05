import { Footer } from "../../components/Footer";
import { CTABlock } from "../../components/CTABlock";
import { HomeTerminalHero } from "./HomeTerminalHero";
import { HomeFilesGrid } from "./HomeFilesGrid";
import { HomeTestimonialStrip } from "./HomeTestimonialStrip";
import { HomeStackStrip } from "./HomeStackStrip";

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
