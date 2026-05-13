type FileCardStatus = "live" | "archived" | "wip";

interface FileCardHeaderProps {
    filename: string;
    status: FileCardStatus;
}

const STATUS_COLOR: Record<FileCardStatus, string> = {
    live: "var(--color-success)",
    archived: "var(--on-surface-faint)",
    wip: "var(--color-warning)",
};

export function FileCardHeader({ filename, status }: FileCardHeaderProps) {
    return (
        <div className="flex items-center justify-between border-b border-(--outline-subtle) bg-(--surface-container-high) px-3.5 py-2 font-mono text-[11px] text-(--on-surface-muted)">
            <span>{filename}</span>
            <span style={{ color: STATUS_COLOR[status] }}>● {status}</span>
        </div>
    );
}
