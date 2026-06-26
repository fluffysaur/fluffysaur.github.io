import { ExperienceItem } from "../components/Experience";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { PageShell } from "../components/PageShell";
import { EXPERIENCES, RESUME_URL } from "../data/experience";

export function Experience() {
    return (
        <PageShell>
            <PageHeader
                slug="experience"
                title={
                    <>
                        Career <strong>experience</strong>.
                    </>
                }
                subtitle="full work history across dev, product, and film."
            />

            <div className="mt-12 border-t mb-8 border-(--outline-variant)">
                {EXPERIENCES.map((experience) => (
                    <ExperienceItem key={experience.id} experience={experience} />
                ))}
            </div>
            <Button to={RESUME_URL}>View full resume →</Button>
        </PageShell>
    );
}
