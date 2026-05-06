export interface FooterLinkItem {
    label: string;
    to?: string;
    href?: string;
    external?: boolean;
}

export const FOOTER_SITEMAP: FooterLinkItem[] = [
    { label: "Home", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
];

export const FOOTER_ELSEWHERE: FooterLinkItem[] = [
    { label: "GitHub", href: "https://github.com/fluffysaur", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/tanyijiasg", external: true },
    { label: "Vimeo", href: "https://vimeo.com/tanyijia", external: true },
    { label: "YouTube", href: "https://www.youtube.com/tanyijia", external: true },
];

export const FOOTER_CONTACT: FooterLinkItem[] = [{ label: "tanyijia@gmail.com", href: "mailto:tanyijia@gmail.com" }];
