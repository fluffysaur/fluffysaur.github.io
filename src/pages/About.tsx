import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { ABOUT_CURRENTLY, ABOUT_TIMELINE } from "../components/About/about-data";
import { AboutTimeline } from "../components/About/AboutTimeline";
import { AboutCurrently } from "../components/About/AboutCurrently";
import { AboutSocialLinks } from "../components/About/AboutSocialLinks";

export function About() {
    return (
        <>
            <section className="py-20">
                <div className="max-w-220 mx-auto px-5 md:px-8">
                    <p
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                        style={{ color: "var(--fg-6)" }}
                    >
                        <span className="inline-block w-6 h-px bg-accent" />
                        /about
                    </p>
                    <h1
                        className="font-light pb-4"
                        style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.01em", color: "var(--fg-1)" }}
                    >
                        About <strong>me</strong>.
                    </h1>

                    {/* Bio + photo */}
                    <div className="grid gap-12 mb-16 grid-cols-1 md:grid-cols-[1fr_280px]">
                        <p className="font-light text-[20px] leading-relaxed m-0" style={{ color: "var(--fg-3)" }}>
                            Hi! I'm Tan Yi Jia - a Singapore-based software engineer who came up through UX design and
                            filmmaking. I currently work on Great Eastern's mobile platform, leading progressive
                            migration from Cordova and Vue to React Native with TypeScript. I care deeply about product
                            clarity and engineering quality, and I enjoy building software that feels deliberate from
                            architecture to interaction details.
                        </p>
                        <img src="/assets/me.jpg" alt="Tan Yi Jia" className="w-full rounded-lg block object-cover" />
                    </div>

                    <AboutTimeline entries={ABOUT_TIMELINE} />
                    <AboutCurrently items={ABOUT_CURRENTLY} />
                    <AboutSocialLinks />
                </div>
            </section>
            <CTABlock />
            <Footer />
        </>
    );
}
