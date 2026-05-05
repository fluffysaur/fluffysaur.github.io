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
import {
    launchpadBuildBullets,
    launchpadDefineBullets,
    launchpadDesignChecklist,
    launchpadOutcomes,
} from "./data/launchpad.data";
import type { CaseMeta } from "./types";

export const meta: CaseMeta = {
    id: "launchpad",
    title: "Launchpad: New Beginnings",
    subtitle: "A concise case study on designing and building an online orientation experience during COVID-19.",
    repoLabel: "launchpad-tww2020",
    dates: "May 2020 - Aug 2020",
    role: "UX Designer & Developer",
    team: "Publicity Committee",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Node", "MySQL", "Adobe XD"],
    toc: ["Project Overview", "My Role", "Define", "Design", "Build", "Outcomes", "Reflection"],
    prev: { id: "staffany", title: "StaffAny Rewards" },
    next: { id: "rn-migration", title: "React Native Migration" },
};

export function LaunchpadContent() {
    return (
        <CaseContent>
            <CaseHeading>Project Overview</CaseHeading>
            <p>
                Tembusu Welcome Week is NUS Tembusu College's flagship orientation camp for ~300 incoming residents. In
                2020, COVID-19 pushed the programme online. The team needed a website that could replace key parts of
                the physical orientation experience in a short delivery window.
            </p>
            <CaseCallout label="TL;DR">
                I designed and built a multi-page orientation website with virtual exploration, structured content, and
                interactive elements for incoming residents.
            </CaseCallout>

            <CaseHeading>My Role</CaseHeading>
            <p>
                I handled UX and frontend execution: framing content architecture with committee leads, producing design
                directions, and implementing key pages and interactions with the engineering team.
            </p>

            <CaseImage src="/assets/thumbnails/launchpad-thumb.jpg" alt="Launchpad website" />

            <CaseHeading>Define</CaseHeading>
            <p>
                The core challenge was preserving excitement and clarity without physical context. Incoming residents
                needed to understand schedules, people, and college life through digital touchpoints alone.
            </p>
            <CaseBullets items={launchpadDefineBullets} />

            <CaseHeading>Design</CaseHeading>
            <CaseChecklist items={launchpadDesignChecklist} />

            <CaseHeading>Build</CaseHeading>
            <p>
                Development focused on reliability and maintainability for a student committee handover context. The
                site shipped as a responsive multi-page experience with modular sections that could be updated quickly.
            </p>
            <CaseBullets items={launchpadBuildBullets} />

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={launchpadOutcomes} />

            <CaseHeading>Reflection</CaseHeading>
            <p>
                The most valuable takeaway was that strong information structure matters even more when users are fully
                remote. When content and navigation are clear, a small team can still deliver an experience that feels
                intentional and human.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
