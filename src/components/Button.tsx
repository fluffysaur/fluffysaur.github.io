import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, MouseEvent, ReactNode } from "react";
import { Link, useLocation, type LinkProps } from "react-router-dom";
import { scrollToPageTop, shouldScrollForLinkClick } from "../utils/navigation";

export type ButtonVariant = "primary" | "secondary" | "icon" | "tab" | "text";
export type ButtonSize = "sm" | "md";

interface ButtonBaseProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    active?: boolean;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
}

type ButtonAsNativeProps = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className" | "style" | "disabled"> & {
        to?: never;
        href?: never;
    };

type ButtonAsRouterLinkProps = ButtonBaseProps &
    Omit<LinkProps, "children" | "className" | "to"> & {
        to: LinkProps["to"];
        href?: never;
    };

type ButtonAsAnchorProps = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "style" | "href" | "disabled"> & {
        href: string;
        to?: never;
    };

export type ButtonProps = ButtonAsNativeProps | ButtonAsRouterLinkProps | ButtonAsAnchorProps;

function joinClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function sizeClass(variant: ButtonVariant, size: ButtonSize) {
    if (variant === "primary" || variant === "secondary") {
        return size === "sm"
            ? "inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em]"
            : "inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em]";
    }

    if (variant === "icon") {
        return size === "sm"
            ? "inline-flex h-7 w-7 items-center justify-center rounded"
            : "inline-flex h-10 w-10 items-center justify-center rounded";
    }

    if (variant === "tab") {
        return size === "sm"
            ? "-mb-px shrink-0 whitespace-nowrap px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em]"
            : "-mb-px shrink-0 whitespace-nowrap px-4 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em]";
    }

    return size === "sm" ? "text-[12px]" : "text-sm";
}

function variantClass(variant: ButtonVariant, active: boolean) {
    if (variant === "primary") {
        return "bg-primary text-tertiary hover:bg-primary-deep";
    }

    if (variant === "secondary") {
        return "border hover:border-primary hover:bg-tertiary hover:text-primary";
    }

    if (variant === "icon") {
        return joinClasses(
            "border border-(--outline) bg-transparent text-(--on-surface-muted) hover:border-primary hover:text-primary",
            active && "border-primary bg-primary/10 text-primary",
        );
    }

    if (variant === "tab") {
        return joinClasses(
            "border-x-0 border-t-0 border-b-2 bg-transparent",
            active ? "border-primary text-primary" : "border-transparent text-(--on-surface-variant)",
        );
    }

    return joinClasses("no-underline transition-colors hover:text-primary", active && "text-primary");
}

export function Button(props: ButtonProps) {
    const { children, variant = "secondary", size = "md", active = false, className, style, disabled = false } = props;
    const location = useLocation();

    const classes = joinClasses(
        "transition-all",
        "cursor-pointer",
        variant !== "text" && "no-underline",
        (variant === "primary" || variant === "secondary") && "active:translate-y-px",
        disabled && "pointer-events-none opacity-55",
        sizeClass(variant, size),
        variantClass(variant, active),
        className,
    );

    const variantStyle =
        variant === "secondary" ? { borderColor: "var(--outline)", color: "var(--on-surface-high)" } : undefined;
    const mergedStyle = { ...variantStyle, ...style };

    if ("to" in props && props.to !== undefined) {
        const {
            to,
            onClick,
            children: _children,
            variant: _variant,
            size: _size,
            active: _active,
            className: _className,
            style: _style,
            disabled: _disabled,
            ...rest
        } = props;

        const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
            if (disabled) {
                event.preventDefault();
                return;
            }
            onClick?.(event);
            if (shouldScrollForLinkClick(event, to, location)) {
                scrollToPageTop();
            }
        };

        return (
            <Link
                to={to}
                className={classes}
                style={mergedStyle}
                aria-disabled={disabled || undefined}
                onClick={handleLinkClick}
                {...rest}
            >
                {children}
            </Link>
        );
    }

    if ("href" in props && props.href !== undefined) {
        const {
            href,
            onClick,
            children: _children,
            variant: _variant,
            size: _size,
            active: _active,
            className: _className,
            style: _style,
            disabled: _disabled,
            ...rest
        } = props;

        const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
            if (disabled) {
                event.preventDefault();
                return;
            }
            onClick?.(event);
        };

        return (
            <a
                href={href}
                className={classes}
                style={mergedStyle}
                aria-disabled={disabled || undefined}
                onClick={handleAnchorClick}
                {...rest}
            >
                {children}
            </a>
        );
    }

    const {
        type = "button",
        onClick,
        children: _children,
        variant: _variant,
        size: _size,
        active: _active,
        className: _className,
        style: _style,
        disabled: _disabled,
        ...rest
    } = props;

    return (
        <button type={type} className={classes} style={mergedStyle} disabled={disabled} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}
