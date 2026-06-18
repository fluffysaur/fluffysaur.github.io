import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "../../data/social";
import { Button } from "../Button";

export function HomeSocialLinks() {
    return (
        <div className="mt-8 flex flex-wrap gap-3">
            {SOCIAL_LINKS.map(({ label, href, external, icon }) => (
                <Button
                    key={label}
                    href={href}
                    variant="icon"
                    size="md"
                    title={label}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                    <FontAwesomeIcon icon={icon} className="text-[15px]" />
                </Button>
            ))}
        </div>
    );
}
