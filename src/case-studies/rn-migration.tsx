import { TagRow } from "../components/Tag";

export const meta = {
    id: "rn-migration",
    title: "GE App React Native Migration",
    subtitle: "Migrating a legacy mobile codebase to React Native — improving performance, DX, and maintainability.",
    repoLabel: "rn-migration",
    dates: "2025 – present",
    role: "Software Engineer",
    team: "Mobile Team",
    tags: ["React Native", "TypeScript", "iOS", "Android", "Hermes"],
    toc: ["Overview", "The Problem", "Approach", "Outcomes"],
    prev: null,
    next: { id: "staffany", title: "StaffAny Rewards" },
};

const S = {
    heading: {
        fontSize: 32,
        fontWeight: 200,
        color: "var(--fg-1)",
        marginTop: 56,
        marginBottom: 20,
        paddingBottom: 12,
        borderBottom: "1px solid var(--border-mid)",
        letterSpacing: "-0.01em",
    } as React.CSSProperties,
    mono: { color: "#f2cb05", fontFamily: "var(--font-mono, monospace)", fontWeight: 400 } as React.CSSProperties,
    callout: {
        background: "var(--bg-card)",
        borderLeft: "3px solid #f2cb05",
        padding: "16px 20px",
        margin: "24px 0",
        fontSize: 15,
        color: "var(--fg-3)",
        lineHeight: 1.6,
    } as React.CSSProperties,
};

export function RnMigrationContent() {
    return (
        <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--fg-3)" }}>
            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Overview
            </h2>
            <p>
                Details for this project are coming soon — this case study is a placeholder while the full write-up is
                being drafted.
            </p>
            <div style={S.callout}>
                <strong style={{ color: "var(--fg-1)" }}>Status</strong> — Currently in progress. Check back soon for
                the full case study.
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>The Problem
            </h2>
            <p>
                The existing mobile codebase had accumulated significant technical debt over several years of
                development, leading to performance issues, slow build times, and difficulty onboarding new engineers.
            </p>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Approach
            </h2>
            <p>
                Led a phased migration to React Native with TypeScript, enabling shared code between iOS and Android
                while significantly improving the developer experience and app performance via the Hermes JavaScript
                engine.
            </p>

            <div style={{ marginTop: 40 }}>
                <TagRow tags={meta.tags} />
            </div>
        </div>
    );
}
