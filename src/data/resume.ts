export const ORIGINAL_RESUME_PDF_URL = "/assets/documents/TanYiJia-Resume.pdf";

export interface ResumeExperience {
    title: string;
    company: string;
    location?: string;
    dates: string;
    bullets: string[];
}

export interface ResumeProject {
    title: string;
    description: string;
}

export interface ResumeDatedItem {
    title: string;
    date?: string;
}

export const RESUME = {
    name: "Tan Yi Jia",
    role: "Frontend Software Engineer",
    location: "Singapore",
    contact: [
        { label: "+65 96784612", href: "tel:+6596784612" },
        { label: "tanyijia@gmail.com", href: "mailto:tanyijia@gmail.com" },
        { label: "tanyijia.me", href: "https://tanyijia.me/" },
    ],
    summary:
        "Frontend software engineer with a product-design background, building customer-facing mobile and web experiences across React Native, Vue, Cordova, and TypeScript. I have led migration work, shipped app features used by insurance customers, improved delivery quality as a scrum master, and bring a practical eye for systems, usability, and collaboration.",
    highlights: [
        "React Native Migration",
        "Frontend Architecture Design",
        "Mobile App Feature Delivery",
        "Product Design Fluency",
        "Project Leadership",
    ],
    experience: [
        {
            title: "Frontend Software Engineer",
            company: "Great Eastern",
            dates: "Mar 2026 - Present",
            bullets: [
                "Leading progressive migration work from Cordova and Vue to React Native, improving load times and development efficiency across the mobile app stack.",
                "Revamped microfrontend architecture foundations to support multiple country builds and cleaner long-term delivery.",
                "Partnering across product, QA, and engineering to modernize customer-facing insurance journeys without disrupting active releases.",
            ],
        },
        {
            title: "Associate Frontend Software Engineer",
            company: "Great Eastern",
            dates: "Aug 2023 - Mar 2026",
            bullets: [
                "Developed features for the Great Eastern mobile application using Cordova and VueJS, contributing to a 4.8 rating on the Google Play Store and App Store.",
                "Led development of a claims feature as scrum master, helping the team ship a 4.8/5 customer-rated journey after 156 monthly users.",
                "Reduced scope creep by over 50% through clearer estimation, sprint alignment, and delivery communication.",
                "Organized two IT department-wide events with 100+ attendees each, strengthening cross-team collaboration.",
            ],
        },
        {
            title: "Product Designer",
            company: "StaffAny",
            dates: "Jan 2022 - Jun 2023",
            bullets: [
                "Owned growth feature design from research and prototypes through release, with direct collaboration across product, engineering, and go-to-market teams.",
                "Built high-fidelity Figma prototypes for robust user testing and smoother handoff into development.",
                "Revamped the design system for consistency and reuse, improving design-team speed and interface quality.",
                "Conducted user testing with more than 30 users using the UMUX-Lite assessment to validate feature usability.",
            ],
        },
        {
            title: "Frontend Developer",
            company: "YSI Southeast Asia (Interseed)",
            dates: "Sep 2020 - Jun 2021",
            bullets: [
                "Developed a MERN web application that connected and supported sustainability start-ups through the Interseed platform.",
                "Designed a landing page prototype in Figma and implemented Wix pages with self-coded CSS and JavaScript elements.",
                "Collaborated with three developers to support a smooth soft launch to more than 200 users.",
            ],
        },
    ] satisfies ResumeExperience[],
    projects: [
        {
            title: "Tempusu Bot",
            description:
                "Developed a Telegram bot using JavaScript and MySQL that helped NUS students set custom COVID-19 temperature-taking reminders. Used by more than 280 students.",
        },
        {
            title: "Tembusu College Orientation Website",
            description:
                "Designed and developed an orientation website with Adobe XD, JavaScript, Bootstrap, and MySQL for over 300 incoming residents.",
        },
    ] satisfies ResumeProject[],
    skills: ["React Native", "React", "Vue", "Cordova", "TypeScript", "Figma"],
    education: {
        school: "National University of Singapore",
        dates: "Aug 2019 - May 2023",
        degree: "BSc (Hons) in Communications and New Media, Minor in Interactive Media Development",
        detail: "GPA: 4.97 / 5.00",
    },
    awards: [
        { title: "NTUC Income Prize, Best Student in NUS Comms & New Media" },
        { title: "NUS Dean's Scholars List, top 1% in FASS cohort, 4 semesters" },
        { title: "NUS Shell Bronze Medal, 3rd Place in FASS cohort, 1 semester" },
    ] satisfies ResumeDatedItem[],
    certificates: [
        { title: "edX Verified Certificate for HTML5 Coding Essentials and Best Practices", date: "Nov 2022" },
        { title: "edX Verified Certificate for Creative Coding", date: "Aug 2022" },
    ] satisfies ResumeDatedItem[],
};
