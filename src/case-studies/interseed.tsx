import { Bullets, Checklist, Figure, Stats } from "../components/ProjectDetail";
import { defineCase } from "./defineCase";

export default defineCase({
    id: "interseed",
    title: "Interseed Web App",
    subtitle: "Designing and developing a MERN web app for sustainability impact founders in Southeast Asia.",
    dates: "Sep 2020 - Jun 2021",
    role: "UX Designer & Sole Frontend Developer",
    team: "CEO + 4 interns",
    tags: ["MERN", "React", "TypeScript", "Node.js", "MongoDB", "Express", "Adobe XD", "Jira"],
    cover: "/assets/thumbnails/interseed-thumb.jpg",
    sections: [
        {
            heading: "Project Overview",
            tldr: "I helped design and build Interseed, a platform for sustainability impact founders to connect with talent, funding opportunities, and knowledge resources.",
            content: (
                <>
                    <p>
                        During my internship with YSI Southeast Asia, I worked on Interseed: a web application for
                        impact founders, talent, and investors in Southeast Asia. It was my first MERN stack product,
                        with a heavy focus on the frontend.
                    </p>
                    <p>
                        I learned React and TypeScript over two weeks, then used them to translate the product direction
                        into working application screens for a soft launch.
                    </p>
                </>
            ),
        },
        {
            heading: "Role & Setup",
            content: (
                <>
                    <p>
                        I was the UX designer and sole frontend developer. I worked with two backend interns, one DevOps
                        intern, and our CEO Surya, who directed the project and conducted most of the user research.
                    </p>
                    <Checklist
                        items={[
                            ["Tech stack", "MongoDB, Express, React, Node.js, TypeScript, React-Bootstrap"],
                            ["Design tools", "Adobe XD, Jira, user journeys, wireframes, prototypes, UI design"],
                            ["Duration", "6 months, including two weeks of React and TypeScript ramp-up"],
                        ]}
                    />
                </>
            ),
        },
        {
            heading: "Define",
            content: (
                <>
                    <p>
                        The product direction came from 21 interviews with impact founders across Southeast Asia. The
                        findings were translated into a founder persona and a set of needs around funding access, market
                        knowledge, mentorship, and credibility.
                    </p>
                    <Bullets
                        items={[
                            "Founders found it difficult to discuss and convey ideas to investors.",
                            "They struggled to meet like-minded founders and potential partners.",
                            "They needed stronger context for product-market fit and regional expansion.",
                            "They wanted a consolidated centre of niche knowledge, networking, and credible affirmation.",
                        ]}
                    />
                    <Figure
                        src="/assets/case-studies/interseed/interseed-01.png"
                        alt="Interseed persona and problem framing"
                    />
                </>
            ),
        },
        {
            heading: "User Stories",
            content: (
                <>
                    <p>
                        Each team member drafted persona statements, then voted on the ones most relevant to Interseed.
                        I explored the founder's relationship with investors, mentors, talent, and like-minded founders
                        to understand why each connection might matter.
                    </p>
                    <p>
                        The consolidated framing became: as a concerned impact founder, I want to enter a thriving SEA
                        network so I can find people who can help me access funding.
                    </p>
                    <Figure
                        src="/assets/case-studies/interseed/interseed-02.png"
                        alt="Interseed consolidated user story"
                    />
                </>
            ),
        },
        {
            heading: "User Journey",
            content: (
                <>
                    <p>
                        We split user narratives into overarching, high-priority, and low-priority flows. I mapped both
                        the current state and proposed state so the team could see how Interseed might change a
                        founder's behaviour.
                    </p>
                    <Figure
                        src="/assets/case-studies/interseed/interseed-03.png"
                        alt="Interseed user journey narratives"
                    />
                </>
            ),
        },
        {
            heading: "Competitor Research",
            content: (
                <>
                    <p>
                        To understand the market, each team member studied similar products. I assessed seven products
                        for purpose, strengths, weaknesses, user relevance, and possible feature inspiration.
                    </p>
                    <Bullets
                        items={[
                            "Social login to reduce sign-up friction.",
                            "Onboarding guides to support early activation.",
                            "Events maps and calendars for sustainability-related events.",
                            "News, blogs, forums, and posts for ongoing knowledge and discussion.",
                            "Direct messaging and simple profile setup for easier connection.",
                        ]}
                    />
                </>
            ),
        },
        {
            heading: "App Structure",
            content: (
                <>
                    <p>
                        Based on the user narratives and competitor research, we drafted an initial web app flowchart.
                        This became the starting point for the core feature table and design scope, even though we
                        expected it to change during the build.
                    </p>
                    <Figure src="/assets/case-studies/interseed/interseed-04.png" alt="Interseed web app flowchart" />
                    <Figure src="/assets/case-studies/interseed/interseed-05.png" alt="Interseed core features table" />
                </>
            ),
        },
        {
            heading: "First Prototype",
            content: (
                <>
                    <p>
                        I designed the first working prototype in Adobe XD, taking inspiration from Facebook's
                        component-style interface. It included login, sign-up, mock onboarding, a homepage placeholder,
                        opportunities, resources, and events.
                    </p>
                    <p>
                        I used the prototype for internal concept testing. The main recommendations were to split the
                        community page, soften the blue palette, rethink the homepage, and remove the contact page.
                    </p>
                    <Checklist
                        items={[
                            ["Community", "Separate organisations and users instead of combining them in one list."],
                            ["Visuals", "Use a lighter blue because the first palette felt too harsh."],
                            ["Homepage", "Clarify the purpose before locking the first logged-in screen."],
                            ["Navigation", "Remove the contact page from the application navbar."],
                        ]}
                    />
                </>
            ),
        },
        {
            heading: "Notable Designs",
            content: (
                <>
                    <p>
                        The homepage took several rounds of discussion. We eventually shaped it around mood check-ins,
                        motivational quotes, announcements, signed-up events, and featured articles so the first screen
                        felt supportive and useful.
                    </p>
                    <Figure src="/assets/case-studies/interseed/interseed-06.png" alt="Interseed homepage design" />
                    <p>
                        The final mid-fidelity prototype applied the first round of feedback, updated existing layouts,
                        added missing pages, and became the main design reference for development.
                    </p>
                </>
            ),
        },
        {
            heading: "Develop",
            content: (
                <>
                    <p>
                        The development phase surfaced design gaps. Some pages were designed and built outside the
                        prototype because of timeline pressure, including login, sign-up, edit profile, market research,
                        job cards, and organisation-related pages.
                    </p>
                    <Bullets
                        items={[
                            "The Market Research page was built from product inspiration instead of a full Adobe XD prototype.",
                            "Internal testing revealed missing loading and empty states in list-heavy pages.",
                            "The lack of prototypes made some filter layouts feel rushed and less intentional.",
                        ]}
                    />
                    <Figure src="/assets/case-studies/interseed/interseed-07.png" alt="Interseed empty state design" />
                </>
            ),
        },
        {
            heading: "Outcomes",
            content: (
                <Stats
                    items={[
                        ["21", "Founder interviews informed the problem space"],
                        ["7", "Comparable products researched by me"],
                        ["2 wks", "React and TypeScript ramp-up"],
                        ["300+", "Users reached at soft launch"],
                    ]}
                />
            ),
        },
        {
            heading: "Reflections",
            content: (
                <>
                    <p>
                        This was a project of many firsts: my first React build, first professional-facing product, and
                        first large-scale web application. The biggest lesson was to design high-fidelity prototypes
                        before development whenever possible, especially when I am also the person building the UI.
                    </p>
                    <p>
                        I also learned to clarify earlier. Instead of waiting for meetings to reveal unresolved design
                        decisions, I should have arranged quicker concept check-ins so ambiguous pages like the homepage
                        could be validated sooner.
                    </p>
                </>
            ),
        },
    ],
});
