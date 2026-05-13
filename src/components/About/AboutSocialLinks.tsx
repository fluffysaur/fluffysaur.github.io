import { SOCIAL_LINKS } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AboutSocialLinks() {
    return (
        <div>
            <h2 className="mb-4 font-light text-(--on-surface)" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
                Find me <strong>elsewhere</strong>
            </h2>
            <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href, external, icon }) => (
                    <a
                        key={label}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="inline-flex items-center gap-2.5 rounded-full border border-(--outline) px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-(--on-surface-high) no-underline transition-all hover:border-primary hover:text-primary"
                    >
                        <FontAwesomeIcon icon={icon} className="mr-2" />
                        {label} {"→"}
                    </a>
                ))}
            </div>
        </div>
    );
}
