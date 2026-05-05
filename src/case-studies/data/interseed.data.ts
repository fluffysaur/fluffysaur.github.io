import type { CaseChecklistItem, CaseStatItem } from "../types";

export const interseedDefineBullets: string[] = [
    "Main problem: startup discovery and matching was inconsistent and manual.",
    "Primary users: founders seeking support and collaborators evaluating fit.",
    "Product goal: make first discovery and first contact happen faster and with better context.",
];

export const interseedSprintPlan: CaseChecklistItem[] = [
    ["Need this now", "Founder profiles, search/discovery, profile pages, intro/contact flow"],
    ["Good to have", "Bookmarks, richer filtering, startup updates, mentor matching signals"],
    ["Long term", "Community layer, events, recommendation engine, data-driven matching"],
];

export const interseedDesignBullets: string[] = [
    "Reusable card patterns reduced UI inconsistency across key pages.",
    "Profile hierarchy emphasized stage, focus area, and collaboration intent.",
    "Interaction design prioritized short paths to first contact.",
];

export const interseedOutcomes: CaseStatItem[] = [
    ["~300", "Soft-launch users"],
    ["12 wks", "MVP scope delivered"],
    ["30+", "Screens shipped"],
];
