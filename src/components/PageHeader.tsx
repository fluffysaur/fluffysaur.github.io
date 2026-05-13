import type { ReactNode } from "react";

interface PageHeaderProps {
    slug: string;
    title: ReactNode;
    subtitle?: ReactNode;
    right?: ReactNode;
}

export function PageHeader({ slug, title, subtitle, right }: PageHeaderProps) {
    return (
        <header>
            <p className="mb-4 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-(--on-surface-subtle)">
                <span className="inline-block w-6 h-px bg-primary" />/{slug}
            </p>
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
                    {subtitle && (
                        <p className="mt-6 max-w-[60ch] text-[20px] font-light text-(--on-surface-medium)">
                            {subtitle}
                        </p>
                    )}
                </div>
                {right}
            </div>
        </header>
    );
}
