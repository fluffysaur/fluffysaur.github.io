import { Link } from "react-router-dom";
import { TagRow } from "../Tag";
import { LATEST_HIGHLIGHTED_EXPERIENCE, formatExperienceRange } from "../../data/experience";

export function HomeExperiencePreview() {
    const experience = LATEST_HIGHLIGHTED_EXPERIENCE;

    return (
        <section className="pb-20">
            <div className="max-w-285 mx-auto px-5 md:px-16">
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-sm" style={{ color: "var(--fg-7)" }}>
                        ~/career/
                    </span>
                </div>

                <h2 className="font-light mb-2" style={{ fontSize: 36, color: "var(--fg-1)" }}>
                    <strong>Experience</strong>
                </h2>

                <p className="font-mono text-sm mb-8" style={{ color: "var(--fg-5)" }}>
                    // latest highlighted role
                </p>

                <article
                    className="rounded-lg border p-6"
                    style={{ borderColor: "var(--border-mid)", background: "var(--bg-card)" }}
                >
                    <p className="text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: "var(--fg-5)" }}>
                        {formatExperienceRange(experience)}
                    </p>
                    <h3 className="font-light text-[28px] leading-tight" style={{ color: "var(--fg-1)" }}>
                        {experience.title}
                    </h3>
                    <p className="mt-2 text-[14px]" style={{ color: "var(--fg-4)" }}>
                        {experience.company} · {experience.role}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--fg-3)", maxWidth: "72ch" }}>
                        {experience.description}
                    </p>
                    <div className="mt-5">
                        <TagRow tags={experience.stack} />
                    </div>
                </article>

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
