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

const staffanyResearchBullets: string[] = [
    "I audited onboarding drop-off points with PMs to identify where first-week users stalled.",
    "I benchmarked gamified onboarding and checklist patterns from adjacent SaaS products.",
    "I mapped onboarding jobs-to-be-done into concrete tasks users could complete in one session.",
];

const staffanySolutionCards: CaseChecklistItem[] = [
    ["Concept A", "A mobile-first checklist that prioritized quick setup wins for new users."],
    ["Concept B", "A milestone-based flow that made progress and reward logic explicit."],
    ["Concept C", "A web dashboard variant for users who preferred desktop onboarding."],
];

const staffanyOutcomes: CaseStatItem[] = [
    ["48k+", "Users reached"],
    ["2", "Rounds of user testing"],
    ["3", "Concept directions validated"],
];

export const meta: CaseMeta = {
    id: "staffany",
    title: "StaffAny Learn & Earn",
    subtitle: "Designing and validating a first-week activation flow that helped users discover product value earlier.",
    repoLabel: "staffany-learn-and-earn",
    dates: "Jan 2022 - Jun 2022",
    role: "Product Designer",
    team: "Growth Squad",
    tags: ["Figma", "Jira", "Slack", "Notion", "UMUX-Lite"],
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
    mainImage: "/assets/thumbnails/learnandearn-thumb.jpg",
    prev: { id: "interseed", title: "Interseed Web App" },
    next: { id: "launchpad", title: "Launchpad: New Beginnings" },
};

export function StaffanyContent() {
    return (
        <CaseContent>
            <CaseHeading>Background</CaseHeading>
            <p>
                StaffAny serves thousands of shift workers across Southeast Asia. In Growth Pod, I worked on a common
                onboarding problem: users signed up but dropped off before they experienced the actions that drove
                long-term retention.
            </p>
            <CaseCallout label="TL;DR">
                I designed Learn & Earn, a rewards-driven onboarding checklist that guided first-week users through
                high-value setup actions and was supported by rollout assets that reached 48k+ users.
            </CaseCallout>

            <CaseHeading>My Role</CaseHeading>
            <p>
                I owned product design end-to-end: framing activation goals with PMs, producing and iterating Figma
                prototypes, running usability testing, and partnering with engineers and marketing for launch execution.
            </p>

            <CaseImage
                src="/assets/thumbnails/learnandearn-thumb.jpg"
                alt="Placeholder: StaffAny Learn and Earn hero UI"
            />

            <CaseHeading>Research</CaseHeading>
            <CaseBullets items={staffanyResearchBullets} />
            <CaseImage
                src="/assets/thumbnails/learnandearn-thumb.jpg"
                alt="Placeholder: StaffAny onboarding research board"
            />

            <CaseHeading>Solution</CaseHeading>
            <p>
                I explored three concept directions and converged on a task ladder that made progress visible while
                keeping each step tied to real product value. The design intentionally balanced motivation cues with
                clarity, so users knew what to do next and why it mattered.
            </p>
            <CaseChecklist items={staffanySolutionCards} />
            <CaseImage
                src="/assets/thumbnails/learnandearn-thumb.jpg"
                alt="Placeholder: StaffAny concept comparison and selected direction"
            />

            <CaseHeading>Usability Testing</CaseHeading>
            <p>
                I ran two testing rounds. Round 1 highlighted unclear reward language and weak hierarchy. I refined
                copy, information grouping, and progression states before Round 2, which showed stronger comprehension
                and improved confidence in next actions.
            </p>
            <CaseImage
                src="/assets/thumbnails/learnandearn-thumb.jpg"
                alt="Placeholder: StaffAny usability findings and round 2 refinements"
            />

            <CaseHeading>Internal Validation</CaseHeading>
            <p>
                Before rollout, I ran internal critique sessions with product, support, and engineering to validate
                implementation feasibility, analytics event mapping, and edge-case handling. This reduced ambiguity
                during handoff and implementation.
            </p>
            <CaseImage
                src="/assets/thumbnails/learnandearn-thumb.jpg"
                alt="Placeholder: StaffAny internal validation and design critique artifacts"
            />

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={staffanyOutcomes} />

            <CaseHeading>Further Iterations</CaseHeading>
            <p>
                Next iterations focused on personalization by user role and tighter sequencing with product analytics.
                The key lesson I took forward: activation mechanics only work when each step represents real user value,
                not checklist completion for its own sake.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
