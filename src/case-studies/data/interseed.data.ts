import type { CaseChecklistItem, CaseStatItem } from "../types";

export const interseedDefineBullets: string[] = [
    "Matching and startup discovery were still handled manually across chats and spreadsheets.",
    "I scoped the MVP around two primary users: founders seeking support and ecosystem partners assessing fit.",
    "The main constraint was a 12-week build window with no existing product codebase to extend.",
];

export const interseedSprintPlan: CaseChecklistItem[] = [
    ["Need this now", "Founder profiles, startup listings, search and filter, and a direct first-contact flow"],
    ["Good to have", "Bookmarks, richer matching filters, startup updates, and collaboration signals"],
    ["Long term", "Mentor matching, community features, events, and recommendation workflows"],
];

export const interseedDesignBullets: string[] = [
    "I designed low-fidelity to high-fidelity flows in Figma, then translated them into React-ready implementation plans.",
    "Reusable card and list patterns reduced UI drift and helped the team ship faster in sprints.",
    "Profile hierarchy emphasized startup stage, sustainability focus, and collaboration intent for quicker decision-making.",
];

export const interseedOutcomes: CaseStatItem[] = [
    ["300+", "Users reached at soft launch"],
    ["12 wks", "MVP scope delivered"],
    ["2 wks", "Ramp-up to React + TypeScript"],
];
