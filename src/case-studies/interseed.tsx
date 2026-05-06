import {
    CaseBullets,
    CaseCallout,
    CaseChecklist,
    CaseContent,
    CaseHeading,
    CaseImage,
    CaseStatsGrid,
    CaseTagRow,
} from "../components/ProjectDetail";
import type { CaseMeta, CaseChecklistItem, CaseStatItem } from "./types";

const interseedDefineBullets: string[] = [
    "Matching and startup discovery were still handled manually across chats and spreadsheets.",
    "I scoped the MVP around two primary users: founders seeking support and ecosystem partners assessing fit.",
    "The main constraint was a 12-week build window with no existing product codebase to extend.",
];

const interseedSprintPlan: CaseChecklistItem[] = [
    ["Need this now", "Founder profiles, startup listings, search and filter, and a direct first-contact flow"],
    ["Good to have", "Bookmarks, richer matching filters, startup updates, and collaboration signals"],
    ["Long term", "Mentor matching, community features, events, and recommendation workflows"],
];

const interseedDesignBullets: string[] = [
    "I designed low-fidelity to high-fidelity flows in Figma, then translated them into React-ready implementation plans.",
    "Reusable card and list patterns reduced UI drift and helped the team ship faster in sprints.",
    "Profile hierarchy emphasized startup stage, sustainability focus, and collaboration intent for quicker decision-making.",
];

const interseedOutcomes: CaseStatItem[] = [
    ["300+", "Users reached at soft launch"],
    ["12 wks", "MVP scope delivered"],
    ["2 wks", "Ramp-up to React + TypeScript"],
];

export const meta: CaseMeta = {
    id: "interseed",
    title: "Interseed Web App",
    subtitle: "Building a sustainability startup platform from scratch with MERN during a fast internship timeline.",
    repoLabel: "interseed-web",
    dates: "Sep 2020 - Jun 2021",
    role: "Frontend Developer (UX + Frontend)",
    team: "Team of 4",
    tags: ["MERN", "React", "TypeScript", "Node.js", "MongoDB", "Express", "Figma", "Wix"],
    toc: ["Project Overview", "Define", "Research Synthesis", "Solution", "Design", "Outcomes", "Reflection"],
    mainImage: "/assets/thumbnails/interseed-thumb.jpg",
    prev: null,
    next: { id: "staffany", title: "StaffAny Learn & Earn" },
};

export function InterseedContent() {
    return (
        <CaseContent>
            <CaseHeading>Project Overview</CaseHeading>
            <p>
                Interseed set out to connect early-stage sustainability startups with the right partners, mentors, and
                opportunities in one place. As a frontend intern, I worked across UX and implementation to help the team
                ship a usable MVP on a compressed timeline.
            </p>
            <CaseCallout label="TL;DR">
                I translated fragmented manual matchmaking into a productized flow, prioritized features for a 12-week
                build window, and supported a soft launch that reached 300+ users.
            </CaseCallout>

            <CaseHeading>Define</CaseHeading>
            <p>
                Discovery showed the issue was not a lack of opportunities, but a lack of visibility and trust in how
                opportunities were surfaced. Founders were managing discovery through scattered chats and spreadsheets,
                which made matching slow and inconsistent.
            </p>
            <CaseBullets items={interseedDefineBullets} />
            <CaseImage
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Placeholder: Interseed user flow and problem framing"
            />

            <CaseImage src="/assets/thumbnails/interseed-thumb.jpg" alt="Interseed UI" />

            <CaseHeading>Research Synthesis</CaseHeading>
            <p>
                From interviews and desk research, three patterns repeated: founders needed clearer credibility signals,
                collaborators needed quick qualification criteria, and both sides needed faster ways to make first
                contact.
            </p>
            <CaseImage
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Placeholder: Interseed flowchart and information architecture"
            />

            <CaseHeading>Solution</CaseHeading>
            <p>
                I framed the roadmap into must-have, good-to-have, and long-term layers so product and engineering could
                commit to a realistic release without losing future direction.
            </p>
            <CaseChecklist items={interseedSprintPlan} middleWidth={180} />
            <CaseImage src="/assets/thumbnails/interseed-thumb.jpg" alt="Placeholder: Interseed MVP scope board" />

            <CaseHeading>Design</CaseHeading>
            <p>
                I moved from low-fidelity mapping to higher-fidelity Figma prototypes, then translated those screens
                into React components. The design principle was simple: users should quickly assess relevance and take
                action without needing to dig through dense profiles.
            </p>
            <CaseBullets items={interseedDesignBullets} />
            <CaseImage
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Placeholder: Interseed prototype to implementation screens"
            />

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={interseedOutcomes} />

            <CaseHeading>Reflection</CaseHeading>
            <p>
                This project reinforced the value of tight framing before visual polish. The MVP succeeded because we
                aligned early on decision criteria and shipped around a few high-confidence flows.
            </p>
            <p>
                Personally, this was my first end-to-end product build. Learning React + TypeScript in two weeks while
                shipping production UI gave me a product-engineering perspective that still shapes how I work today.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
