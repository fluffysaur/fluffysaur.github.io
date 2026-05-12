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
            <p
                className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                style={{ color: "var(--fg-6)" }}
            >
                <span className="inline-block w-6 h-px bg-accent" />
                /{slug}
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
                <div>
                    <h1
                        className="font-light"
                        style={{
                            fontSize: "clamp(36px, 6vw, 72px)",
                            letterSpacing: "-0.01em",
                            color: "var(--fg-1)",
                        }}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <p
                            className="font-light text-[20px] mt-6"
                            style={{ color: "var(--fg-3)", maxWidth: "60ch" }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
                {right}
            </div>
        </header>
    );
}
