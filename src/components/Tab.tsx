import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type TabVariant = "filter" | "nav";

interface TabBaseProps {
    children: ReactNode;
    active?: boolean;
    variant?: TabVariant;
    className?: string;
}

type TabAsDivProps = TabBaseProps &
    Omit<HTMLAttributes<HTMLDivElement>, "children" | "className"> & {
        as: "div";
        to?: never;
    };

type TabAsButtonProps = TabBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
        to?: never;
        as?: never;
    };

type TabAsLinkProps = TabBaseProps &
    Omit<LinkProps, "children" | "className" | "to"> & {
        to: LinkProps["to"];
        as?: never;
    };

export type TabProps = TabAsDivProps | TabAsButtonProps | TabAsLinkProps;

function joinClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function variantClasses(variant: TabVariant, active: boolean) {
    if (variant === "nav") {
        return joinClasses(
            "flex items-center gap-1.5 border-b-2 px-4 py-2.5 text-[12px] font-mono whitespace-nowrap shrink-0 no-underline transition-colors",
            active
                ? "border-primary bg-(--surface) text-primary"
                : "border-transparent text-(--on-surface-variant) hover:bg-(--surface-container-low)",
        );
    }

    return joinClasses(
        "-mb-px shrink-0 whitespace-nowrap border-x-0 border-t-0 border-b-2 bg-transparent px-4 py-3.5 text-[12px] font-medium tracking-[0.2em] uppercase transition-all font-[inherit]",
        active
            ? "border-primary text-primary"
            : "border-transparent text-(--on-surface-variant) hover:border-(--outline)",
    );
}

export function Tab(props: TabProps) {
    const { children, active = false, variant = "filter", className } = props;
    const classes = joinClasses(variantClasses(variant, active), className);

    if ("as" in props && props.as === "div") {
        const {
            children: _children,
            active: _active,
            variant: _variant,
            className: _className,
            as: _as,
            ...rest
        } = props;
        return (
            <div className={classes} {...rest}>
                {children}
            </div>
        );
    }

    if ("to" in props && props.to !== undefined) {
        const { to, children: _children, active: _active, variant: _variant, className: _className, ...rest } = props;
        return (
            <Link to={to} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    const {
        type = "button",
        children: _children,
        active: _active,
        variant: _variant,
        className: _className,
        ...rest
    } = props;
    return (
        <button type={type} className={classes} {...rest}>
            {children}
        </button>
    );
}
