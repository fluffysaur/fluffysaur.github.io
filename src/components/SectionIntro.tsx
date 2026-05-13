import type { CSSProperties, ReactNode } from "react";

interface SectionIntroProps {
    path: string;
    title: ReactNode;
    subtitle?: ReactNode;
    titleSize?: number | string;
    subtitleClassName?: string;
}

export function SectionIntro({
    path,
    title,
    subtitle,
    titleSize = 36,
    subtitleClassName = "font-mono text-sm text-(--on-surface-muted)",
}: SectionIntroProps) {
    const titleStyle: CSSProperties = typeof titleSize === "number" ? { fontSize: titleSize } : { fontSize: titleSize };

    return (
        <>
            <div className="mb-2 flex items-baseline gap-3">
                <span className="font-mono text-sm text-(--on-surface-faint)">{path}</span>
            </div>

            <h2 className="mb-2 font-light text-(--on-surface)" style={titleStyle}>
                {title}
            </h2>

            {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
        </>
    );
}
