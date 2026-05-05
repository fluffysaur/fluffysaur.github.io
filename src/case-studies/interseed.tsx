import { TagRow } from "../components/Tag";

export const meta = {
    id: "interseed",
    title: "Interseed Web App",
    subtitle: "A MERN-stack platform for connecting startups with sustainable goals.",
    repoLabel: "interseed-web",
    dates: "Sep 2020 – Jun 2021",
    role: "UX Designer & Frontend Developer",
    team: "Team of 4",
    tags: ["React", "TypeScript", "Node", "MongoDB", "Express", "Adobe XD"],
    toc: ["Overview", "The Problem", "Research", "Process", "Outcomes", "Reflection"],
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
    return (
        <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--fg-3)" }}>
            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Overview
            </h2>
            <p>
                Interseed (now part of YSI Southeast Asia) needed a platform to connect early-stage sustainability
                startups with mentors, capital, and each other. I joined as a fresh grad frontend developer and ended up
                wearing the UX designer's hat too.
            </p>
            <div style={S.callout}>
                <strong style={{ color: "var(--fg-1)" }}>TL;DR</strong> — Designed and built a full-stack web app from
                scratch. Soft-launched to hundreds of users. Learnt React from zero in 8 weeks.
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>The Problem
            </h2>
            <p>
                Sustainability startups in SEA were fragmented. Talent and capital existed, but discovery was broken —
                most matches happened over WhatsApp, none of it scaled, and YSI's existing spreadsheet workflow was
                creaking under the load.
            </p>

            <img
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Interseed UI"
                style={{ width: "100%", borderRadius: 6, margin: "32px 0", display: "block" }}
            />

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Research
            </h2>
            <p>
                Conducted user interviews with 12 founders and 4 mentors. The core insight: founders didn't lack
                ambition — they lacked a single trusted place to find the right people at the right stage.
            </p>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Process
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0" }}>
                {[
                    ["Discovery", "Interviewed 12 founders & 4 mentors. Mapped the matchmaking gap."],
                    ["Wireframes", "Adobe XD low-fi → mid-fi. Two weeks, three rounds with the team."],
                    ["Frontend build", "React + TypeScript + Bootstrap. 30+ screens, ~14 reusable components."],
                    ["Backend pairing", "Worked alongside two backend devs on the MERN stack."],
                    ["Soft launch", "Sprint planning + bug bash. Shipped to ~300 users."],
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
                <span style={S.mono}>## </span>Code Snippet
            </h2>
            <p>The reusable card component that ended up everywhere:</p>
            <pre
                style={{
                    background: "var(--bg-card-header)",
                    borderRadius: 6,
                    padding: 20,
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 13,
                    color: "var(--fg-2)",
                    overflow: "auto",
                    border: "1px solid var(--border-sub)",
                    margin: "24px 0",
                    lineHeight: 1.6,
                }}
            >
                {`export const StartupCard = ({ s }: Props) => (
  <Card hoverable onClick={() => navigate(\`/s/\${s.slug}\`)}>
    <Card.Image src={s.cover} alt={s.name} />
    <Card.Body>
      <Pill tone={s.stage}>{s.stage}</Pill>
      <h3>{s.name}</h3>
      <p>{s.tagline}</p>
    </Card.Body>
  </Card>
);`}
            </pre>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Outcomes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, margin: "24px 0" }}>
                {[
                    ["~300", "Soft-launch users"],
                    ["30+", "Screens shipped"],
                    ["8 wks", "React, learnt from zero"],
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
                Interseed taught me that the gap between Figma and shipped code is bigger than any spec doc can capture.
                The work happens in the in-between — the <em>"wait, this isn't right"</em> moments at 2am.
            </p>
            <p>
                It also gave me the confidence to jump into unfamiliar tech stacks. React was completely new to me when
                I started. Eight weeks later, I had shipped 30+ screens. That bias toward learning-by-doing has stuck
                with me ever since.
            </p>

            <div style={{ marginTop: 40 }}>
                <TagRow tags={meta.tags} />
            </div>
        </div>
    );
}
