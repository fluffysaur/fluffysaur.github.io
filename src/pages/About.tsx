import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { ABOUT_CURRENTLY } from "../components/About/about-data";
import { AboutCurrently } from "../components/About/AboutCurrently";
import { AboutSocialLinks } from "../components/About/AboutSocialLinks";

export function About() {
    return (
        <>
            <section className="py-14">
                <div className="page-wrap">
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
                            I'm a Singapore-based software engineer and I've always loved to hack things out, from Flash
                            games way back in primary school. Funny enough, I tried to run from the software dev life,
                            but I couldn't resist it in the end. Now, I embrace it.
                        </p>
                        <img src="/assets/me.jpg" alt="Tan Yi Jia" className="w-full rounded-lg block object-cover" />
                    </div>

                    <AboutCurrently items={ABOUT_CURRENTLY} />
                    <AboutSocialLinks />
                </div>
            </section>
            <CTABlock />
            <Footer />
        </>
    );
}
