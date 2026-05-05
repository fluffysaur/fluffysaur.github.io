import { TagRow } from "../components/Tag";

export const meta = {
    id: "staffany",
    title: "StaffAny Rewards",
    subtitle: "A concise case study on improving first-week activation with a guided Rewards checklist.",
    repoLabel: "staffany-rewards",
    dates: "Jan 2022 – Aug 2022",
    role: "Product Designer",
    team: "Growth Pod",
    tags: ["Figma", "Jira", "Notion", "Design System", "Growth"],
    toc: [
        "Background",
        "My Role",
        "Research",
        "Solution",
        "Usability Testing",
        "Internal Validation",
        "Outcomes",
        "Further Iterations",
    ],
    prev: { id: "interseed", title: "Interseed Web App" },
    next: { id: "launchpad", title: "Launchpad: New Beginnings" },
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

export function StaffanyContent() {
    return (
        <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--fg-3)" }}>
            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Background
            </h2>
            <p>
                StaffAny serves thousands of shift workers across Southeast Asia. The Growth Pod identified a recurring
                issue in onboarding: users signed up but dropped before discovering the features that created long-term
                value.
            </p>
            <div style={S.callout}>
                <strong style={{ color: "var(--fg-1)" }}>TL;DR</strong> — I designed a rewards-driven checklist that
                guided new users through key setup tasks and surfaced core product value earlier in their journey.
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>My Role
            </h2>
            <p>
                I owned product design for the feature from framing to post-launch validation: defining the activation
                flow with PMs, prototyping and testing with users, and partnering with engineers on rollout details.
            </p>

            <img
                src="/assets/thumbnails/learnandearn-thumb.jpg"
                alt="StaffAny Rewards UI"
                style={{ width: "100%", borderRadius: 6, margin: "32px 0", display: "block" }}
            />

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Research
            </h2>
            <ul style={{ margin: "14px 0 0", paddingLeft: 18 }}>
                <li>Analyzed onboarding drop-off with PMs to locate where users stalled.</li>
                <li>Reviewed competitor and best-practice patterns for progress gamification.</li>
                <li>Mapped first-week jobs-to-be-done into actionable task milestones.</li>
            </ul>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Solution
            </h2>
            <p>
                The proposed Rewards experience used a clear task ladder: complete meaningful setup actions, earn
                visible progress, and unlock next-step guidance. This kept onboarding focused on behavior change, not
                just visual engagement.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "18px 0" }}>
                {[
                    ["Card A", "Quick setup actions to get users moving immediately."],
                    ["Card B", "Mid-funnel tasks tied to product depth and confidence."],
                    ["Card C", "Higher-value tasks that reinforce retention behaviors."],
                ].map(([t, d], i) => (
                    <li
                        key={i}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "auto 160px 1fr",
                            gap: 16,
                            padding: "14px 0",
                            borderTop: "1px solid var(--border-sub)",
                        }}
                    >
                        <span style={{ color: "#f2cb05" }}>✓</span>
                        <strong style={{ color: "var(--fg-1)", fontWeight: 500 }}>{t}</strong>
                        <span>{d}</span>
                    </li>
                ))}
            </ul>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Usability Testing
            </h2>
            <p>
                Two testing rounds were run with first-week users. Round 1 exposed unclear progress language and missing
                context for reward value. Round 2 validated clearer labels, improved hierarchy, and better guidance for
                what to do next.
            </p>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Internal Validation
            </h2>
            <p>
                Before final rollout, the flow was reviewed with product, support, and engineering to confirm
                feasibility, edge cases, and event tracking alignment. This reduced ambiguity during implementation.
            </p>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Outcomes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, margin: "24px 0" }}>
                {[
                    ["48k+", "Users reached"],
                    ["2", "Rounds of user testing"],
                    ["3", "Core activation cards"],
                ].map(([n, l], i) => (
                    <div
                        key={i}
                        style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border-mid)",
                            borderRadius: 6,
                            padding: 24,
                        }}
                    >
                        <div style={{ fontSize: 40, fontWeight: 200, color: "#f2cb05", lineHeight: 1.1 }}>{n}</div>
                        <div style={{ fontSize: 13, color: "var(--fg-4)", marginTop: 4 }}>{l}</div>
                    </div>
                ))}
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Further Iterations
            </h2>
            <p>
                Next improvements were scoped around personalization and smarter sequencing by role. The key lesson from
                this project: activation mechanics only work when each step represents real user value, not checklist
                completion for its own sake.
            </p>

            <div style={{ marginTop: 40 }}>
                <TagRow tags={meta.tags} />
            </div>
        </div>
    );
}
