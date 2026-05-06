import { Link } from "react-router-dom";
import { TagRow } from "./Tag";
import type { Project } from "../types";

interface FileCardProps {
    project: Project;
    large?: boolean;
}

export function FileCard({ project: p, large }: FileCardProps) {
    const extension = p.cat === "film" ? "mov" : "tsx";

    const inner = (
        <div
            className="block text-inherit no-underline rounded-lg overflow-hidden border transition-all duration-250 group"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-mid)" }}
        >
            {/* File header bar */}
            <div
                className="flex items-center justify-between px-3.5 py-2 border-b font-mono text-[11px]"
                style={{ background: "var(--bg-card-header)", borderColor: "var(--border-sub)", color: "var(--fg-5)" }}
            >
                <span>
                    {p.id}.{extension}
                </span>
                <span style={{ color: p.live ? "#6ee07a" : "var(--fg-7)" }}>● {p.live ? "live" : "archived"}</span>
            </div>

            {/* Thumbnail */}
            <div className={`overflow-hidden bg-slate-card ${large ? "aspect-video" : "aspect-16/10"}`}>
                <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Body */}
            <div className="p-5">
                <div className="font-mono text-[11px] mb-1.5" style={{ color: "var(--fg-6)" }}>
                    const project = {"{"}
                </div>
                <div className="pl-4">
                    <div className="text-[11px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "var(--fg-5)" }}>
                        {p.role} · {p.year}
                    </div>
                    <h3 className="font-light mb-2" style={{ fontSize: large ? 28 : 20, color: "var(--fg-1)" }}>
                        {p.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed mb-3.5" style={{ color: "var(--fg-4)" }}>
                        {p.blurb}
                    </p>
                    <TagRow tags={p.tags.slice(0, 4)} />
                </div>
                <div className="font-mono text-[11px] mt-2" style={{ color: "var(--fg-6)" }}>
                    {"}"}
                </div>

                {p.hasCase && (
                    <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-accent">Read case study →</div>
                )}
                {p.youtubeUrl && (
                    <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-accent">Watch film →</div>
                )}
            </div>
        </div>
    );

    if (p.youtubeUrl || p.hasCase) {
        return (
            <Link
                to={`/projects/${p.id}`}
                className="block no-underline text-inherit"
                style={{ textDecoration: "none" }}
            >
                {inner}
            </Link>
        );
    }

    return <div>{inner}</div>;
}
