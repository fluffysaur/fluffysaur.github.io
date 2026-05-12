type FileCardStatus = "live" | "archived" | "wip";

interface FileCardHeaderProps {
    filename: string;
    status: FileCardStatus;
}

const STATUS_COLOR: Record<FileCardStatus, string> = {
    live: "#6ee07a",
    archived: "var(--fg-7)",
    wip: "#febc2e",
};

export function FileCardHeader({ filename, status }: FileCardHeaderProps) {
    return (
        <div
            className="flex items-center justify-between px-3.5 py-2 border-b font-mono text-[11px]"
            style={{ background: "var(--bg-card-header)", borderColor: "var(--border-sub)", color: "var(--fg-5)" }}
        >
            <span>{filename}</span>
            <span style={{ color: STATUS_COLOR[status] }}>● {status}</span>
        </div>
    );
}
