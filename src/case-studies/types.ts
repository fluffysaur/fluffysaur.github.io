import type { ReactElement } from "react";

export interface CaseMeta {
    id: string;
    title: string;
    subtitle: string;
    repoLabel: string;
    dates: string;
    role: string;
    team: string;
    tags: string[];
    toc: string[];
    mainImage?: string;
    prev: { id: string; title: string } | null;
    next: { id: string; title: string } | null;
}

export type CaseContentComponent = () => ReactElement;

export interface CaseEntry {
    meta: CaseMeta;
    Content: CaseContentComponent;
}

export type CaseChecklistItem = [string, string];
export type CaseStatItem = [string, string];
