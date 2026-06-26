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
                subtitle="who am I, really?"
            />

            <div className="flex flex-col gap-4 mt-6 mb-16">
                <p className="font-light text-[20px] leading-relaxed m-0 text-(--on-surface-medium)">
                    I started with a filmmaking dream, pivoted into a user experience design specialisation, before
                    finally settling back into software development — where I can combine my love for problem-solving
                    with creativity and design thinking to make a tangible impact.
                </p>
                <p className="font-light text-[20px] leading-relaxed m-0 text-(--on-surface-medium)">
                    My favourite games involve automating things like Rimworld, Prison Architect, and those old Roblox
                    factory games (I developed my first game with Lua in Roblox too).
                </p>
                <p className="font-light text-[20px] leading-relaxed m-0 text-(--on-surface-medium)">
                    Otherwise, you'll find me hosting events as an Emcee, leading worship in church, or spending time
                    with my beautiful wife-to-be.
                </p>
            </div>

            <AboutCurrently items={ABOUT_CURRENTLY} />
            <AboutSocialLinks />
        </PageShell>
    );
}
