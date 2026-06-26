import { Bullets, Checklist, Figure, Stats } from "../components/ProjectDetail";
import { defineCase } from "./defineCase";

export default defineCase({
    id: "launchpad",
    title: "Launchpad: New Beginnings",
    subtitle: "Designing and developing the Tembusu Welcome Week 2020 website.",
    dates: "May 2020 - Aug 2020",
    role: "UI/UX Designer & Full-Stack Developer",
    team: "Publicity Committee + co-developer",
    tags: ["Adobe XD", "JavaScript", "HTML/CSS", "Bootstrap", "Node.js", "MySQL", "Heroku"],
    cover: "/assets/thumbnails/launchpad-thumb.jpg",
    sections: [
        {
            heading: "Project Overview",
            tldr: "I designed and built the Tembusu Welcome Week 2020 website as the main information hub for a COVID-era online orientation.",
            content: (
                <>
                    <p>
                        Launchpad: New Beginnings was created for Tembusu College's Welcome Week in 2020. Because almost
                        all orientation activities moved online during COVID-19 restrictions, I wanted the incoming
                        residents to experience something more memorable than a standard Zoom orientation.
                    </p>
                    <p>
                        The site became a central hub for orientation information, programme support, interactive
                        experiences, and post-launch updates throughout the week.
                    </p>
                </>
            ),
        },
        {
            heading: "Role & Setup",
            content: (
                <>
                    <p>
                        I liaised with committee heads to define scope, worked with the publicity team to match the
                        orientation theme, designed and tested mockups, then developed the final website with Hui Ling.
                    </p>
                    <Checklist
                        items={[
                            ["Tech stack", "JavaScript, HTML, CSS, Bootstrap, MySQL, GitHub, Heroku, FileZilla"],
                            ["Methods", "Sketching, wireframing, designing, prototyping, responsive testing"],
                            ["Duration", "2 months from pitch to launch"],
                        ]}
                    />
                </>
            ),
        },
        {
            heading: "Why A Website",
            content: (
                <>
                    <p>
                        I pitched the website because I wanted the project to have real audience impact. A few weeks
                        earlier, Hui Ling and I had built a website for CodeForCorona, so when we both joined the TWW
                        publicity committee, I proposed using that experience for orientation.
                    </p>
                    <Bullets
                        items={[
                            "Differentiate Tembusu's camp from other online NUS orientations.",
                            "Create a single source of truth for orientation materials and information.",
                            "Enrich the virtual orientation experience beyond static announcements.",
                            "Present updated college-life information to incoming residents.",
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
                        We formed an inter-committee task force across publicity and programmes so Hui Ling and I could
                        understand what the programme team was planning and how the website could support them.
                    </p>
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-01.png"
                        alt="Inter-committee collaboration notes"
                    />
                    <p>
                        Privacy was one major constraint. For example, we scrapped an initial idea to list every
                        committee member in a public tree because we did not want names and photos exposed publicly.
                    </p>
                </>
            ),
        },
        {
            heading: "Design Direction",
            content: (
                <>
                    <p>
                        The theme was "Launchpad: New Beginnings." The narrative framed participants as space explorers
                        landing on a new planet called Tembusu and joining other explorers for Tembusu Welcome Week.
                    </p>
                    <p>
                        We drew from publicity collateral such as Instagram posts, shirts, and the programme booklet so
                        the website would feel consistent with the rest of the orientation material.
                    </p>
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-02.png"
                        alt="Launchpad design direction and visual references"
                    />
                </>
            ),
        },
        {
            heading: "Landing Page",
            content: (
                <>
                    <p>
                        We planned two launches: a "Watch This Space" page at least one month before TWW, then the full
                        launch when the camp started. We sketched and mocked up the landing page early so the committee
                        could approve the direction before we moved into full design and development.
                    </p>
                    <p>
                        A committee member suggested adding a countdown to the event, which I later implemented in the
                        landing page.
                    </p>
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-03.png"
                        alt="Launchpad landing page sketches and mockups"
                    />
                </>
            ),
        },
        {
            heading: "Prototype & System",
            content: (
                <>
                    <p>
                        I created a low-fidelity Adobe XD prototype to validate the website structure with the Publicity
                        Committee before development. We also spent time testing font options against the space
                        exploration theme and later updated fonts to match the final collateral.
                    </p>
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-04.jpg"
                        alt="Launchpad low-fidelity prototype"
                    />
                    <Figure src="/assets/case-studies/launchpad/launchpad-05.png" alt="Launchpad font exploration" />
                </>
            ),
        },
        {
            heading: "Sound Design",
            content: (
                <p>
                    To make the site more immersive, I added an optional looping fire crackling effect for the landing
                    page and footstep sounds for the virtual tour. I originally wanted the fire sound to autoplay, but
                    disabled it by default after learning how disruptive browser autoplay can be.
                </p>
            ),
        },
        {
            heading: "Develop",
            content: (
                <>
                    <p>
                        I led development because I had more web experience. Hui Ling took charge of the virtual tour,
                        while I built the main site from a Bootstrap template and integrated dynamic content where
                        useful.
                    </p>
                    <Checklist
                        items={[
                            ["Hosting", "Compared hosting and domain options, then used InterServer and NameCheap."],
                            ["Collaboration", "Used GitHub pull requests and a Heroku prototype for staging."],
                            ["Database", "Used MySQL and phpMyAdmin to manage Student Life Showcase data."],
                            ["Responsive QA", "Tested each release on laptop, tablet, and phone before publishing."],
                        ]}
                    />
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-06.png"
                        alt="Launchpad responsive mobile compatibility"
                    />
                </>
            ),
        },
        {
            heading: "Web Applications",
            content: (
                <>
                    <p>
                        Two interactive web apps extended the experience: a virtual tour and tPlace, an r/Place-inspired
                        collaborative pixel canvas. I supported the virtual tour with navigation, layout, and sound, and
                        designed and developed the web and mobile interfaces for tPlace.
                    </p>
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-07.png"
                        alt="Launchpad virtual tour interface"
                    />
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-08.png"
                        alt="Launchpad tPlace collaborative canvas"
                    />
                </>
            ),
        },
        {
            heading: "Launch",
            content: (
                <>
                    <p>
                        The first "Watch This Space" launch prompted participants to sign up and learn basic Tembusu
                        information. A few days before the full launch, I soft-launched the prototype to Welcome Group
                        Leaders so they could catch bugs, typos, and content issues.
                    </p>
                    <p>
                        The full site launched on the first day of TWW 2020. Throughout the week, I updated pages based
                        on programme flow and populated the gallery as photos and videos were released.
                    </p>
                    <Figure src="/assets/case-studies/launchpad/launchpad-09.png" alt="Launchpad main launch website" />
                </>
            ),
        },
        {
            heading: "Post-Launch Fixes",
            content: (
                <>
                    <p>
                        During the Student Life Showcase, participants had trouble finding specific student groups
                        because they did not know which category each group belonged to. I shipped a quick UX fix that
                        listed interest groups under each category.
                    </p>
                    <Figure
                        src="/assets/case-studies/launchpad/launchpad-10.png"
                        alt="Launchpad Student Groups post-launch fix"
                    />
                </>
            ),
        },
        {
            heading: "Outcomes",
            content: (
                <Stats
                    items={[
                        ["300+", "Incoming residents served"],
                        ["2", "Interactive web apps developed"],
                        ["1", "Memorable online orientation experience"],
                    ]}
                />
            ),
        },
        {
            heading: "Reflections",
            content: (
                <>
                    <p>
                        I would run proper usability tests earlier today. A task like "find a specific student group"
                        could have exposed the Student Groups issue before launch, and concept testing might have helped
                        us decide whether the virtual tour was worth the build effort.
                    </p>
                    <p>
                        Still, the site achieved what I wanted: it helped Tembusu Welcome Week 2020 feel memorable for
                        participants despite the constraints of an online orientation.
                    </p>
                </>
            ),
        },
    ],
});
