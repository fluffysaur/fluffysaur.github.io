import { SOCIAL_LINKS } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button";

export function AboutSocialLinks() {
    return (
        <div>
            <h2 className="mb-4 font-light text-(--on-surface)" style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}>
                Find me <strong>elsewhere</strong>
            </h2>
            <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href, external, icon }) => (
                    <Button
                        key={label}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                        <FontAwesomeIcon icon={icon} className="mr-2" />
                        {label} {"→"}
                    </Button>
                ))}
            </div>
        </div>
    );
}
