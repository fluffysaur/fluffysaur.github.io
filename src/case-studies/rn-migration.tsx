import {
    CaseBullets,
    CaseCallout,
    CaseChecklist,
    CaseContent,
    CaseHeading,
    CaseImage,
    CaseStatsGrid,
    CaseTagRow,
} from "./components";
import { rnMigrationApproach, rnMigrationHighlights, rnMigrationOutcomes } from "./data/rn-migration.data";
import type { CaseMeta } from "./types";

export const meta: CaseMeta = {
    id: "rn-migration",
    title: "Great Eastern Mobile Platform Migration",
    subtitle: "Progressively migrating Cordova + Vue apps to React Native + TypeScript across SG and MY initiatives.",
    repoLabel: "rn-migration",
    dates: "Aug 2023 - Present",
    role: "Software Engineer (formerly Associate Software Engineer)",
    team: "Great Eastern IT - Mobile Team",
    tags: ["React Native", "TypeScript", "Cordova", "Vue 2.7", "Hermes", "Amazon Q", "Kiro CLI"],
    toc: ["Overview", "Context", "Migration Strategy", "Architecture Decisions", "Outcomes", "What I Learned"],
    prev: { id: "launchpad", title: "Launchpad: New Beginnings" },
    next: null,
};

export function RnMigrationContent() {
    return (
        <CaseContent>
            <CaseHeading>Overview</CaseHeading>
            <p>
                At Great Eastern, I work on modernizing a legacy mobile platform that previously relied on Cordova and
                Vue 2.7. My focus has been shipping a progressive React Native + TypeScript migration that improves
                maintainability without destabilizing existing user journeys.
            </p>
            <CaseCallout label="TL;DR">
                I led migration planning and implementation for a single-repo modular architecture, enabled Vue and
                React Native modules to run in tandem, and supported reuse across SG and MY app initiatives.
            </CaseCallout>
            <CaseBullets items={rnMigrationHighlights} />
            <CaseImage
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Placeholder: RN migration architecture overview diagram"
            />

            <CaseHeading>Context</CaseHeading>
            <p>
                The existing codebase had become tightly coupled after years of iteration. Shipping changes across
                entities was increasingly expensive, and onboarding engineers required deep knowledge of legacy module
                wiring before they could contribute safely.
            </p>

            <CaseHeading>Migration Strategy</CaseHeading>
            <p>
                I chose a progressive migration strategy instead of a full rewrite. That let us improve architecture in
                production while keeping user-facing risk low and preserving delivery momentum.
            </p>
            <CaseChecklist items={rnMigrationApproach} middleWidth={170} />
            <CaseImage
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Placeholder: RN migration phase plan and module boundaries"
            />

            <CaseHeading>Architecture Decisions</CaseHeading>
            <p>
                I moved the SG app frontend toward a single-repo modular structure and aligned module contracts so teams
                could ship more independently. The same architecture was then shaped to support GE App MY, improving
                reuse and consistency across both markets.
            </p>
            <p>
                In parallel, I piloted Amazon Q and Kiro CLI workflows for repetitive implementation tasks and
                documentation-heavy steps. Sharing what worked helped the team adopt AI-assisted development practices
                pragmatically.
            </p>
            <CaseImage
                src="/assets/thumbnails/interseed-thumb.jpg"
                alt="Placeholder: shared SG and MY module architecture"
            />

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={rnMigrationOutcomes} />

            <CaseHeading>What I Learned</CaseHeading>
            <p>
                This migration reinforced that architecture change is as much about sequencing as technology.
                Progressive rollout, clear module boundaries, and strong cross-team communication made it possible to
                modernize the stack while still delivering product value continuously.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
