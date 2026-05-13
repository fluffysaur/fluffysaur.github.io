import type { ReactNode } from "react";

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export function TerminalWindow({ title = "~/tanyijia — zsh", children, className = "" }: TerminalWindowProps) {
    return (
        <div
            className={`terminal-window relative overflow-hidden rounded-xl border border-(--term-border) bg-(--term-bg) ${className}`}
            style={{
                boxShadow: "var(--term-shadow)",
            }}
        >
            <div className="flex items-center gap-2 border-b border-(--term-titlebar-border) bg-(--term-titlebar-bg) px-3.5 py-2.5">
                <span className="w-3 h-3 rounded-full bg-(--color-error)" />
                <span className="w-3 h-3 rounded-full bg-(--color-warning)" />
                <span className="w-3 h-3 rounded-full bg-(--color-success)" />
                <span className="ml-4 font-mono text-[12px] text-(--term-path)">{title}</span>
            </div>
            <div className="p-7 font-mono text-[14px] leading-[1.8]">{children}</div>
        </div>
    );
}
