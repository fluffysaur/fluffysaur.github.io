import { Footer } from "../components/Footer";
import { ExperienceItem } from "../components/Experience";
import { PageHeader } from "../components/PageHeader";
import { CTAButton } from "../components/CTAButton";
import { EXPERIENCES, RESUME_URL } from "../data/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Experience() {
    return (
        <>
            <section className="py-14">
                <div className="page-wrap">
                    <PageHeader
                        slug="experience"
                        title={
                            <>
                                Career <strong>experience</strong>.
                            </>
                        }
                        subtitle="Full work history across engineering, product, and film."
                    />

                    <div className="mt-12 border-t mb-8" style={{ borderColor: "var(--border-mid)" }}>
                        {EXPERIENCES.map((experience) => (
                            <ExperienceItem key={experience.id} experience={experience} />
                        ))}
                    </div>
                    <CTAButton href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                        View full resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </CTAButton>
                </div>
            </section>
            <Footer />
        </>
    );
}
