import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowUpRightFromSquare, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { ORIGINAL_RESUME_PDF_URL, RESUME, type ResumeDatedItem } from "../data/resume";

function joinClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

const resumeHeadingClass =
    "mb-2 flex items-center gap-[10px] font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#171717] before:block before:h-0.5 before:w-6 before:bg-primary before:content-['']";
const resumeTitleClass = "m-0 text-[15px] font-extrabold tracking-normal text-[#171717]";
const resumeDateClass = "shrink-0 font-mono text-[11px] font-semibold text-[#4b4b4b] md:text-right";
const resumePillClass =
    "inline-flex w-fit items-center rounded font-mono text-[10px] font-semibold tracking-[0.04em]";
const resumeMetaRowClass = "flex flex-col justify-between gap-1 md:flex-row md:gap-4";

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="resume-section mt-[18px] break-inside-avoid">
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
                    <p className="mt-0 mb-0.5">{item.title}</p>
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
                "resume-page bg-[linear-gradient(to_bottom,var(--surface-container-low),transparent_240px),var(--surface)] py-10 md:py-14",
                pdfMode && "resume-page--pdf",
            )}
        >
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
                            subtitle="editable html, exported with playwright"
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

                <article className="resume-sheet mx-auto aspect-[1/1.414] w-full overflow-auto rounded-lg border border-(--outline) bg-[#fbfbf8] p-6 text-[13px] leading-[1.45] text-[#171717] shadow-(--term-shadow) md:p-10 [&_a]:text-[#171717] [&_a]:underline [&_a]:decoration-[rgba(var(--color-primary-rgb),0.75)] [&_a]:[text-underline-offset:3px]">
                    <header className="resume-header flex flex-col items-start justify-between gap-1 border-b-2 border-[#171717] pb-[18px] md:flex-row md:gap-6">
                        <div>
                            <p className="resume-kicker m-0 mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-deep">
                                {RESUME.role}
                            </p>
                            <h1 className="m-0 text-[34px] font-black tracking-normal text-[#171717]">
                                {RESUME.name}
                            </h1>
                        </div>
                        <div
                            className="resume-contact flex max-w-none flex-wrap justify-start gap-x-3 gap-y-1 text-left text-[12px] md:max-w-[280px] md:justify-end md:text-right"
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
                        <ResumeSection title="Summary">
                            <p className="resume-summary m-0">{RESUME.summary}</p>
                        </ResumeSection>
                        <div
                            className="resume-highlight-panel mt-[18px] grid content-start gap-2 break-inside-avoid rounded-md border border-[rgba(23,23,23,0.12)] bg-[rgba(var(--color-primary-rgb),0.12)] p-3"
                            aria-label="Resume highlights"
                        >
                            {RESUME.highlights.map((highlight) => (
                                <span key={highlight} className={joinClasses(resumePillClass, "text-tertiary")}>
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    <ResumeSection title="Work Experience">
                        <div className="resume-experience-list grid gap-[14px]">
                            {RESUME.experience.map((experience) => (
                                <article
                                    key={`${experience.company}-${experience.title}`}
                                    className="resume-role break-inside-avoid"
                                >
                                    <div className={joinClasses("resume-role-header", resumeMetaRowClass)}>
                                        <div>
                                            <h3 className={resumeTitleClass}>{experience.title}</h3>
                                            <p className="mt-0.5 mb-0">{experience.company}</p>
                                        </div>
                                        <span className={resumeDateClass}>{experience.dates}</span>
                                    </div>
                                    <ul className="mt-1.5 mb-0 list-outside list-disc pl-[18px]">
                                        {experience.bullets.map((bullet) => (
                                            <li key={bullet} className="my-0.5">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Projects">
                        <div className="resume-project-list grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4">
                            {RESUME.projects.map((project) => (
                                <article key={project.title} className="resume-project break-inside-avoid">
                                    <h3 className={resumeTitleClass}>{project.title}</h3>
                                    <p className="mt-0.5 mb-0">{project.description}</p>
                                </article>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Skills">
                        <div className="resume-skills flex flex-wrap gap-2">
                            {RESUME.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={joinClasses(
                                        resumePillClass,
                                        "border border-[rgba(23,23,23,0.12)] bg-[rgba(23,23,23,0.04)] px-2 py-1",
                                    )}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Education">
                        <div className={joinClasses("resume-education", resumeMetaRowClass)}>
                            <div>
                                <h3 className={resumeTitleClass}>{RESUME.education.school}</h3>
                                <p className="mt-0.5 mb-0">
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

                    <footer className="resume-footer mt-[18px] flex justify-between gap-4 border-t border-[rgba(23,23,23,0.12)] pt-3 font-mono text-[10px] uppercase">
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
