import { Footer } from "../../components/Footer";
import { TagRow } from "../../components/Tag";
import type { Project } from "../../types";
import { CaseBackLink } from "./CaseBackLink";

function extractYouTubeId(url: string): string | null {
    try {
        return new URL(url).searchParams.get("v");
    } catch {
        return null;
    }
}

export function VideoDetailPage({ project: p }: { project: Project }) {
    const videoId = p.youtubeUrl ? extractYouTubeId(p.youtubeUrl) : null;

    return (
        <>
            <article className="py-14 pb-24">
                <div className="mx-auto max-w-220 px-8">
                    <CaseBackLink />

                    <div className="mt-10 mb-8">
                        <p
                            className="text-[11px] tracking-[0.2em] uppercase font-medium mb-2"
                            style={{ color: "var(--fg-5)" }}
                        >
                            {p.role} · {p.year}
                        </p>
                        <h1
                            className="font-light"
                            style={{
                                fontSize: "clamp(28px, 5vw, 52px)",
                                letterSpacing: "-0.01em",
                                color: "var(--fg-1)",
                            }}
                        >
                            {p.title}
                        </h1>
                    </div>

                    {videoId && (
                        <div
                            className="w-full aspect-video rounded-lg overflow-hidden mb-8 border"
                            style={{ borderColor: "var(--border-mid)" }}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={p.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    )}

                    <p
                        className="text-[16px] leading-relaxed mb-6"
                        style={{ color: "var(--fg-3)", maxWidth: "72ch" }}
                    >
                        {p.blurb}
                    </p>

                    <TagRow tags={p.tags} />
                </div>
            </article>
            <Footer />
        </>
    );
}
