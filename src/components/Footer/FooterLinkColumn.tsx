import { Link } from "react-router-dom";
import type { FooterLinkItem } from "./footer-data";

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
                            <Link
                                to={item.to}
                                className="text-sm text-(--on-surface-medium) no-underline transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a
                                href={item.href}
                                {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                                className="text-sm text-(--on-surface-medium) no-underline transition-colors hover:text-primary"
                            >
                                {item.label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
