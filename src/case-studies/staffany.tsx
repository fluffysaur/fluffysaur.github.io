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
import { staffanyOutcomes, staffanyResearchBullets, staffanySolutionCards } from "./data/staffany.data";
import type { CaseMeta } from "./types";

export const meta: CaseMeta = {
    id: "staffany",
    title: "StaffAny Rewards",
    subtitle: "A concise case study on improving first-week activation with a guided Rewards checklist.",
    repoLabel: "staffany-rewards",
    dates: "Jan 2022 - Aug 2022",
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

export function StaffanyContent() {
    return (
        <CaseContent>
            <CaseHeading>Background</CaseHeading>
            <p>
                StaffAny serves thousands of shift workers across Southeast Asia. The Growth Pod identified a recurring
                issue in onboarding: users signed up but dropped before discovering the features that created long-term
                value.
            </p>
            <CaseCallout label="TL;DR">
                I designed a rewards-driven checklist that guided new users through key setup tasks and surfaced core
                product value earlier in their journey.
            </CaseCallout>

            <CaseHeading>My Role</CaseHeading>
            <p>
                I owned product design for the feature from framing to post-launch validation: defining the activation
                flow with PMs, prototyping and testing with users, and partnering with engineers on rollout details.
            </p>

            <CaseImage src="/assets/thumbnails/learnandearn-thumb.jpg" alt="StaffAny Rewards UI" />

            <CaseHeading>Research</CaseHeading>
            <CaseBullets items={staffanyResearchBullets} />

            <CaseHeading>Solution</CaseHeading>
            <p>
                The proposed Rewards experience used a clear task ladder: complete meaningful setup actions, earn
                visible progress, and unlock next-step guidance. This kept onboarding focused on behavior change, not
                just visual engagement.
            </p>
            <CaseChecklist items={staffanySolutionCards} />

            <CaseHeading>Usability Testing</CaseHeading>
            <p>
                Two testing rounds were run with first-week users. Round 1 exposed unclear progress language and missing
                context for reward value. Round 2 validated clearer labels, improved hierarchy, and better guidance for
                what to do next.
            </p>

            <CaseHeading>Internal Validation</CaseHeading>
            <p>
                Before final rollout, the flow was reviewed with product, support, and engineering to confirm
                feasibility, edge cases, and event tracking alignment. This reduced ambiguity during implementation.
            </p>

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={staffanyOutcomes} />

            <CaseHeading>Further Iterations</CaseHeading>
            <p>
                Next improvements were scoped around personalization and smarter sequencing by role. The key lesson from
                this project: activation mechanics only work when each step represents real user value, not checklist
                completion for its own sake.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
