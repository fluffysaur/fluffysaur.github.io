import {
    CaseBullets,
    CaseCallout,
    CaseChecklist,
    CaseContent,
    CaseHeading,
    CaseImage,
    CaseStatsGrid,
    CaseTagRow,
} from "../components/WorkDetail";
import type { CaseMeta, CaseChecklistItem, CaseStatItem } from "./types";

const launchpadDefineBullets: string[] = [
    "COVID-19 moved orientation online, so the site had to replace key in-person experiences for ~300 residents.",
    "Content came from 6+ sub-committees with frequent updates and shifting event details.",
    "The core goal was a welcoming, easy-to-update digital journey that non-engineers could maintain.",
];

const launchpadDesignChecklist: CaseChecklistItem[] = [
    ["Visual direction", "I designed a space-themed direction in Figma to preserve orientation energy online."],
    [
        "Information architecture",
        "I mapped key routes for schedules, houses, stories, and resources to reduce confusion.",
    ],
    [
        "Interaction planning",
        "Prototype reviews with committee leads helped validate hierarchy and CTA clarity before build.",
    ],
];

const launchpadBuildBullets: string[] = [
    "I implemented the responsive frontend with HTML, CSS, JavaScript, and Bootstrap.",
    "I integrated dynamic content workflows with Node.js and MySQL for fast updates.",
    "I coordinated content QA and release timing across committee deadlines.",
];

const launchpadOutcomes: CaseStatItem[] = [
    ["300", "Incoming residents served"],
    ["6+", "Sub-committees coordinated"],
    ["6 wks", "Design to launch"],
];

export const meta: CaseMeta = {
    id: "launchpad",
    title: "Launchpad: New Beginnings",
    subtitle: "Designing and building a COVID-era orientation website for Tembusu College's incoming residents.",
    repoLabel: "launchpad-tww2020",
    dates: "May 2020 - Aug 2020",
    role: "UX Designer & Developer",
    team: "Publicity Committee",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Node.js", "MySQL", "Figma"],
    toc: ["Project Overview", "My Role", "Define", "Design", "Build", "Outcomes", "Reflection"],
    mainImage: "/assets/thumbnails/launchpad-thumb.jpg",
    prev: { id: "staffany", title: "StaffAny Learn & Earn" },
    next: { id: "rn-migration", title: "React Native Migration" },
};

export function LaunchpadContent() {
    return (
        <CaseContent>
            <CaseHeading>Project Overview</CaseHeading>
            <p>
                Tembusu Welcome Week is NUS Tembusu College's flagship orientation camp for ~300 incoming residents. In
                2020, COVID-19 pushed the programme online. I worked on a small team to build a website that could
                replace key parts of the physical orientation experience in a short delivery window.
            </p>
            <CaseCallout label="TL;DR">
                I designed and built a multi-page orientation website with structured information architecture,
                interactive modules, and an update-friendly content model for committee operations.
            </CaseCallout>

            <CaseHeading>My Role</CaseHeading>
            <p>
                I owned UX and frontend execution: framing content architecture with committee leads, designing key
                pages in Figma, and implementing interactions with HTML, CSS, JavaScript, and Bootstrap.
            </p>

            <CaseImage src="/assets/thumbnails/launchpad-thumb.jpg" alt="Placeholder: Launchpad project hero" />

            <CaseHeading>Define</CaseHeading>
            <p>
                The core challenge was preserving excitement and clarity without physical context. Incoming residents
                needed to understand schedules, people, and college life through digital touchpoints alone, while the
                committee needed content updates to stay easy and low-risk.
            </p>
            <CaseBullets items={launchpadDefineBullets} />
            <CaseImage
                src="/assets/thumbnails/launchpad-thumb.jpg"
                alt="Placeholder: Launchpad surveys, interviews, and persona synthesis"
            />

            <CaseHeading>Design</CaseHeading>
            <CaseChecklist items={launchpadDesignChecklist} />
            <CaseImage
                src="/assets/thumbnails/launchpad-thumb.jpg"
                alt="Placeholder: Launchpad wireframes and high-fidelity Figma screens"
            />

            <CaseHeading>Build</CaseHeading>
            <p>
                Development focused on reliability and maintainability for student-committee handover. I implemented
                modular sections so organizers could update content quickly as programme details changed.
            </p>
            <CaseBullets items={launchpadBuildBullets} />
            <CaseImage
                src="/assets/thumbnails/launchpad-thumb.jpg"
                alt="Placeholder: Launchpad built pages and release QA snapshots"
            />

            <CaseHeading>Outcomes</CaseHeading>
            <CaseStatsGrid items={launchpadOutcomes} />

            <CaseHeading>Reflection</CaseHeading>
            <p>
                The biggest takeaway for me was that information architecture matters even more in fully remote
                contexts. With clear structure and predictable interactions, a small team can still deliver an
                experience that feels intentional and human.
            </p>

            <CaseTagRow tags={meta.tags} />
        </CaseContent>
    );
}
