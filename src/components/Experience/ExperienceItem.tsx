import { TagRow } from "../Tag";
import { formatExperienceRange } from "../../data/experience";
import type { Experience } from "../../types";

interface ExperienceItemProps {
    experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <article
            className="experience-item grid gap-6 py-8 px-3 border-b md:grid-cols-[210px_minmax(0,1fr)]"
            style={{ borderColor: "var(--border-mid)" }}
        >
            <div>
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase mb-2" style={{ color: "var(--fg-6)" }}>
                    {formatExperienceRange(experience)}
                </p>
            </div>

            <div>
                <h2 className="font-light text-[20px] leading-tight" style={{ color: "var(--fg-1)" }}>
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
    );
}
