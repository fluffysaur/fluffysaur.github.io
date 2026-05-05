export function FooterMeta() {
    return (
        <div
            className="flex flex-wrap items-center justify-between gap-y-1 border-t pt-6 text-[13px]"
            style={{ borderColor: "var(--border-sub)", color: "var(--fg-6)" }}
        >
            <span>© {new Date().getFullYear()} Tan Yi Jia · Singapore 🇸🇬</span>
            <span className="font-mono text-[12px]">Built with React + a lot of ☕</span>
        </div>
    );
}
