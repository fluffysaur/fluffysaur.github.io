interface TagProps {
    children: React.ReactNode;
    primary?: boolean;
    ghost?: boolean;
}

export function Tag({ children, primary, ghost }: TagProps) {
    const base = "tag-base inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] tracking-wide";
    if (primary) return <span className={`${base} bg-primary text-tertiary font-medium font-mono`}>{children}</span>;
    if (ghost)
        return (
            <span className={`${base} border border-white/14 text-white/70 font-mono hover:text-white/90`}>
                {children}
            </span>
        );
    return (
        <span className={`${base} bg-white/6 text-white/70 font-mono hover:bg-white/12 hover:text-white/90`}>
            {children}
        </span>
    );
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
