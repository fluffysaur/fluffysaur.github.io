import { Footer } from "../Footer";
import { TagRow } from "../Tag";
import type { Project } from "../../types";
import { CaseBackLink } from "./CaseBackLink";

function extractYouTubeId(url: string): string | null {
    try {
        return new URL(url).searchParams.get("v");
    } catch {
        return null;
    }
}

export function Video({ project: p }: { project: Project }) {
    const videoId = p.youtubeUrl ? extractYouTubeId(p.youtubeUrl) : null;

    return (
        <>
            <article className="py-14 pb-24">
                <div className="page-wrap">
                    <CaseBackLink />

                    <div className="mt-10 mb-8">
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-(--on-surface-muted)">
                            {p.role} · {p.year}
                        </p>
                        <h1
                            className="font-light text-(--on-surface)"
                            style={{
                                fontSize: "clamp(28px, 5vw, 52px)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {p.title}
                        </h1>
                    </div>

                    {videoId && (
                        <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg border border-(--outline-variant)">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={p.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    )}

                    <p className="mb-6 max-w-[72ch] text-[16px] leading-relaxed text-(--on-surface-medium)">
                        {p.blurb}
                    </p>

                    <TagRow tags={p.tags} />
                </div>
            </article>
            <Footer />
        </>
    );
}
