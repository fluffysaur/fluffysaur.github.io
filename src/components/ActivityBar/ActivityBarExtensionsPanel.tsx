import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EXTENSION_LINKS } from "../../data/social";

export function ActivityBarExtensionsPanel() {
    return (
        <div className="space-y-2">
            {EXTENSION_LINKS.map((item) => {
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center justify-between gap-3 px-3 py-2.5 rounded border text-[12px] no-underline transition-colors hover:text-primary"
                        style={{
                            borderColor: "var(--outline-subtle)",
                            background: "var(--surface-container-low)",
                            color: "var(--on-surface-high)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={item.icon} className="text-[14px]" />
                            <span className="font-mono">{item.label}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.12em] text-(--on-surface-subtle)">
                            {item.kind}
                        </span>
                    </a>
                );
            })}
        </div>
    );
}
