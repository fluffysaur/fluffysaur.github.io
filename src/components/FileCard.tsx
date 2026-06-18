import { Link } from "react-router-dom";
import { TagRow } from "./Tag";
import { FileCardHeader } from "./FileCardHeader";
import type { Project } from "../types";

interface FileCardProps {
    project: Project;
    large?: boolean;
}

export function FileCard({ project: p, large }: FileCardProps) {
    const extension = p.cat === "film" ? "mov" : "tsx";
    const isInternalLink = p.link?.startsWith("/");
    const isCaseStudyLink = p.link?.startsWith("/projects/");

    const inner = (
        <div className="file-card block text-inherit no-underline rounded-lg overflow-hidden border group">
            <FileCardHeader filename={`${p.id}.${extension}`} status={p.live ? "live" : "archived"} />

            <div className={`overflow-hidden bg-secondary ${large ? "aspect-video" : "aspect-16/10"}`}>
                <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <div className="font-mono text-[11px] mb-1.5 text-(--on-surface-subtle)">const project = {"{"}</div>
                <div className="pl-4">
                    <div className="text-[11px] tracking-[0.2em] uppercase mb-1.5 text-(--on-surface-muted)">
                        {p.role} · {p.year}
                    </div>
                    <h3 className="mb-2 font-light text-(--on-surface)" style={{ fontSize: large ? 28 : 20 }}>
                        {p.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed mb-3.5 text-(--on-surface-variant)">{p.blurb}</p>
                    <TagRow tags={p.tags.slice(0, 4)} />
                </div>
                <div className="font-mono text-[11px] mt-2 text-(--on-surface-subtle)">{"}"}</div>

                {isCaseStudyLink && (
                    <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-primary">Read case study →</div>
                )}
                {p.link && !isCaseStudyLink && (
                    <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-primary">View project →</div>
                )}
                {p.youtubeUrl && (
                    <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-primary">Watch film →</div>
                )}
            </div>
        </div>
    );

    if (p.link && isInternalLink) {
        return (
            <Link to={p.link} className="block no-underline text-inherit">
                {inner}
            </Link>
        );
    }

    if (p.link) {
        return (
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="block no-underline text-inherit">
                {inner}
            </a>
        );
    }

    if (p.youtubeUrl) {
        return (
            <Link to={`/projects/${p.id}`} className="block no-underline text-inherit">
                {inner}
            </Link>
        );
    }

    return <div>{inner}</div>;
}
