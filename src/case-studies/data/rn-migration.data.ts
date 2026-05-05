import type { CaseChecklistItem, CaseStatItem } from "../types";

export const rnMigrationHighlights: string[] = [
    "I championed adoption of React Native across GE IT mobile applications to replace long-standing Cordova constraints.",
    "I re-architected the SG app frontend into a single-repo modular model so entities can bundle and ship independently.",
    "I designed a progressive migration path where legacy Vue modules can run alongside React Native modules.",
    "I shaped the shared architecture so GE App MY could be onboarded with consistent UX patterns and code reuse.",
    "I piloted Amazon Q and Kiro CLI workflows for AI-assisted development and shared practical findings with the team.",
];

export const rnMigrationApproach: CaseChecklistItem[] = [
    ["Phase 1", "Audit Cordova + Vue 2.7 modules, isolate coupling hotspots, and define migration boundaries."],
    ["Phase 2", "Stand up React Native + TypeScript shell with Hermes and shared module contracts."],
    ["Phase 3", "Run legacy Vue and React Native modules in tandem to migrate flows with minimal user disruption."],
    ["Phase 4", "Generalize architecture and shared components so SG and MY apps can ship from one repository."],
];

export const rnMigrationOutcomes: CaseStatItem[] = [
    ["2", "Markets supported by shared architecture"],
    ["4.8", "Mobile app store rating maintained"],
    ["50%+", "Reduction in squad scope creep (scrum-master period)"],
];
