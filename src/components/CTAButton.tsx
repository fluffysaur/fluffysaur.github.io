import type { AnchorHTMLAttributes, ReactNode } from "react";

interface CTAButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
    variant?: "primary" | "secondary";
    children: ReactNode;
}

const BASE =
    "inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all active:translate-y-px";

export function CTAButton({ variant = "secondary", children, className = "", style, ...rest }: CTAButtonProps) {
    const variantClass =
        variant === "primary"
            ? "bg-accent text-graphite hover:bg-accent-deep"
            : "border hover:border-accent hover:text-accent";
    const variantStyle =
        variant === "secondary" ? { borderColor: "var(--border)", color: "var(--fg-2)" } : undefined;
    return (
        <a className={`${BASE} ${variantClass} ${className}`} style={{ ...variantStyle, ...style }} {...rest}>
            {children}
        </a>
    );
}
