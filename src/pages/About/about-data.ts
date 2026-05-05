import type { TimelineEntry } from "../../types";

export interface CurrentItem {
    key: string;
    value: string;
}

export const ABOUT_TIMELINE: TimelineEntry[] = [
    {
        year: "2024-now",
        title: "Software Engineer",
        org: "React Native Migration - shipping mobile software",
        tag: "Now",
    },
    { year: "2022-23", title: "Product Designer", org: "StaffAny - 48k+ users - Growth Pod & Design Systems" },
    { year: "2020-21", title: "Frontend Developer", org: "YSI SEA / Interseed - MERN from scratch" },
    { year: "2020", title: "Web Designer & Developer", org: "Earth School Singapore" },
    { year: "2019", title: "Production Assistant", org: "Stardust Story - Mixed Signals (film)" },
];

export const ABOUT_CURRENTLY: CurrentItem[] = [
    { key: "Building", value: "React Native apps and migrating legacy mobile codebases" },
    { key: "Learning", value: "Rust, slowly, for the love of it" },
    { key: "Reading", value: '"A Philosophy of Software Design" by John Ousterhout' },
    { key: "Filming", value: "Wedding films and brand videos on the side" },
];
