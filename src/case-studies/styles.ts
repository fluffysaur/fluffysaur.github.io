import type { CSSProperties } from "react";

export const caseStyles = {
    content: {
        color: "var(--fg-3)",
    } satisfies CSSProperties,
    heading: {
        color: "var(--fg-1)",
        borderColor: "var(--border-mid)",
    } satisfies CSSProperties,
    headingPrefix: {
        color: "var(--color-accent)",
    } satisfies CSSProperties,
    callout: {
        background: "var(--bg-card)",
        borderLeftColor: "var(--color-accent)",
        color: "var(--fg-3)",
    } satisfies CSSProperties,
    calloutTitle: {
        color: "var(--fg-1)",
    } satisfies CSSProperties,
    listBorder: {
        borderColor: "var(--border-sub)",
    } satisfies CSSProperties,
    strong: {
        color: "var(--fg-1)",
    } satisfies CSSProperties,
    statCard: {
        background: "var(--bg-card)",
        borderColor: "var(--border-mid)",
    } satisfies CSSProperties,
    statValue: {
        color: "var(--color-accent)",
    } satisfies CSSProperties,
    statLabel: {
        color: "var(--fg-4)",
    } satisfies CSSProperties,
};
