import { Link } from "react-router-dom";
import { ExperienceItem } from "../Experience";
import { HIGHLIGHTED_EXPERIENCES } from "../../data/experience";

export function HomeExperiencePreview() {
    const experiences = HIGHLIGHTED_EXPERIENCES;

    return (
        <section className="pb-20">
            <div className="page-wrap">
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-sm text-(--on-surface-faint)">~/career/</span>
                </div>

                <h2 className="mb-2 font-light text-(--on-surface)" style={{ fontSize: 36 }}>
                    <strong>Experience</strong>
                </h2>

                <p className="font-mono text-sm mb-8 text-(--on-surface-muted)">// my latest roles</p>

                <div className="border-t border-(--outline-variant)">
                    {experiences.map((experience) => (
                        <ExperienceItem key={experience.id} experience={experience} />
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        to="/experience"
                        className="inline-flex items-center gap-2.5 rounded-full border border-(--outline) px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-(--on-surface-high) no-underline transition-all hover:border-primary hover:text-primary"
                    >
                        View all experience →
                    </Link>
                </div>
            </div>
        </section>
    );
}
