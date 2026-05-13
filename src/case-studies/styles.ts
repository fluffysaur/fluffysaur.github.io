import type { CSSProperties } from "react";

export const caseStyles = {
    content: {
        color: "var(--on-surface-medium)",
    } satisfies CSSProperties,
    heading: {
        color: "var(--on-surface)",
        borderColor: "var(--outline-variant)",
    } satisfies CSSProperties,
    headingPrefix: {
        color: "var(--color-primary)",
    } satisfies CSSProperties,
    callout: {
        background: "var(--surface-container-low)",
        borderLeftColor: "var(--color-primary)",
        color: "var(--on-surface-medium)",
    } satisfies CSSProperties,
    calloutTitle: {
        color: "var(--on-surface)",
    } satisfies CSSProperties,
    listBorder: {
        borderColor: "var(--outline-subtle)",
    } satisfies CSSProperties,
    strong: {
        color: "var(--on-surface)",
    } satisfies CSSProperties,
    statCard: {
        background: "var(--surface-container-low)",
        borderColor: "var(--outline-variant)",
    } satisfies CSSProperties,
    statValue: {
        color: "var(--color-primary)",
    } satisfies CSSProperties,
    statLabel: {
        color: "var(--on-surface-variant)",
    } satisfies CSSProperties,
};
