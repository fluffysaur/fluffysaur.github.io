import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";

export interface SocialEntry {
    label: string;
    href: string;
    external: boolean;
    kind: "social" | "utility";
    icon: IconDefinition;
}

export const SOCIAL_LINKS: SocialEntry[] = [
    {
        label: "GitHub",
        icon: faGithub,
        href: "https://github.com/fluffysaur",
        external: true,
        kind: "social",
    },
    {
        label: "LinkedIn",
        icon: faLinkedinIn,
        href: "https://linkedin.com/in/tanyijiasg",
        external: true,
        kind: "social",
    },
    {
        label: "YouTube",
        icon: faYoutube,
        href: "https://www.youtube.com/tanyijia",
        external: true,
        kind: "social",
    },
];

export const UTILITY_LINKS: SocialEntry[] = [
    { label: "Email", href: "mailto:tanyijia@gmail.com", external: false, kind: "utility", icon: faEnvelope },
    { label: "Resume", href: "/assets/TanYiJia-Resume.pdf", external: true, kind: "utility", icon: faFileLines },
    {
        label: "Portfolio Repo",
        href: "https://github.com/fluffysaur/fluffysaur.github.io",
        external: true,
        kind: "utility",
        icon: faArrowUpRightFromSquare,
    },
];

export const EXTENSION_LINKS: SocialEntry[] = [...SOCIAL_LINKS, ...UTILITY_LINKS];
