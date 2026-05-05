import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "../../data/projects";

export interface TabDef {
    label: string;
    icon: IconDefinition;
    to: string;
    closeable?: true;
}

const BASE_TABS: TabDef[] = [
    { label: "Home.tsx", icon: faHouse, to: "/" },
    { label: "Work.tsx", icon: faBriefcase, to: "/work" },
    { label: "About.tsx", icon: faUser, to: "/about" },
];

export function deriveTabs(pathname: string): { tabs: TabDef[]; caseId: string | undefined } {
    const caseMatch = pathname.match(/^\/work\/(.+)$/);
    const caseId = caseMatch?.[1];
    const caseProject = caseId ? PROJECTS.find((project) => project.id === caseId) : undefined;

    if (!caseProject || !caseId) {
        return { tabs: BASE_TABS, caseId: undefined };
    }

    return {
        caseId,
        tabs: [
            BASE_TABS[0],
            BASE_TABS[1],
            { label: `${caseId}.md`, icon: faBriefcase, to: pathname, closeable: true },
            BASE_TABS[2],
        ],
    };
}
