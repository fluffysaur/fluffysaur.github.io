import { SOCIAL_LINKS } from "../../data/social";

export function AboutSocialLinks() {
    return (
        <div>
            <h2 className="mb-4 font-light" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--fg-1)" }}>
                Find me <strong>elsewhere</strong>
            </h2>
            <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href, external }) => (
                    <a
                        key={label}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center gap-2.5 rounded-full border px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] no-underline transition-all hover:border-accent hover:text-accent"
                        style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                    >
                        {label} {"->"}
                    </a>
                ))}
            </div>
        </div>
    );
}
