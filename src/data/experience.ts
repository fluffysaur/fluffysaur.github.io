import type { Experience, ExperienceDate } from "../types";

export const RESUME_URL = "/assets/documents/TanYiJia-Resume.pdf";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function endDateValue(endDate: Experience["endDate"]): number {
    if (endDate === "now") {
        return Number.POSITIVE_INFINITY;
    }

    return endDate.year * 100 + endDate.month;
}

function compareExperienceDesc(a: Experience, b: Experience): number {
    const byEndDate = endDateValue(b.endDate) - endDateValue(a.endDate);
    if (byEndDate !== 0) {
        return byEndDate;
    }

    const byStartDate = b.startDate.year * 100 + b.startDate.month - (a.startDate.year * 100 + a.startDate.month);
    if (byStartDate !== 0) {
        return byStartDate;
    }

    return a.title.localeCompare(b.title);
}

export function formatExperienceDate(date: ExperienceDate): string {
    return `${MONTHS[date.month - 1]} ${date.year}`;
}

export function formatExperienceRange(experience: Experience): string {
    const start = formatExperienceDate(experience.startDate);
    const end = experience.endDate === "now" ? "Now" : formatExperienceDate(experience.endDate);
    return `${start} - ${end}`;
}

const EXPERIENCE_ENTRIES: Experience[] = [
    {
        id: "great-eastern-software-engineer",
        title: "Frontend Software Engineer",
        company: "Great Eastern",
        role: "Mobile App Transformation",
        startDate: { month: 3, year: 2026 },
        endDate: "now",
        description:
            "Leading the progressive migration from Cordova + Vue to React Native. Revamped microfrontend architecture to support multiple countries.",
        stack: ["React Native", "TypeScript", "Cordova", "Vue"],
        highlight: true,
    },
    {
        id: "great-eastern-associate-software-engineer",
        title: "Associate Frontend Software Engineer",
        company: "Great Eastern",
        role: "Mobile App Delivery",
        startDate: { month: 8, year: 2023 },
        endDate: { month: 3, year: 2026 },
        description:
            "Shipped customer-facing insurance app features on Cordova + Vue, improved release quality, and supported high-satisfaction claims and service journeys.",
        stack: ["Cordova", "Vue", "JavaScript"],
        highlight: true,
    },
    {
        id: "staffany-product-designer",
        title: "Product Designer",
        company: "StaffAny",
        role: "Growth and Design System",
        startDate: { month: 1, year: 2022 },
        endDate: { month: 6, year: 2023 },
        description:
            "Owned product design for growth initiatives across research, prototyping, testing, and release. Revamped the design system for the design team for consistency and reusability.",
        stack: ["Figma", "Design Systems", "User Research"],
        highlight: true,
    },
    {
        id: "interseed-frontend-developer",
        title: "Frontend Developer",
        company: "YSI SEA / Interseed",
        role: "Web Platform",
        startDate: { month: 6, year: 2020 },
        endDate: { month: 3, year: 2021 },
        description:
            "Built and iterated on the Interseed MERN platform, helping the team deliver a soft launch and stabilize onboarding and core workflows.",
        stack: ["React", "Node.js", "Figma"],
        highlight: true,
    },
    {
        id: "earth-school-web-designer-developer",
        title: "Web Designer & Developer",
        company: "Earth School Singapore",
        role: "Website",
        startDate: { month: 1, year: 2020 },
        endDate: { month: 5, year: 2020 },
        description:
            "Designed and developed marketing and information pages with a focus on clear storytelling and maintainable content updates.",
        stack: ["HTML", "CSS", "Node.js"],
        highlight: false,
    },
    {
        id: "stardust-production-assistant",
        title: "Production Assistant",
        company: "Stardust Story",
        role: "Film Production",
        startDate: { month: 1, year: 2019 },
        endDate: { month: 12, year: 2019 },
        description:
            "Supported production operations on Mixed Signals, coordinating set logistics and execution details across shooting days.",
        stack: ["Film Production", "Logistics"],
        highlight: false,
    },
];

export const EXPERIENCES = [...EXPERIENCE_ENTRIES].sort(compareExperienceDesc);

export const HIGHLIGHTED_EXPERIENCES = EXPERIENCES.filter((experience) => experience.highlight);
export const LATEST_HIGHLIGHTED_EXPERIENCE = HIGHLIGHTED_EXPERIENCES[0] ?? EXPERIENCES[0];
