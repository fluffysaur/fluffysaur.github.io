import { ExperienceItem } from "../Experience";
import { Button } from "../Button";
import { SectionIntro } from "../SectionIntro";
import { HIGHLIGHTED_EXPERIENCES } from "../../data/experience";

export function HomeExperiencePreview() {
    const experiences = HIGHLIGHTED_EXPERIENCES;

    return (
        <section className="pb-20">
            <div className="page-wrap">
                <SectionIntro
                    path="~/experience/"
                    title={
                        <>
                            <strong>Experience</strong>
                        </>
                    }
                    subtitle="// my latest roles"
                    subtitleClassName="mb-8 font-mono text-sm text-(--on-surface-muted)"
                />

                <div className="border-t border-(--outline-variant)">
                    {experiences.map((experience) => (
                        <ExperienceItem key={experience.id} experience={experience} />
                    ))}
                </div>

                <div className="mt-10">
                    <Button to="/experience">View all experience →</Button>
                </div>
            </div>
        </section>
    );
}
