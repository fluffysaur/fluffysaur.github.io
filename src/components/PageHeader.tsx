import type { ReactNode } from "react";
import { TerminalComment, TerminalPath } from "./TerminalPath";

interface PageHeaderProps {
    slug: string;
    title: ReactNode;
    subtitle?: ReactNode;
    right?: ReactNode;
}

export function PageHeader({ slug, title, subtitle, right }: PageHeaderProps) {
    return (
        <header>
            <TerminalPath parts={[slug]} />
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
                <div>
                    <h1
                        className="font-light text-(--on-surface)"
                        style={{
                            fontSize: "clamp(36px, 6vw, 72px)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {title}
                    </h1>
                    {subtitle && <TerminalComment className="mt-6">{subtitle}</TerminalComment>}
                </div>
                {right}
            </div>
        </header>
    );
}
