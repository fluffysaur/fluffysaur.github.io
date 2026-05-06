import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";
import type { ProjectCat } from "../../types";

export interface TabDef {
    label: string;
    icon: IconDefinition;
    to: string;
    closeable?: true;
}

const BASE_TABS: TabDef[] = [
    { label: "Home.tsx", icon: faHouse, to: "/" },
    { label: "Experience.tsx", icon: faBriefcase, to: "/experience" },
    { label: "Work.tsx", icon: faBriefcase, to: "/work" },
    { label: "About.tsx", icon: faUser, to: "/about" },
];

export function deriveTabs(pathname: string): {
    tabs: TabDef[];
    caseId: string | undefined;
    caseTrack: ProjectCat | undefined;
} {
    const caseMatch = pathname.match(/^\/work\/(.+)$/);
    const caseId = caseMatch?.[1];
    const caseProject = caseId ? PROJECTS.find((project) => project.id === caseId) : undefined;

    if (!caseProject || !caseId) {
        return { tabs: BASE_TABS, caseId: undefined, caseTrack: undefined };
    }

    const extension = caseProject.cat === "film" ? "mov" : "tsx";

    return {
        caseId,
        caseTrack: caseProject.cat,
        tabs: [
            BASE_TABS[0],
            BASE_TABS[1],
            { ...BASE_TABS[2], to: `/work?track=${caseProject.cat}` },
            { label: `${caseId}.${extension}`, icon: faBriefcase, to: pathname, closeable: true },
            BASE_TABS[3],
        ],
    };
}
