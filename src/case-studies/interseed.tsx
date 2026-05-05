import { TagRow } from "../components/Tag";

export const meta = {
    id: "interseed",
    title: "Interseed Web App",
    subtitle: "A concise case study on building a startup-matching platform for sustainability founders in SEA.",
    repoLabel: "interseed-web",
    dates: "Sep 2020 – Jun 2021",
    role: "UX Designer & Frontend Developer",
    team: "Team of 4",
    tags: ["React", "TypeScript", "Node", "MongoDB", "Express", "Adobe XD"],
    toc: ["Project Overview", "Define", "Research Synthesis", "Solution", "Design", "Outcomes", "Reflection"],
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

export function InterseedContent() {
    const sprintPlan = [
        ["Need this now", "Founder profiles, search/discovery, profile pages, intro/contact flow"],
        ["Good to have", "Bookmarks, richer filtering, startup updates, mentor matching signals"],
        ["Long term", "Community layer, events, recommendation engine, data-driven matching"],
    ];

    return (
        <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--fg-3)" }}>
            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Project Overview
            </h2>
            <p>
                Interseed set out to connect early-stage sustainability startups with the right partners, mentors, and
                opportunities in one place. I worked across product design and frontend implementation to ship the first
                usable version of the platform.
            </p>
            <div style={S.callout}>
                <strong style={{ color: "var(--fg-1)" }}>TL;DR</strong> — We translated fragmented offline matchmaking
                into a focused web product, prioritized core flows for a 12-week build, and soft-launched to early
                users.
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Define
            </h2>
            <p>
                Discovery showed the core issue was not lack of opportunities, but lack of visibility and trust in how
                opportunities were surfaced. Founders relied on scattered channels and had no consistent place to
                present traction, needs, and stage.
            </p>
            <ul style={{ margin: "14px 0 0", paddingLeft: 18 }}>
                <li>Main problem: startup discovery and matching was inconsistent and manual.</li>
                <li>Primary users: founders seeking support and collaborators evaluating fit.</li>
                <li>Product goal: make first discovery and first contact happen faster and with better context.</li>
            </ul>

            <img
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Interseed UI"
                style={{ width: "100%", borderRadius: 6, margin: "32px 0", display: "block" }}
            />

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Research Synthesis
            </h2>
            <p>
                From interviews and desk research, three patterns repeated: founders wanted credibility signals,
                collaborators needed quick qualification criteria, and everyone needed lightweight communication instead
                of long profile reviews.
            </p>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Solution
            </h2>
            <p>
                We framed the roadmap using a must-have / good-to-have / long-term split so engineering and product
                could commit to a realistic MVP while keeping clear expansion paths.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "18px 0" }}>
                {sprintPlan.map(([title, details], i) => (
                    <li
                        key={i}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "auto 180px 1fr",
                            gap: 16,
                            padding: "14px 0",
                            borderTop: "1px solid var(--border-sub)",
                        }}
                    >
                        <span style={{ color: "#f2cb05" }}>✓</span>
                        <strong style={{ color: "var(--fg-1)", fontWeight: 500 }}>{title}</strong>
                        <span>{details}</span>
                    </li>
                ))}
            </ul>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Design
            </h2>
            <p>
                The first prototype focused on clear, scan-friendly cards and staged profile information. Iterations
                were guided by two checks: can users quickly decide relevance, and can they act on that decision without
                extra friction.
            </p>
            <ul style={{ margin: "14px 0 0", paddingLeft: 18 }}>
                <li>Reusable card patterns reduced UI inconsistency across key pages.</li>
                <li>Profile hierarchy emphasized stage, focus area, and collaboration intent.</li>
                <li>Interaction design prioritized short paths to first contact.</li>
            </ul>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Outcomes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, margin: "24px 0" }}>
                {[
                    ["~300", "Soft-launch users"],
                    ["12 wks", "MVP scope delivered"],
                    ["30+", "Screens shipped"],
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
                <span style={S.mono}>## </span>Reflection
            </h2>
            <p>
                This project reinforced the value of tight framing before visual polish. The MVP succeeded because the
                team aligned early on decision criteria and shipped around a few high-confidence flows.
            </p>
            <p>
                Personally, it was also my first end-to-end build across design and frontend. Learning React while
                shipping production screens gave me a stronger product-engineering perspective that still shapes my
                work.
            </p>

            <div style={{ marginTop: 40 }}>
                <TagRow tags={meta.tags} />
            </div>
        </div>
    );
}
