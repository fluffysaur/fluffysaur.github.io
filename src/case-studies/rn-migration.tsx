import { CaseCallout, CaseContent, CaseHeading, CaseTagRow } from "./components";
import { rnMigrationStatus } from "./data/rn-migration.data";
import type { CaseMeta } from "./types";

export const meta: CaseMeta = {
    id: "rn-migration",
    title: "GE App React Native Migration",
    subtitle: "Migrating a legacy mobile codebase to React Native - improving performance, DX, and maintainability.",
    repoLabel: "rn-migration",
    dates: "2025 - present",
    role: "Software Engineer",
    team: "Mobile Team",
    tags: ["React Native", "TypeScript", "iOS", "Android", "Hermes"],
    toc: ["Overview", "The Problem", "Approach", "Outcomes"],
    prev: { id: "launchpad", title: "Launchpad: New Beginnings" },
    next: null,
};

export function RnMigrationContent() {
    return (
        <CaseContent>
            <CaseHeading>Overview</CaseHeading>
            <p>
                Details for this project are coming soon - this case study is a placeholder while the full write-up is
                being drafted.
            </p>
            <CaseCallout label="Status">{rnMigrationStatus}</CaseCallout>

            <CaseHeading>The Problem</CaseHeading>
            <p>
                The existing mobile codebase had accumulated significant technical debt over several years of
                development, leading to performance issues, slow build times, and difficulty onboarding new engineers.
            </p>

            <CaseHeading>Approach</CaseHeading>
            <p>
                Led a phased migration to React Native with TypeScript, enabling shared code between iOS and Android
                while significantly improving the developer experience and app performance via the Hermes JavaScript
                engine.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
