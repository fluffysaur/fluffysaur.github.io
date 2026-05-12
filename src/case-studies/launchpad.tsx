import { Bullets, Checklist, Figure, Stats } from "../components/ProjectDetail";
import { defineCase } from "./defineCase";

export default defineCase({
    id: "launchpad",
    title: "Launchpad: New Beginnings",
    subtitle: "Designing and building a COVID-era orientation website for Tembusu College's incoming residents.",
    dates: "May 2020 - Aug 2020",
    role: "UX Designer & Developer",
    team: "Publicity Committee",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Node.js", "MySQL", "Figma"],
    cover: "/assets/thumbnails/launchpad-thumb.jpg",
    sections: [
        {
            heading: "Project Overview",
            tldr: "I designed and built a multi-page orientation website with structured information architecture, interactive modules, and an update-friendly content model for committee operations.",
            content: (
                <p>
                    Tembusu Welcome Week is NUS Tembusu College's flagship orientation camp for ~300 incoming
                    residents. In 2020, COVID-19 pushed the programme online. I worked on a small team to build a
                    website that could replace key parts of the physical orientation experience in a short delivery
                    window.
                </p>
            ),
        },
        {
            heading: "My Role",
            content: (
                <>
                    <p>
                        I owned UX and frontend execution: framing content architecture with committee leads,
                        designing key pages in Figma, and implementing interactions with HTML, CSS, JavaScript, and
                        Bootstrap.
                    </p>
                    <Figure src="/assets/thumbnails/launchpad-thumb.jpg" alt="Placeholder: Launchpad project hero" />
                </>
            ),
        },
        {
            heading: "Define",
            content: (
                <>
                    <p>
                        The core challenge was preserving excitement and clarity without physical context. Incoming
                        residents needed to understand schedules, people, and college life through digital touchpoints
                        alone, while the committee needed content updates to stay easy and low-risk.
                    </p>
                    <Bullets
                        items={[
                            "COVID-19 moved orientation online, so the site had to replace key in-person experiences for ~300 residents.",
                            "Content came from 6+ sub-committees with frequent updates and shifting event details.",
                            "The core goal was a welcoming, easy-to-update digital journey that non-engineers could maintain.",
                        ]}
                    />
                    <Figure
                        src="/assets/thumbnails/launchpad-thumb.jpg"
                        alt="Placeholder: Launchpad surveys, interviews, and persona synthesis"
                    />
                </>
            ),
        },
        {
            heading: "Design",
            content: (
                <>
                    <Checklist
                        items={[
                            [
                                "Visual direction",
                                "I designed a space-themed direction in Figma to preserve orientation energy online.",
                            ],
                            [
                                "Information architecture",
                                "I mapped key routes for schedules, houses, stories, and resources to reduce confusion.",
                            ],
                            [
                                "Interaction planning",
                                "Prototype reviews with committee leads helped validate hierarchy and CTA clarity before build.",
                            ],
                        ]}
                    />
                    <Figure
                        src="/assets/thumbnails/launchpad-thumb.jpg"
                        alt="Placeholder: Launchpad wireframes and high-fidelity Figma screens"
                    />
                </>
            ),
        },
        {
            heading: "Build",
            content: (
                <>
                    <p>
                        Development focused on reliability and maintainability for student-committee handover. I
                        implemented modular sections so organizers could update content quickly as programme details
                        changed.
                    </p>
                    <Bullets
                        items={[
                            "I implemented the responsive frontend with HTML, CSS, JavaScript, and Bootstrap.",
                            "I integrated dynamic content workflows with Node.js and MySQL for fast updates.",
                            "I coordinated content QA and release timing across committee deadlines.",
                        ]}
                    />
                    <Figure
                        src="/assets/thumbnails/launchpad-thumb.jpg"
                        alt="Placeholder: Launchpad built pages and release QA snapshots"
                    />
                </>
            ),
        },
        {
            heading: "Outcomes",
            content: (
                <Stats
                    items={[
                        ["300", "Incoming residents served"],
                        ["6+", "Sub-committees coordinated"],
                        ["6 wks", "Design to launch"],
                    ]}
                />
            ),
        },
        {
            heading: "Reflection",
            content: (
                <p>
                    The biggest takeaway for me was that information architecture matters even more in fully remote
                    contexts. With clear structure and predictable interactions, a small team can still deliver an
                    experience that feels intentional and human.
                </p>
            ),
        },
    ],
});
