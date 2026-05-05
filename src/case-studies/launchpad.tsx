import { TagRow } from "../components/Tag";

export const meta = {
    id: "launchpad",
    title: "Launchpad: New Beginnings",
    subtitle: "Designing and building the Tembusu Welcome Week 2020 website for 300 incoming residents.",
    repoLabel: "launchpad-tww2020",
    dates: "May 2020 – Aug 2020",
    role: "UX Designer & Developer",
    team: "Publicity Committee",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Node", "MySQL", "Adobe XD"],
    toc: ["Overview", "The Problem", "Process", "Technical Highlights", "Outcomes"],
    prev: { id: "interseed", title: "Interseed Web App" },
    next: null,
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

export function LaunchpadContent() {
    return (
        <div style={{ fontSize: 17, lineHeight: 1.75, color: "var(--fg-3)" }}>
            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Overview
            </h2>
            <p>
                Tembusu Welcome Week is NUS Tembusu College's flagship orientation camp for ~300 incoming residents. In
                2020, COVID-19 forced the entire event online — and we had six weeks to build a website that could
                replace a physical campus experience.
            </p>
            <div style={S.callout}>
                <strong style={{ color: "var(--fg-1)" }}>TL;DR</strong> — Designed and built a multi-page website with
                virtual tours, dynamic content, and a multiplayer interactive canvas for 300 residents.
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>The Problem
            </h2>
            <p>
                New students couldn't visit campus. They had no way to explore the college, meet committee members, or
                understand what life at Tembusu would look like. The orientation programme needed to live entirely on a
                website.
            </p>

            <img
                src="/assets/thumbnails/launchpad-thumb.jpg"
                alt="Launchpad website"
                style={{ width: "100%", borderRadius: 6, margin: "32px 0", display: "block" }}
            />

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Process
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0" }}>
                {[
                    ["Design", "Wireframed in Adobe XD. Validated concepts with committee leads before building."],
                    ["Virtual tour", "Built an interactive 360° tour using JavaScript and static panoramas."],
                    ["Dynamic pages", "Multi-page site with Node backend for content management."],
                    ["Canvas", "Collaborated with engineers to build a multiplayer interactive canvas in JS."],
                    ["Content", "Coordinated with 6 sub-committees to populate the site."],
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
                <span style={S.mono}>## </span>Outcomes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, margin: "24px 0" }}>
                {[
                    ["300", "Incoming residents served"],
                    ["6+", "Sub-committees coordinated"],
                    ["6 wks", "Design to launch"],
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

            <div style={{ marginTop: 40 }}>
                <TagRow tags={meta.tags} />
            </div>
        </div>
    );
}
