import { Bullets, Checklist, Figure, Stats } from "../components/ProjectDetail";
import { defineCase } from "./defineCase";

export default defineCase({
    id: "staffany",
    title: "StaffAny Learn & Earn",
    subtitle: "A rewards checklist that entices new free-plan users to complete tasks and discover product value.",
    dates: "Jan 2022 - Jun 2023",
    role: "Product Designer",
    team: "Growth Squad",
    tags: ["Figma", "Jira", "Slack", "Google Docs", "Google Sheets", "Notion", "UMUX-Lite"],
    cover: "/assets/thumbnails/learnandearn-thumb.jpg",
    sections: [
        {
            heading: "Background",
            tldr: "I designed Learn & Earn to help new StaffAny Free Plan users complete product-value tasks and drive bottom-up demand generation.",
            content: (
                <>
                    <p>
                        Learn & Earn was aimed at enticing new Free Plan users on StaffAny's scheduling application to
                        complete checklist tasks, discover the product's value, and create bottom-up demand.
                    </p>
                </>
            ),
        },
        {
            heading: "My Role",
            content: (
                <>
                    <p>
                        The Sales team and my Product Manager had already conceived the tasks and rewards. As the
                        product designer, I liaised with engineering, product, and marketing to shape the best solution
                        and prepare designs for StaffAny's mobile and web applications.
                    </p>
                    <p>
                        My key contributions included competitor research, solution exploration, usability testing,
                        prototyping, design critique, and engineering collaboration.
                    </p>
                    <Checklist
                        items={[
                            ["Software", "Figma, Jira, Slack, Google Docs, Google Sheets, Notion"],
                            ["Methods", "Competitor research, prototyping, usability testing, design critique"],
                            ["Duration", "2 weeks for the first iteration, with continued iterations after launch"],
                        ]}
                    />
                </>
            ),
        },
        {
            heading: "Research",
            content: (
                <>
                    <p>
                        Before conceptualisation, I looked for similar onboarding and rewards patterns from other
                        products and online literature. The closest pattern was the onboarding checklist: users complete
                        tasks to get started with the application.
                    </p>
                    <Bullets
                        items={[
                            "Keep the checklist simple.",
                            "Give users a head start.",
                            "Show progress clearly.",
                            "Provide further support when users get stuck.",
                        ]}
                    />
                    <Figure
                        src="/assets/case-studies/staffany/staffany-01.png"
                        alt="StaffAny Learn and Earn competitor research"
                    />
                </>
            ),
        },
        {
            heading: "Solution Concepts",
            content: (
                <>
                    <p>
                        From the research, I conceived three solution concepts. I emphasised mobile because usage data
                        indicated that most users discovered StaffAny from there.
                    </p>
                    <p>
                        These concepts were refined into prototypes for usability testing so we could assess discovery,
                        comprehension, and perceived usefulness before committing engineering effort.
                    </p>
                    <Figure
                        src="/assets/case-studies/staffany/staffany-02.png"
                        alt="StaffAny Learn and Earn solution concepts"
                    />
                </>
            ),
        },
        {
            heading: "Usability Test Round 1",
            content: (
                <>
                    <p>
                        I went to Junction 8 in Bishan and approached retail managers in several outlets for impromptu
                        usability testing, known internally as "bashing." Because time was tight, I focused on mobile,
                        which was the priority surface.
                    </p>
                    <Bullets
                        items={[
                            "Assess discoverability of the rewards tasks on mobile.",
                            "Assess understandability of the rewards concept on mobile.",
                            "Assess whether the feature felt useful to retail managers.",
                        ]}
                    />
                    <p>
                        The first round exposed discoverability and comprehension issues. The positive signal was that
                        users still found the feature useful for learning about the application.
                    </p>
                    <Figure
                        src="/assets/case-studies/staffany/staffany-03.png"
                        alt="StaffAny Learn and Earn round one usability testing findings"
                    />
                </>
            ),
        },
        {
            heading: "Refined Prototypes",
            content: (
                <>
                    <p>
                        After the first round, I ran more competitor research and created a second iteration. Three
                        variants were prepared to test whether different layouts improved discoverability and
                        understandability.
                    </p>
                    <Figure
                        src="/assets/case-studies/staffany/staffany-04.png"
                        alt="StaffAny Learn and Earn refined prototypes for round two"
                    />
                </>
            ),
        },
        {
            heading: "Usability Test Round 2",
            content: (
                <>
                    <p>
                        For the second round, I went to a shopping mall in Clementi to approach retail managers. This
                        round tested discoverability, understandability, and participant preference across the variants.
                    </p>
                    <Checklist
                        middleWidth={150}
                        items={[
                            [
                                "Relation",
                                "Participants did not think that Get Started and Rewards tasks were linked, so I separated them.",
                            ],
                            [
                                "More tab",
                                "Participants tended to look for the checklist under More, so I moved the checklist there.",
                            ],
                            [
                                "Skewed findings",
                                "Variant C may have been affected by order effects because A and B were tested first.",
                            ],
                        ]}
                    />
                    <Figure
                        src="/assets/case-studies/staffany/staffany-05.png"
                        alt="StaffAny Learn and Earn round two usability testing findings"
                    />
                </>
            ),
        },
        {
            heading: "Internal Validation",
            content: (
                <>
                    <p>
                        After usability testing, I prepared another prototype and ran a design critique with the design
                        team. I also discussed feasibility with engineering, including concerns about rewards logic and
                        backend structure.
                    </p>
                    <p>
                        Because Variants A and B failed UMUX-Lite testing and Variant C had potential order-effect bias,
                        we chose not to implement those options in that sprint. Instead, the checklist remained
                        discoverable under More so engineering points could go to higher-priority work.
                    </p>
                </>
            ),
        },
        {
            heading: "First Version",
            content: (
                <>
                    <p>
                        The first version shipped on 22 March 2022. Programmatic logging was added so the team could
                        track whether users completed the tasks and whether task completion contributed to paid-plan
                        conversion.
                    </p>
                    <Figure
                        src="/assets/case-studies/staffany/staffany-06.png"
                        alt="StaffAny Learn and Earn first released version"
                    />
                </>
            ),
        },
        {
            heading: "Further Iterations",
            content: (
                <>
                    <p>
                        In the initial version, most rewards were manually activated so we could assess demand and
                        effectiveness. Once a sizeable number of Free Plan users completed the checklist, the feature
                        was deemed viable and we moved toward automating the rewards system.
                    </p>
                    <p>
                        I continued working on the project through multiple iterations until my internship ended in June
                        2023, after which I focused on overhauling StaffAny's design system under a part-time contract.
                    </p>
                </>
            ),
        },
        {
            heading: "Outcomes",
            content: (
                <Stats
                    items={[
                        ["22 Mar", "First version released"],
                        ["48k+", "Users reached within 6 months"],
                    ]}
                />
            ),
        },
        {
            heading: "Reflections",
            content: (
                <>
                    <p>
                        Cross-department collaboration made the first launch possible. Because product, engineering,
                        marketing, sales, and design communicated quickly, we could consider different concepts, resolve
                        issues, and launch the first version in two weeks.
                    </p>
                    <p>
                        I would improve the research method next time. The impromptu tests were useful, but I should
                        have counterbalanced variants to reduce order effects and considered tools such as Maze to reach
                        a wider target audience.
                    </p>
                    <p>
                        This project also taught me to voice product concerns earlier. I had reservations about making
                        referrals one of the learning tasks because new users were unlikely to refer a friend so early,
                        and an impossible-feeling task could leave the checklist perpetually incomplete.
                    </p>
                </>
            ),
        },
    ],
});
