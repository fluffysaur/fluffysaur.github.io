import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EXTENSION_LINKS } from "../../data/social";
import { Button } from "../Button";

export function ActivityBarExtensionsPanel() {
    return (
        <div className="space-y-2">
            {EXTENSION_LINKS.map((item) => {
                return (
                    <Button
                        key={item.label}
                        href={item.href}
                        variant="text"
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center justify-between gap-3 rounded border px-3 py-2.5 text-[12px] text-(--on-surface-high) no-underline transition-colors hover:text-primary"
                        style={{
                            borderColor: "var(--outline-subtle)",
                            background: "var(--surface-container-low)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={item.icon} className="text-[14px]" />
                            <span className="font-mono">{item.label}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.12em] text-(--on-surface-subtle) transition-colors group-hover:text-primary">
                            {item.kind}
                        </span>
                    </Button>
                );
            })}
        </div>
    );
}
