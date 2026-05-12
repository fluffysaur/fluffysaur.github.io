import type { ReactNode } from "react";

export interface CaseSection {
    heading: string;
    tldr?: string;
    content: ReactNode;
}

export interface CaseMeta {
    id: string;
    title: string;
    subtitle: string;
    dates: string;
    role: string;
    team: string;
    tags: string[];
    cover?: string;
}

export interface CaseEntry {
    meta: CaseMeta;
    sections: CaseSection[];
}

export type CaseNeighbour = { id: string; title: string } | null;

export type CaseChecklistItem = [string, string];
export type CaseStatItem = [string, string];
