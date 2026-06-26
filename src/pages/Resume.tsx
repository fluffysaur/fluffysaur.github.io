import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { ORIGINAL_RESUME_PDF_URL, RESUME, type ResumeDatedItem } from "../data/resume";

function joinClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

const resumeHeadingClass =
    "mb-2 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-(--on-surface) before:block before:h-1 before:w-6 before:bg-primary before:content-['']";
const resumeTitleClass = "m-0 text-base font-extrabold tracking-normal text-(--on-surface)";
const resumeDateClass = "shrink-0 font-mono text-xs font-semibold text-(--on-surface-muted) md:text-right";
const resumePillClass = "inline-flex w-fit items-center rounded font-mono text-[10px] font-semibold tracking-wide";
const resumeMetaRowClass = "flex flex-col justify-between gap-1 md:flex-row md:gap-4";

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="resume-section mt-6 break-inside-avoid">
            <h2 className={resumeHeadingClass}>{title}</h2>
            {children}
        </section>
    );
}

function DatedItemList({ items }: { items: ResumeDatedItem[] }) {
    return (
        <div className="resume-dated-list grid gap-1">
            {items.map((item) => (
                <div key={item.title} className={joinClasses("resume-dated-item", resumeMetaRowClass)}>
                    <p className="mt-0 mb-1">{item.title}</p>
                    {item.date && <span className={resumeDateClass}>{item.date}</span>}
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
        <section
            className={joinClasses(
                "resume-page bg-[linear-gradient(to_bottom,var(--surface-container-low),transparent_240px),var(--surface)] py-10 md:py-14 print:bg-white! print:p-0!",
                pdfMode && "resume-page--pdf",
            )}
        >
            <div className="page-wrap print:m-0 print:max-w-none print:p-0">
                {!pdfMode && (
                    <div className="resume-action-bar mb-8 print:hidden">
                        <Button
                            to="/experience"
                            variant="text"
                            size="sm"
                            className="mb-6 flex items-center gap-2 font-mono text-sm text-(--on-surface-muted)"
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
                            subtitle="a printable summary of my professional self."
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

                <article className="resume-sheet mx-auto w-full overflow-auto rounded-lg border border-(--outline) bg-(--surface-container) p-6 text-sm leading-normal text-(--on-surface-high) shadow-(--term-shadow) md:p-10 [&_a]:text-(--on-surface) [&_a]:underline [&_a]:decoration-primary/75 [&_a]:underline-offset-4">
                    <header className="resume-header flex flex-col items-start justify-between gap-1 border-b-2 border-(--on-surface) pb-4 md:flex-row md:gap-6">
                        <div>
                            <p className="resume-kicker m-0 mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-(--on-surface)">
                                {RESUME.role}
                            </p>
                            <h1 className="m-0 text-3xl font-black tracking-normal text-(--on-surface) md:text-4xl">
                                {RESUME.name}
                            </h1>
                        </div>
                        <div
                            className="resume-contact flex max-w-none flex-wrap justify-start gap-x-3 gap-y-1 text-left text-xs md:max-w-70 md:justify-end md:text-right"
                            aria-label="Contact details"
                        >
                            <span className="whitespace-nowrap">{RESUME.location}</span>
                            {RESUME.contact.map((item) => (
                                <a key={item.label} href={item.href} className="whitespace-nowrap">
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </header>

                    <div className="resume-summary-grid grid grid-cols-1 gap-0 md:grid-cols-[minmax(0,1fr)_180px] md:gap-6">
                        <div>
                            <ResumeSection title="Summary">
                                <p className="resume-summary m-0">{RESUME.summary}</p>
                            </ResumeSection>
                            <ResumeSection title="Skills">
                                <div className="resume-skills flex flex-wrap gap-2">
                                    {RESUME.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={joinClasses(
                                                resumePillClass,
                                                "border border-(--outline) bg-(--surface-container-high) px-2 py-1",
                                            )}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </ResumeSection>
                        </div>
                        <div
                            className="resume-highlight-panel mt-6 grid content-start gap-2 break-inside-avoid rounded-md border border-primary/25 bg-primary/10 p-3"
                            aria-label="Resume highlights"
                        >
                            {RESUME.highlights.map((highlight) => (
                                <span key={highlight} className={joinClasses(resumePillClass, "text-(--on-surface)")}>
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ResumeSection title="Work Experience">
                        <div className="resume-experience-list grid gap-4">
                            {RESUME.experience.map((experience) => (
                                <article
                                    key={`${experience.company}-${experience.title}`}
                                    className="resume-role break-inside-avoid"
                                >
                                    <div className={joinClasses("resume-role-header", resumeMetaRowClass)}>
                                        <div>
                                            <h3 className={resumeTitleClass}>{experience.title}</h3>
                                            <p className="mt-1 mb-0">{experience.company}</p>
                                        </div>
                                        <span className={resumeDateClass}>{experience.dates}</span>
                                    </div>
                                    <ul className="mt-2 mb-0 list-outside list-disc pl-4">
                                        {experience.bullets.map((bullet) => (
                                            <li key={bullet} className="my-1">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Projects">
                        <div className="resume-project-list grid grid-cols-1 gap-4">
                            {RESUME.projects.map((project) => (
                                <article key={project.title} className="resume-project break-inside-avoid">
                                    <h3 className={resumeTitleClass}>{project.title}</h3>
                                    <p className="mt-1 mb-0">{project.description}</p>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Education">
                        <div className={joinClasses("resume-education", resumeMetaRowClass)}>
                            <div>
                                <h3 className={resumeTitleClass}>{RESUME.education.school}</h3>
                                <p className="mt-1 mb-0">
                                    {RESUME.education.degree} ({RESUME.education.detail})
                                </p>
                            </div>
                            <span className={resumeDateClass}>{RESUME.education.dates}</span>
                        </div>
                    </ResumeSection>

                    <div className="resume-bottom-grid grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6">
                        <ResumeSection title="Awards">
                            <DatedItemList items={RESUME.awards} />
                        </ResumeSection>
                        <ResumeSection title="Certificates">
                            <DatedItemList items={RESUME.certificates} />
                        </ResumeSection>
                    </div>
                </article>
            </div>
        </section>
    );
}
