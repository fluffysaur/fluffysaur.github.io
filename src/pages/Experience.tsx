import { ExperienceItem } from "../components/Experience";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import { PageShell } from "../components/PageShell";
import { EXPERIENCES, RESUME_URL } from "../data/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
                subtitle="Full work history across engineering, product, and film."
            />

            <div className="mt-12 border-t mb-8 border-(--outline-variant)">
                {EXPERIENCES.map((experience) => (
                    <ExperienceItem key={experience.id} experience={experience} />
                ))}
            </div>
            <Button href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                View full resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Button>
        </PageShell>
    );
}
