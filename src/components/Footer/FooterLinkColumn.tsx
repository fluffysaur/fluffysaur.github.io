import type { FooterLinkItem } from "./footer-data";
import { Button } from "../Button";

interface FooterLinkColumnProps {
    title: string;
    items: FooterLinkItem[];
}

export function FooterLinkColumn({ title, items }: FooterLinkColumnProps) {
    return (
        <div>
            <h5 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-(--on-surface-subtle)">
                {title}
            </h5>
            <ul className="m-0 list-none space-y-2.5 p-0">
                {items.map((item) => (
                    <li key={item.label}>
                        {item.to ? (
                            <Button to={item.to} variant="text" className="text-sm text-(--on-surface-medium)">
                                {item.label}
                            </Button>
                        ) : item.href ? (
                            <Button
                                href={item.href}
                                {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                                variant="text"
                                className="text-sm text-(--on-surface-medium)"
                            >
                                {item.label}
                            </Button>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}
