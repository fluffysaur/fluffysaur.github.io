import { Link } from "react-router-dom";
import { ExperienceItem } from "../Experience/ExperienceItem";
import { HIGHLIGHTED_EXPERIENCES } from "../../data/experience";

export function HomeExperiencePreview() {
    const experiences = HIGHLIGHTED_EXPERIENCES;

    return (
        <section className="pb-20">
            <div className="page-wrap">
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-sm" style={{ color: "var(--fg-7)" }}>
                        ~/career/
                    </span>
                </div>

                <h2 className="font-light mb-2" style={{ fontSize: 36, color: "var(--fg-1)" }}>
                    <strong>Experience</strong>
                </h2>

                <p className="font-mono text-sm mb-8" style={{ color: "var(--fg-5)" }}>
                    // my latest roles
                </p>

                <div className="border-t" style={{ borderColor: "var(--border-mid)" }}>
                    {experiences.map((experience) => (
                        <ExperienceItem key={experience.id} experience={experience} />
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="/experience"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:border-accent hover:text-accent"
                        style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                    >
                        View all experience →
                    </Link>
                </div>
            </div>
        </section>
    );
}
