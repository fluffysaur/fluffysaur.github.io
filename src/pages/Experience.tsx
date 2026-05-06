import { Footer } from "../components/Footer";
import { TagRow } from "../components/Tag";
import { EXPERIENCES, RESUME_URL, formatExperienceRange } from "../data/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Experience() {
    return (
        <>
            <section className="py-14">
                <div className="max-w-285 mx-auto px-5 md:px-8">
                    <p
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                        style={{ color: "var(--fg-6)" }}
                    >
                        <span className="inline-block w-6 h-px bg-accent" />
                        /experience
                    </p>

                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
                        <div>
                            <h1
                                className="font-light mb-4"
                                style={{
                                    fontSize: "clamp(36px, 6vw, 72px)",
                                    letterSpacing: "-0.01em",
                                    color: "var(--fg-1)",
                                }}
                            >
                                Career <strong>experience</strong>.
                            </h1>
                            <p className="font-light text-[20px]" style={{ color: "var(--fg-3)", maxWidth: "60ch" }}>
                                Full work history in descending date order across engineering, product, and film.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 border-t mb-8" style={{ borderColor: "var(--border-mid)" }}>
                        {EXPERIENCES.map((experience) => (
                            <article
                                key={experience.id}
                                className="grid gap-6 py-8 border-b md:grid-cols-[210px_minmax(0,1fr)]"
                                style={{ borderColor: "var(--border-mid)" }}
                            >
                                <div>
                                    <p
                                        className="font-mono text-[11px] tracking-[0.12em] uppercase mb-2"
                                        style={{ color: "var(--fg-6)" }}
                                    >
                                        {formatExperienceRange(experience)}
                                    </p>
                                </div>

                                <div>
                                    <h2
                                        className="font-light text-[28px] leading-tight"
                                        style={{ color: "var(--fg-1)" }}
                                    >
                                        {experience.title}
                                    </h2>
                                    <p className="mt-2 text-[14px]" style={{ color: "var(--fg-4)" }}>
                                        {experience.company} · {experience.role}
                                    </p>
                                    <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "var(--fg-3)" }}>
                                        {experience.description}
                                    </p>
                                    <div className="mt-5">
                                        <TagRow tags={experience.stack} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:border-accent hover:text-accent"
                        style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                    >
                        View full resume <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
}
