import { Bullets, Checklist, Figure, Stats } from "../components/ProjectDetail";
import { defineCase } from "./defineCase";

export default defineCase({
    id: "interseed",
    title: "Interseed Web App",
    subtitle: "Building a sustainability startup platform from scratch with MERN during a fast internship timeline.",
    dates: "Sep 2020 - Jun 2021",
    role: "Frontend Developer (UX + Frontend)",
    team: "Team of 4",
    tags: ["MERN", "React", "TypeScript", "Node.js", "MongoDB", "Express", "Figma", "Wix"],
    cover: "/assets/thumbnails/interseed-thumb.jpg",
    sections: [
        {
            heading: "Project Overview",
            tldr: "I translated fragmented manual matchmaking into a productized flow, prioritized features for a 12-week build window, and supported a soft launch that reached 300+ users.",
            content: (
                <p>
                    Interseed set out to connect early-stage sustainability startups with the right partners, mentors,
                    and opportunities in one place. As a frontend intern, I worked across UX and implementation to help
                    the team ship a usable MVP on a compressed timeline.
                </p>
            ),
        },
        {
            heading: "Define",
            content: (
                <>
                    <p>
                        Discovery showed the issue was not a lack of opportunities, but a lack of visibility and trust
                        in how opportunities were surfaced. Founders were managing discovery through scattered chats
                        and spreadsheets, which made matching slow and inconsistent.
                    </p>
                    <Bullets
                        items={[
                            "Matching and startup discovery were still handled manually across chats and spreadsheets.",
                            "I scoped the MVP around two primary users: founders seeking support and ecosystem partners assessing fit.",
                            "The main constraint was a 12-week build window with no existing product codebase to extend.",
                        ]}
                    />
                    <Figure
                        src="/assets/thumbnails/interseed-thumb.jpg"
                        alt="Placeholder: Interseed user flow and problem framing"
                    />
                </>
            ),
        },
        {
            heading: "Research Synthesis",
            content: (
                <>
                    <p>
                        From interviews and desk research, three patterns repeated: founders needed clearer credibility
                        signals, collaborators needed quick qualification criteria, and both sides needed faster ways
                        to make first contact.
                    </p>
                    <Figure
                        src="/assets/thumbnails/interseed-thumb.jpg"
                        alt="Placeholder: Interseed flowchart and information architecture"
                    />
                </>
            ),
        },
        {
            heading: "Solution",
            content: (
                <>
                    <p>
                        I framed the roadmap into must-have, good-to-have, and long-term layers so product and
                        engineering could commit to a realistic release without losing future direction.
                    </p>
                    <Checklist
                        middleWidth={180}
                        items={[
                            [
                                "Need this now",
                                "Founder profiles, startup listings, search and filter, and a direct first-contact flow",
                            ],
                            [
                                "Good to have",
                                "Bookmarks, richer matching filters, startup updates, and collaboration signals",
                            ],
                            [
                                "Long term",
                                "Mentor matching, community features, events, and recommendation workflows",
                            ],
                        ]}
                    />
                    <Figure
                        src="/assets/thumbnails/interseed-thumb.jpg"
                        alt="Placeholder: Interseed MVP scope board"
                    />
                </>
            ),
        },
        {
            heading: "Design",
            content: (
                <>
                    <p>
                        I moved from low-fidelity mapping to higher-fidelity Figma prototypes, then translated those
                        screens into React components. The design principle was simple: users should quickly assess
                        relevance and take action without needing to dig through dense profiles.
                    </p>
                    <Bullets
                        items={[
                            "I designed low-fidelity to high-fidelity flows in Figma, then translated them into React-ready implementation plans.",
                            "Reusable card and list patterns reduced UI drift and helped the team ship faster in sprints.",
                            "Profile hierarchy emphasized startup stage, sustainability focus, and collaboration intent for quicker decision-making.",
                        ]}
                    />
                    <Figure
                        src="/assets/thumbnails/interseed-thumb.jpg"
                        alt="Placeholder: Interseed prototype to implementation screens"
                    />
                </>
            ),
        },
        {
            heading: "Outcomes",
            content: (
                <Stats
                    items={[
                        ["300+", "Users reached at soft launch"],
                        ["12 wks", "MVP scope delivered"],
                        ["2 wks", "Ramp-up to React + TypeScript"],
                    ]}
                />
            ),
        },
        {
            heading: "Reflection",
            content: (
                <>
                    <p>
                        This project reinforced the value of tight framing before visual polish. The MVP succeeded
                        because we aligned early on decision criteria and shipped around a few high-confidence flows.
                    </p>
                    <p>
                        Personally, this was my first end-to-end product build. Learning React + TypeScript in two
                        weeks while shipping production UI gave me a product-engineering perspective that still shapes
                        how I work today.
                    </p>
                </>
            ),
        },
    ],
});
