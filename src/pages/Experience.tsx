import { Footer } from "../components/Footer";
import { ExperienceItem } from "../components/Experience";
import { EXPERIENCES, RESUME_URL } from "../data/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Experience() {
    return (
        <>
            <section className="py-14">
                <div className="page-wrap">
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
                                Full work history across engineering, product, and film.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 border-t mb-8" style={{ borderColor: "var(--border-mid)" }}>
                        {EXPERIENCES.map((experience) => (
                            <ExperienceItem key={experience.id} experience={experience} />
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
