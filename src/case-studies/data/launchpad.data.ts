import type { CaseChecklistItem, CaseStatItem } from "../types";

export const launchpadDefineBullets: string[] = [
    "Audience: incoming students experiencing Tembusu remotely for the first time.",
    "Constraints: short timeline, distributed committee workflows, and changing event details.",
    "Goal: a coherent online journey that felt welcoming, navigable, and reliable.",
];

export const launchpadDesignChecklist: CaseChecklistItem[] = [
    ["Visual direction", "Warm, event-forward look to mirror orientation energy in a digital setting."],
    ["Information architecture", "Clear top-level routes for schedule, teams, stories, and resources."],
    ["Interaction planning", "Prototype-first iterations to stress-test navigation and page hierarchy."],
];

export const launchpadBuildBullets: string[] = [
    "Implemented with HTML/CSS/JavaScript and Bootstrap for fast delivery.",
    "Integrated dynamic content workflows through Node and MySQL.",
    "Coordinated content intake across multiple sub-committees.",
];

export const launchpadOutcomes: CaseStatItem[] = [
    ["300", "Incoming residents served"],
    ["6+", "Sub-committees coordinated"],
    ["6 wks", "Design to launch"],
];
