import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowUpRightFromSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { ORIGINAL_RESUME_PDF_URL, RESUME, type ResumeDatedItem } from "../data/resume";

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="resume-section">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

function DatedItemList({ items }: { items: ResumeDatedItem[] }) {
    return (
        <div className="resume-dated-list">
            {items.map((item) => (
                <div key={item.title} className="resume-dated-item">
                    <p>{item.title}</p>
                    {item.date && <span>{item.date}</span>}
                </div>
            ))}
        </div>
    );
}

export function Resume() {
    const [searchParams] = useSearchParams();
    const pdfMode = searchParams.get("pdf") === "1";

    useEffect(() => {
        if (!pdfMode) return;

        document.documentElement.dataset.resumePdf = "true";
        return () => {
            delete document.documentElement.dataset.resumePdf;
        };
    }, [pdfMode]);

    return (
        <section className={`resume-page py-10 md:py-14 ${pdfMode ? "resume-page--pdf" : ""}`}>
            <div className="page-wrap">
                {!pdfMode && (
                    <div className="resume-action-bar mb-8">
                        <Button
                            to="/experience"
                            variant="text"
                            size="sm"
                            className="mb-6 flex items-center gap-2 font-mono text-[13px] text-(--on-surface-muted)"
                        >
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                            back to experience
                        </Button>
                        <PageHeader
                            slug="experience/resume"
                            title={
                                <>
                                    My <strong>resume</strong>.
                                </>
                            }
                            right={
                                <Button
                                    href={ORIGINAL_RESUME_PDF_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                >
                                    <FontAwesomeIcon icon={faFilePdf} />
                                    Download PDF
                                </Button>
                            }
                        />
                    </div>
                )}

                <article className="resume-sheet">
                    <header className="resume-header">
                        <div>
                            <p className="resume-kicker">{RESUME.role}</p>
                            <h1>{RESUME.name}</h1>
                        </div>
                        <div className="resume-contact" aria-label="Contact details">
                            <span>{RESUME.location}</span>
                            {RESUME.contact.map((item) => (
                                <a key={item.label} href={item.href}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </header>

                    <div className="resume-summary-grid">
                        <ResumeSection title="Summary">
                            <p className="resume-summary">{RESUME.summary}</p>
                        </ResumeSection>
                        <div className="resume-highlight-panel" aria-label="Resume highlights">
                            {RESUME.highlights.map((highlight) => (
                                <span key={highlight}>{highlight}</span>
                            ))}
                        </div>
                    </div>

                    <ResumeSection title="Work Experience">
                        <div className="resume-experience-list">
                            {RESUME.experience.map((experience) => (
                                <article key={`${experience.company}-${experience.title}`} className="resume-role">
                                    <div className="resume-role-header">
                                        <div>
                                            <h3>{experience.title}</h3>
                                            <p>{experience.company}</p>
                                        </div>
                                        <span>{experience.dates}</span>
                                    </div>
                                    <ul>
                                        {experience.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Projects">
                        <div className="resume-project-list">
                            {RESUME.projects.map((project) => (
                                <article key={project.title} className="resume-project">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Skills">
                        <div className="resume-skills">
                            {RESUME.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Education">
                        <div className="resume-education">
                            <div>
                                <h3>{RESUME.education.school}</h3>
                                <p>
                                    {RESUME.education.degree} ({RESUME.education.detail})
                                </p>
                            </div>
                            <span>{RESUME.education.dates}</span>
                        </div>
                    </ResumeSection>

                    <div className="resume-bottom-grid">
                        <ResumeSection title="Awards">
                            <DatedItemList items={RESUME.awards} />
                        </ResumeSection>
                        <ResumeSection title="Certificates">
                            <DatedItemList items={RESUME.certificates} />
                        </ResumeSection>
                    </div>

                    <footer className="resume-footer">
                        <span>portfolio</span>
                        <a href="https://tanyijia.me/" target="_blank" rel="noopener noreferrer">
                            tanyijia.me <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </footer>
                </article>
            </div>
        </section>
    );
}
