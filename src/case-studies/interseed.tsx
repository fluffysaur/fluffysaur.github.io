import {
    CaseBullets,
    CaseCallout,
    CaseChecklist,
    CaseContent,
    CaseHeading,
    CaseImage,
    CaseStatsGrid,
    CaseTagRow,
} from "./components";
import {
    interseedDefineBullets,
    interseedDesignBullets,
    interseedOutcomes,
    interseedSprintPlan,
} from "./data/interseed.data";
import type { CaseMeta } from "./types";

export const meta: CaseMeta = {
    id: "interseed",
    title: "Interseed Web App",
    subtitle: "A concise case study on building a startup-matching platform for sustainability founders in SEA.",
    repoLabel: "interseed-web",
    dates: "Sep 2020 - Jun 2021",
    role: "UX Designer & Frontend Developer",
    team: "Team of 4",
    tags: ["React", "TypeScript", "Node", "MongoDB", "Express", "Adobe XD"],
    toc: ["Project Overview", "Define", "Research Synthesis", "Solution", "Design", "Outcomes", "Reflection"],
    prev: null,
    next: { id: "staffany", title: "StaffAny Rewards" },
};

export function InterseedContent() {
    return (
        <CaseContent>
            <CaseHeading>Project Overview</CaseHeading>
            <p>
                Interseed set out to connect early-stage sustainability startups with the right partners, mentors, and
                opportunities in one place. I worked across product design and frontend implementation to ship the first
                usable version of the platform.
            </p>
            <CaseCallout label="TL;DR">
                We translated fragmented offline matchmaking into a focused web product, prioritized core flows for a
                12-week build, and soft-launched to early users.
            </CaseCallout>

            <CaseHeading>Define</CaseHeading>
            <p>
                Discovery showed the core issue was not lack of opportunities, but lack of visibility and trust in how
                opportunities were surfaced. Founders relied on scattered channels and had no consistent place to
                present traction, needs, and stage.
            </p>
            <CaseBullets items={interseedDefineBullets} />

            <CaseImage src="/assets/thumbnails/interseed-thumb.jpg" alt="Interseed UI" />

            <CaseHeading>Research Synthesis</CaseHeading>
            <p>
                From interviews and desk research, three patterns repeated: founders wanted credibility signals,
                collaborators needed quick qualification criteria, and everyone needed lightweight communication instead
                of long profile reviews.
            </p>

            <CaseHeading>Solution</CaseHeading>
            <p>
                We framed the roadmap using a must-have / good-to-have / long-term split so engineering and product
                could commit to a realistic MVP while keeping clear expansion paths.
            </p>
            <CaseChecklist items={interseedSprintPlan} middleWidth={180} />

            <CaseHeading>Design</CaseHeading>
            <p>
                The first prototype focused on clear, scan-friendly cards and staged profile information. Iterations
                were guided by two checks: can users quickly decide relevance, and can they act on that decision without
                extra friction.
            </p>
            <CaseBullets items={interseedDesignBullets} />

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={interseedOutcomes} />

            <CaseHeading>Reflection</CaseHeading>
            <p>
                This project reinforced the value of tight framing before visual polish. The MVP succeeded because the
                team aligned early on decision criteria and shipped around a few high-confidence flows.
            </p>
            <p>
                Personally, it was also my first end-to-end build across design and frontend. Learning React while
                shipping production screens gave me a stronger product-engineering perspective that still shapes my
                work.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
