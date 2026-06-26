import { TagRow } from "../Tag";
import { formatExperienceRange } from "../../data/experience";
import type { Experience } from "../../types";

interface ExperienceItemProps {
    experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <article className="grid gap-6 border-b border-(--outline-variant) px-3 py-8 shadow-[inset_2px_0_0_transparent] transition-shadow duration-[250ms] ease-in-out hover:shadow-[inset_2px_0_0_var(--color-primary)] md:grid-cols-[210px_minmax(0,1fr)]">
            <div>
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase mb-2 text-(--on-surface-subtle)">
                    {formatExperienceRange(experience)}
                </p>
            </div>

            <div>
                <h2 className="font-light text-[20px] leading-tight text-(--on-surface)">{experience.title}</h2>
                <p className="mt-2 text-[14px] text-(--on-surface-variant)">
                    {experience.company} · {experience.role}
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-(--on-surface-medium)">{experience.description}</p>
                <div className="mt-5">
                    <TagRow tags={experience.stack} />
                </div>
            </div>
        </article>
    );
}
