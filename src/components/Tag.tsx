interface TagProps {
    children: React.ReactNode;
    accent?: boolean;
    ghost?: boolean;
}

export function Tag({ children, accent, ghost }: TagProps) {
    const base = "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] tracking-wide";
    if (accent) return <span className={`${base} bg-accent text-graphite font-medium font-mono`}>{children}</span>;
    if (ghost) return <span className={`${base} border border-white/14 text-white/70 font-mono`}>{children}</span>;
    return <span className={`${base} bg-white/6 text-white/70 font-mono`}>{children}</span>;
}

export function TagRow({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
            ))}
        </div>
    );
}
