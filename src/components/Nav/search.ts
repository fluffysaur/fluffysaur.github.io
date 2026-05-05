import { PROJECTS } from "../../data/projects";

export interface SearchItem {
    label: string;
    sub: string;
    path: string;
}

const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPod|iPad/.test(navigator.platform);

export const KBD_SHORTCUT = isMac ? "⌘K" : "Ctrl K";

const PAGE_ITEMS: SearchItem[] = [
    { label: "Home", sub: "/", path: "/" },
    { label: "Work", sub: "/work", path: "/work" },
    { label: "About", sub: "/about", path: "/about" },
];

const PROJECT_ITEMS: SearchItem[] = PROJECTS.map((project) => ({
    label: project.title,
    sub: project.hasCase ? `/work/${project.id}` : "/work",
    path: project.hasCase ? `/work/${project.id}` : "/work",
}));

const ALL_ITEMS: SearchItem[] = [...PAGE_ITEMS, ...PROJECT_ITEMS];

export function filterSearchItems(query: string): SearchItem[] {
    if (!query.trim()) {
        return ALL_ITEMS;
    }

    const normalized = query.toLowerCase();

    return ALL_ITEMS.filter((item) => {
        return item.label.toLowerCase().includes(normalized) || item.sub.toLowerCase().includes(normalized);
    });
}
