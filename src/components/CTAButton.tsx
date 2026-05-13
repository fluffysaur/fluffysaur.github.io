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
            ? "bg-primary text-tertiary hover:bg-primary-deep"
            : "border hover:border-primary hover:bg-tertiary hover:text-primary";
    const variantStyle = variant === "secondary" ? { borderColor: "var(--outline)", color: "var(--on-surface-high)" } : undefined;
    return (
        <a className={`${BASE} ${variantClass} ${className}`} style={{ ...variantStyle, ...style }} {...rest}>
            {children}
        </a>
    );
}
