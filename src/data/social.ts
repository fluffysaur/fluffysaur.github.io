export interface SocialEntry {
    label: string;
    href: string;
    external: boolean;
    kind: "social" | "utility";
    icon: "github" | "linkedin" | "vimeo" | "youtube" | "email" | "resume" | "repo";
}

export const SOCIAL_LINKS: SocialEntry[] = [
    { label: "GitHub", href: "https://github.com/fluffysaur", external: true, kind: "social", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tanyijiasg", external: true, kind: "social", icon: "linkedin" },
    { label: "Vimeo", href: "https://vimeo.com/tanyijia", external: true, kind: "social", icon: "vimeo" },
    { label: "YouTube", href: "https://www.youtube.com/tanyijia", external: true, kind: "social", icon: "youtube" },
];

export const UTILITY_LINKS: SocialEntry[] = [
    { label: "Email", href: "mailto:tanyijia@gmail.com", external: false, kind: "utility", icon: "email" },
    { label: "Resume", href: "/legacy/assets/TanYiJia-Resume.pdf", external: true, kind: "utility", icon: "resume" },
    {
        label: "Portfolio Repo",
        href: "https://github.com/fluffysaur/fluffysaur.github.io",
        external: true,
        kind: "utility",
        icon: "repo",
    },
];

export const EXTENSION_LINKS: SocialEntry[] = [...SOCIAL_LINKS, ...UTILITY_LINKS];
