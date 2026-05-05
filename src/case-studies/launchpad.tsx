import { TagRow } from "../components/Tag";

export const meta = {
    id: "launchpad",
    title: "Launchpad: New Beginnings",
    subtitle: "A concise case study on designing and building an online orientation experience during COVID-19.",
    repoLabel: "launchpad-tww2020",
    dates: "May 2020 – Aug 2020",
    role: "UX Designer & Developer",
    team: "Publicity Committee",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Node", "MySQL", "Adobe XD"],
    toc: ["Project Overview", "My Role", "Define", "Design", "Build", "Outcomes", "Reflection"],
    prev: { id: "staffany", title: "StaffAny Rewards" },
    next: { id: "rn-migration", title: "React Native Migration" },
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
                <span style={S.mono}>## </span>Project Overview
            </h2>
            <p>
                Tembusu Welcome Week is NUS Tembusu College's flagship orientation camp for ~300 incoming residents. In
                2020, COVID-19 pushed the programme online. The team needed a website that could replace key parts of
                the physical orientation experience in a short delivery window.
            </p>
            <div style={S.callout}>
                <strong style={{ color: "var(--fg-1)" }}>TL;DR</strong> — I designed and built a multi-page orientation
                website with virtual exploration, structured content, and interactive elements for incoming residents.
            </div>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>My Role
            </h2>
            <p>
                I handled UX and frontend execution: framing content architecture with committee leads, producing design
                directions, and implementing key pages and interactions with the engineering team.
            </p>

            <img
                src="/assets/thumbnails/launchpad-thumb.jpg"
                alt="Launchpad website"
                style={{ width: "100%", borderRadius: 6, margin: "32px 0", display: "block" }}
            />

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Define
            </h2>
            <p>
                The core challenge was preserving excitement and clarity without physical context. Incoming residents
                needed to understand schedules, people, and college life through digital touchpoints alone.
            </p>
            <ul style={{ margin: "14px 0 0", paddingLeft: 18 }}>
                <li>Audience: incoming students experiencing Tembusu remotely for the first time.</li>
                <li>Constraints: short timeline, distributed committee workflows, and changing event details.</li>
                <li>Goal: a coherent online journey that felt welcoming, navigable, and reliable.</li>
            </ul>

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Design
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0" }}>
                {[
                    ["Visual direction", "Warm, event-forward look to mirror orientation energy in a digital setting."],
                    ["Information architecture", "Clear top-level routes for schedule, teams, stories, and resources."],
                    [
                        "Interaction planning",
                        "Prototype-first iterations to stress-test navigation and page hierarchy.",
                    ],
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
                <span style={S.mono}>## </span>Build
            </h2>
            <p>
                Development focused on reliability and maintainability for a student committee handover context. The
                site shipped as a responsive multi-page experience with modular sections that could be updated quickly.
            </p>
            <ul style={{ margin: "14px 0 0", paddingLeft: 18 }}>
                <li>Implemented with HTML/CSS/JavaScript and Bootstrap for fast delivery.</li>
                <li>Integrated dynamic content workflows through Node and MySQL.</li>
                <li>Coordinated content intake across multiple sub-committees.</li>
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

            <h2 style={S.heading}>
                <span style={S.mono}>## </span>Reflection
            </h2>
            <p>
                The most valuable takeaway was that strong information structure matters even more when users are fully
                remote. When content and navigation are clear, a small team can still deliver an experience that feels
                intentional and human.
            </p>

            <div style={{ marginTop: 40 }}>
                <TagRow tags={meta.tags} />
            </div>
        </div>
    );
}
