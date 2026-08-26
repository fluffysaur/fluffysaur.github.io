import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { ORIGINAL_RESUME_PDF_URL, RESUME, type ResumeDatedItem } from "../data/resume";

function joinClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

const resumeHeadingClass =
    "resume-heading flex items-center gap-2 font-bold uppercase tracking-wider text-(--on-surface) before:block before:h-1.5 before:w-6 before:bg-primary before:content-['']";
const resumeTitleClass = "resume-title m-0 font-bold tracking-normal text-(--on-surface)";
const resumeDateClass = "resume-date shrink-0 font-semibold text-right whitespace-nowrap";
const resumeMetaRowClass = "flex flex-row justify-between items-baseline gap-4";

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="resume-section break-inside-avoid">
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
                    <p className="m-0">{item.title}</p>
                    {item.date && <span className={resumeDateClass}>{item.date}</span>}
                </div>
            ))}
        </div>
    );
}

export function Resume() {
    const [searchParams] = useSearchParams();
    const pdfMode = searchParams.get("pdf") === "1";
    const containerRef = useRef<HTMLDivElement>(null);
    const sheetRef = useRef<HTMLElement>(null);
    const [scale, setScale] = useState(1);
    const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (!pdfMode) return;

        document.documentElement.dataset.resumePdf = "true";
        return () => {
            delete document.documentElement.dataset.resumePdf;
        };
    }, [pdfMode]);

    useEffect(() => {
        if (pdfMode) return;

        const updateScale = () => {
            if (!containerRef.current || !sheetRef.current) return;
            const containerWidth = containerRef.current.clientWidth;
            const sheetWidth = sheetRef.current.offsetWidth || 1120;
            const sheetHeight = sheetRef.current.offsetHeight;

            if (containerWidth > 0 && containerWidth < sheetWidth) {
                const newScale = containerWidth / sheetWidth;
                setScale(newScale);
                if (sheetHeight) {
                    setScaledHeight(sheetHeight * newScale);
                }
            } else {
                setScale(1);
                setScaledHeight(undefined);
            }
        };

        updateScale();

        const observer = new ResizeObserver(() => {
            updateScale();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        if (sheetRef.current) {
            observer.observe(sheetRef.current);
        }

        window.addEventListener("resize", updateScale);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateScale);
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

                <div
                    ref={containerRef}
                    className="resume-scale-container"
                    style={{ height: scaledHeight ? `${scaledHeight}px` : undefined }}
                >
                    <div
                        className="resume-scale-wrapper"
                        style={{
                            transform: scale < 1 ? `scale(${scale})` : undefined,
                            transformOrigin: "top center",
                        }}
                    >
                        <article
                            ref={sheetRef}
                            className="resume-sheet rounded-lg border border-(--outline) bg-(--surface-container) shadow-(--term-shadow) [&_a]:text-(--on-surface) [&_a]:underline [&_a]:decoration-primary/75 [&_a]:underline-offset-4"
                        >
                            <header className="resume-header flex flex-row items-start justify-between border-b-2 border-(--on-surface)">
                                <div>
                                    <p className="resume-kicker m-0 uppercase text-(--on-surface)">
                                        {RESUME.role}
                                    </p>
                                    <h1 className="m-0 tracking-normal text-(--on-surface)">
                                        {RESUME.name}
                                    </h1>
                                </div>
                                <div
                                    className="resume-contact"
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

                            <ResumeSection title="Summary">
                                <p className="resume-summary m-0">{RESUME.summary}</p>
                            </ResumeSection>
                            <ResumeSection title="Skills">
                                <div className="resume-skills grid gap-1.5">
                                    {RESUME.skills.map((group) => (
                                        <div
                                            key={group.category}
                                            className="resume-skill-row flex flex-row items-baseline gap-2"
                                        >
                                            <span className="resume-skill-category font-bold text-(--on-surface) shrink-0 min-w-44">
                                                {group.category}:
                                            </span>
                                            <span className="resume-skill-items text-(--on-surface-medium)">
                                                {group.skills.join(", ")}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </ResumeSection>

                            <ResumeSection title="Work Experience">
                                <div className="resume-experience-list grid gap-3">
                                    {RESUME.experience.map((experience) => (
                                        <article
                                            key={experience.company}
                                            className="resume-role break-inside-avoid"
                                        >
                                            <div className="resume-company-header">
                                                <h3 className={resumeTitleClass}>
                                                    <span className="font-bold">{experience.company}</span>
                                                </h3>
                                            </div>
                                            <div className="resume-subroles-wrap grid gap-2 mt-1">
                                                {experience.roles.map((role) => (
                                                    <div key={role.title} className="resume-subrole">
                                                        <div
                                                            className={joinClasses(
                                                                "resume-subrole-header",
                                                                resumeMetaRowClass,
                                                            )}
                                                        >
                                                            <h4 className="resume-subrole-title m-0 text-sm font-semibold italic tracking-normal text-(--on-surface)">
                                                                {role.title}
                                                            </h4>
                                                            <span className={resumeDateClass}>{role.dates}</span>
                                                        </div>
                                                        <ul className="mt-1 mb-0 list-outside list-disc pl-4 text-(--on-surface-medium)">
                                                            {role.bullets.map((bullet) => (
                                                                <li key={bullet} className="my-0.5">
                                                                    {bullet}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </ResumeSection>

                            <ResumeSection title="Projects">
                                <div className="resume-project-list grid grid-cols-1 gap-2.5">
                                    {RESUME.projects.map((project) => (
                                        <article key={project.title} className="resume-project break-inside-avoid">
                                            <div className={joinClasses("resume-project-header", resumeMetaRowClass)}>
                                                <h3 className={resumeTitleClass}>{project.title}</h3>
                                                {project.dates && <span className={resumeDateClass}>{project.dates}</span>}
                                            </div>
                                            <p className="mt-0.5 mb-0 text-(--on-surface-medium)">{project.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </ResumeSection>

                            <ResumeSection title="Education">
                                <div className={joinClasses("resume-education", resumeMetaRowClass)}>
                                    <div className="w-full">
                                        <div className={joinClasses("resume-education-header", resumeMetaRowClass)}>
                                            <h3 className={resumeTitleClass}>
                                                {RESUME.education.school}{" "}
                                                <span className="resume-company font-medium text-(--on-surface-muted)">
                                                    — {RESUME.education.detail}
                                                </span>
                                            </h3>
                                            <span className={resumeDateClass}>{RESUME.education.dates}</span>
                                        </div>
                                        <p className="mt-0.5 mb-0 text-(--on-surface-medium)">
                                            {RESUME.education.degree}
                                        </p>
                                        {RESUME.education.teachingAssistant && (
                                            <div className="resume-ta-item mt-1.5">
                                                <div className={joinClasses("resume-ta-header", resumeMetaRowClass)}>
                                                    <span className="font-semibold text-(--on-surface)">
                                                        {RESUME.education.teachingAssistant.role}
                                                    </span>
                                                    <span className={resumeDateClass}>
                                                        {RESUME.education.teachingAssistant.dates}
                                                    </span>
                                                </div>
                                                <p className="mt-0.5 mb-0 text-(--on-surface-medium)">
                                                    {RESUME.education.teachingAssistant.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ResumeSection>

                            <div className="resume-bottom-grid grid grid-cols-2 gap-6">
                                <ResumeSection title="Awards">
                                    <DatedItemList items={RESUME.awards} />
                                </ResumeSection>
                                <ResumeSection title="Certificates">
                                    <DatedItemList items={RESUME.certificates} />
                                </ResumeSection>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
