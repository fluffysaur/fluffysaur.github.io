import type { CaseChecklistItem, CaseStatItem } from "../types";

export const staffanyResearchBullets: string[] = [
    "I audited onboarding drop-off points with PMs to identify where first-week users stalled.",
    "I benchmarked gamified onboarding and checklist patterns from adjacent SaaS products.",
    "I mapped onboarding jobs-to-be-done into concrete tasks users could complete in one session.",
];

export const staffanySolutionCards: CaseChecklistItem[] = [
    ["Concept A", "A mobile-first checklist that prioritized quick setup wins for new users."],
    ["Concept B", "A milestone-based flow that made progress and reward logic explicit."],
    ["Concept C", "A web dashboard variant for users who preferred desktop onboarding."],
];

export const staffanyOutcomes: CaseStatItem[] = [
    ["48k+", "Users reached"],
    ["2", "Rounds of user testing"],
    ["3", "Concept directions validated"],
];
