import type { ReactNode } from "react";

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export function TerminalWindow({ title = "~/tanyijia — zsh", children, className = "" }: TerminalWindowProps) {
    return (
        <div
            className={`terminal-window rounded-xl overflow-hidden relative ${className}`}
            style={{
                background: "var(--term-bg)",
                border: "1px solid var(--term-border)",
                boxShadow: "var(--term-shadow)",
            }}
        >
            <div
                className="flex items-center gap-2 px-3.5 py-2.5 border-b"
                style={{ background: "var(--term-titlebar-bg)", borderColor: "var(--term-titlebar-border)" }}
            >
                <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                <span className="ml-4 font-mono text-[12px]" style={{ color: "var(--term-path)" }}>
                    {title}
                </span>
            </div>
            <div className="p-7 font-mono text-[14px] leading-[1.8]">{children}</div>
        </div>
    );
}
