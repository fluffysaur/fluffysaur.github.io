import type { TimelineEntry } from "../../types";

export interface CurrentItem {
    key: string;
    value: string;
}

export const ABOUT_TIMELINE: TimelineEntry[] = [
    {
        year: "2026-now",
        title: "Software Engineer",
        org: "Great Eastern - leading Cordova to React Native migration and modular mobile architecture",
        tag: "Now",
    },
    {
        year: "2023-26",
        title: "Associate Software Engineer",
        org: "Great Eastern - shipped Cordova + Vue features, 4.8 app rating, and a claims flow rated 4.8/5 by 156 users",
    },
    {
        year: "2022-23",
        title: "Product Designer",
        org: "StaffAny + NUS - Learn & Earn growth work, design systems, and UX research",
    },
    {
        year: "2020-21",
        title: "Frontend Developer",
        org: "YSI SEA / Interseed - MERN platform soft-launched to hundreds",
    },
    { year: "2020", title: "Web Designer & Developer", org: "Earth School Singapore" },
    { year: "2019", title: "Production Assistant", org: "Stardust Story - Mixed Signals (film)" },
];

export const ABOUT_CURRENTLY: CurrentItem[] = [
    { key: "Building", value: "React Native + TypeScript modules for a progressive migration from Cordova and Vue" },
    { key: "Learning", value: "Rust and cleaner mobile architecture boundaries that scale across markets" },
    { key: "Reading", value: '"A Philosophy of Software Design" and notes on pragmatic system design' },
    { key: "Filming", value: "Wedding films and brand videos on the side" },
];
