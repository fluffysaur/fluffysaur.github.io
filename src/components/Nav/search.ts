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
    { label: "Experience", sub: "/experience", path: "/experience" },
    { label: "Projects", sub: "/projects", path: "/projects" },
    { label: "About", sub: "/about", path: "/about" },
];

const PROJECT_ITEMS: SearchItem[] = PROJECTS.flatMap((project) => {
    const path = project.cat === "film" ? `/projects/${project.id}` : project.link?.startsWith("/") ? project.link : null;

    return path
        ? [
              {
                  label: project.title,
                  sub: path,
                  path,
              },
          ]
        : [];
});

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
