import type { CaseChecklistItem, CaseStatItem } from "../types";

export const launchpadDefineBullets: string[] = [
    "COVID-19 moved orientation online, so the site had to replace key in-person experiences for ~300 residents.",
    "Content came from 6+ sub-committees with frequent updates and shifting event details.",
    "The core goal was a welcoming, easy-to-update digital journey that non-engineers could maintain.",
];

export const launchpadDesignChecklist: CaseChecklistItem[] = [
    ["Visual direction", "I designed a space-themed direction in Figma to preserve orientation energy online."],
    [
        "Information architecture",
        "I mapped key routes for schedules, houses, stories, and resources to reduce confusion.",
    ],
    [
        "Interaction planning",
        "Prototype reviews with committee leads helped validate hierarchy and CTA clarity before build.",
    ],
];

export const launchpadBuildBullets: string[] = [
    "I implemented the responsive frontend with HTML, CSS, JavaScript, and Bootstrap.",
    "I integrated dynamic content workflows with Node.js and MySQL for fast updates.",
    "I coordinated content QA and release timing across committee deadlines.",
];

export const launchpadOutcomes: CaseStatItem[] = [
    ["300", "Incoming residents served"],
    ["6+", "Sub-committees coordinated"],
    ["6 wks", "Design to launch"],
];
