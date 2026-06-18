export type ProjectCat = "dev" | "film";

export interface Project {
    id: string;
    title: string;
    blurb: string;
    img: string;
    role: string;
    year: string;
    tags: string[];
    cat: ProjectCat;
    highlight: boolean;
    live: boolean;
    hasCase?: boolean;
    repoUrl?: string;
    liveUrl?: string;
    youtubeUrl?: string;
}

export interface ExperienceDate {
    month: number;
    year: number;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    role: string;
    startDate: ExperienceDate;
    endDate: ExperienceDate | "now";
    description: string;
    stack: string[];
    highlight: boolean;
}

export interface Testimonial {
    img: string;
    quote: string;
    author: string;
    role: string;
    companyUrl?: string;
}
