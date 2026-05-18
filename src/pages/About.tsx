import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { ABOUT_CURRENTLY } from "../components/About/about-data";
import { AboutCurrently } from "../components/About/AboutCurrently";
import { AboutSocialLinks } from "../components/About/AboutSocialLinks";

export function About() {
    return (
        <PageShell>
            <PageHeader
                slug="about"
                title={
                    <>
                        About <strong>me</strong>.
                    </>
                }
            />

            <div className="grid gap-12 mt-12 mb-16 grid-cols-1 md:grid-cols-[1fr_280px]">
                <p className="font-light text-[20px] leading-relaxed m-0 text-(--on-surface-medium)">
                    I'm a Singapore-based software engineer and I've always loved to hack things out, from Flash games
                    way back in primary school. Funny enough, I tried to run from the software dev life, but I couldn't
                    resist it in the end. Now, I embrace it.
                </p>
                <img src="/assets/me.jpg" alt="Tan Yi Jia" className="w-full rounded-lg block object-cover" />
            </div>

            <AboutCurrently items={ABOUT_CURRENTLY} />
            <AboutSocialLinks />
        </PageShell>
    );
}
