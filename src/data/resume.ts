export const ORIGINAL_RESUME_PDF_URL = "/assets/documents/TanYiJia-Resume.pdf";

export interface ResumeRole {
    title: string;
    dates: string;
    bullets: string[];
}

export interface ResumeExperience {
    company: string;
    location?: string;
    dates?: string;
    roles: ResumeRole[];
}

export interface ResumeProject {
    title: string;
    dates?: string;
    description: string;
}

export interface ResumeDatedItem {
    title: string;
    date?: string;
}

export interface ResumeSkillCategory {
    category: string;
    skills: string[];
}

export const RESUME = {
    name: "Tan Yi Jia",
    role: "Frontend Software Engineer",
    location: "Singapore",
    contact: [
        { label: "+65 96784612", href: "tel:+6596784612" },
        { label: "tanyijia@gmail.com", href: "mailto:tanyijia@gmail.com" },
        { label: "tanyijia.me", href: "https://tanyijia.me/" },
        { label: "github.com/fluffysaur", href: "https://github.com/fluffysaur" },
    ],
    summary:
        "Frontend Software Engineer with a product-design background, building scalable mobile and web applications across React Native, Vue, React, and TypeScript. Experienced in microfrontend architecture, multi-market app delivery (SG & MY), and leveraging AI-Driven Development Lifecycles (AIDLC) to accelerate production-grade engineering.",
    experience: [
        {
            company: "Great Eastern",
            roles: [
                {
                    title: "Frontend Software Engineer",
                    dates: "Mar 2026 - Present",
                    bullets: [
                        "Architected the progressive migration strategy from legacy Cordova/Vue to React Native, decoupling multi-country business logic into a modular microfrontend architecture to accelerate feature delivery across SG and MY regional markets.",
                        "Replaced eager boot initialization with on-demand micro-app lazy loading, cutting app launch from ~5s to <1s.",
                        "Piloted AI-assisted developer workflows (Kiro CLI, Amazon Q) across sprint lifecycles to accelerate feature scaffolding, contract verification, and documentation.",
                    ],
                },
                {
                    title: "Associate Frontend Software Engineer",
                    dates: "Aug 2023 - Mar 2026",
                    bullets: [
                        "Delivered customer-facing insurance features in Vue.js and Cordova, maintaining a 4.8/5 rating across Google Play and Apple App Store for high-traffic policy servicing flows.",
                        "Led frontend development for digital claims as Scrum Master, engineering multi-step document upload and status tracking flows that achieved a 4.8/5 customer satisfaction score.",
                        "Standardized estimation models and cross-functional QA handoffs, cutting squad scope creep by >50% and improving release consistency.",
                    ],
                },
            ],
        },
        {
            company: "StaffAny",
            roles: [
                {
                    title: "Product Designer",
                    dates: "Jan 2022 - Jun 2023",
                    bullets: [
                        "Designed the 'Learn & Earn' onboarding rewards feature for web and mobile, driving bottom-up product adoption and reaching 48,000+ users within 6 months.",
                        "Built and standardized reusable design system tokens and component primitives across Figma and codebase, reducing cross-functional design-to-engineering handoff friction.",
                        "Conducted rapid usability testing across 30+ retail managers using UMUX-Lite scoring, validating task completion rates before engineering sprints.",
                    ],
                },
            ],
        },
        {
            company: "YSI Southeast Asia (Interseed)",
            roles: [
                {
                    title: "Frontend Developer",
                    dates: "Sep 2020 - Jun 2021",
                    bullets: [
                        "Built responsive web features for the Interseed impact platform using React, TypeScript, and React-Bootstrap, ramping up in 2 weeks to deliver production screens.",
                        "Designed Adobe XD prototypes and translated them into accessible web components for founder profiles, resource hubs, and community matchmaking.",
                        "Collaborated with 3 engineers to deliver a soft launch onboarding 300+ regional startup founders and talent.",
                    ],
                },
            ],
        },
    ] satisfies ResumeExperience[],
    projects: [
        {
            title: "Bobo & Bubba Miles Strategy Hub",
            dates: "Aug 2026",
            description:
                "Interactive credit card rewards engine and merchant MCC routing matrix built with React, TypeScript, Vite, and Antigravity. (bobobubbamiles.vercel.app)",
        },
        {
            title: "Tempusu Bot",
            dates: "Mar 2020 - Dec 2021",
            description:
                "Telegram bot built with Telegraf.js and MySQL allowing NUS students to set custom daily reminders with direct quick-links to log COVID-19 temperature records, reaching 300+ users and groups.",
        },
        {
            title: "Tembusu College Orientation Portal (Launchpad)",
            dates: "May 2020 - Aug 2020",
            description:
                "Designed and developed an interactive orientation website with JS, Bootstrap, and MySQL for 300+ incoming residents, featuring a real-time collaborative pixel canvas (tPlace).",
        },
    ] satisfies ResumeProject[],
    skills: [
        {
            category: "Languages",
            skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/Tailwind"],
        },
        {
            category: "Frameworks & Core",
            skills: ["React", "React Native", "Vue.js (Vue 2/3)", "Node.js"],
        },
        {
            category: "Architecture & Tools",
            skills: [
                "Microfrontends",
                "Design Systems",
                "State Management (Zustand/Query)",
                "Git",
                "CI/CD",
                "Vite",
                "Webpack",
                "Figma",
            ],
        },
    ] satisfies ResumeSkillCategory[],
    education: {
        school: "National University of Singapore",
        dates: "Aug 2019 - May 2023",
        degree: "BSc (Hons) in Communications and New Media, Minor in Interactive Media Development",
        detail: "GPA: 4.97 / 5.00",
        teachingAssistant: {
            role: "Teaching Assistant, UTC2114 Technologies & Ageing in Singapore (Tembusu College)",
            dates: "Aug 2022 - May 2023",
            description:
                "Co-designed and delivered seminar workshops on WCAG-aligned accessible UX design and elderly usability testing with faculty.",
        },
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
