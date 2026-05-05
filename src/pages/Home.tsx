import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import { FileCard } from "../components/FileCard";
import { Tag } from "../components/Tag";
import { PROJECTS, STACK } from "../data/projects";
import { TESTIMONIALS } from "../data/testimonials";

function TerminalHero() {
    return (
        <section className="pb-16 pt-12">
            <div className="max-w-285 mx-auto px-5 md:px-16">
            {/* macOS terminal window */}
            <div
                className="rounded-xl overflow-hidden max-w-3xl"
                style={{
                    background: "var(--term-bg)",
                    border: "1px solid var(--term-border)",
                    boxShadow: "var(--term-shadow)",
                }}
            >
                {/* Title bar */}
                <div
                    className="flex items-center gap-2 px-3.5 py-2.5 border-b"
                    style={{ background: "var(--term-titlebar-bg)", borderColor: "var(--term-titlebar-border)" }}
                >
                    <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: "#ff5f57" }}
                    />
                    <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: "#febc2e" }}
                    />
                    <span
                        className="w-3 h-3 rounded-full"
                        style={{ background: "#28c840" }}
                    />
                    <span
                        className="ml-4 font-mono text-[12px]"
                        style={{ color: "var(--term-path)" }}
                    >
                        ~/tanyijia — zsh
                    </span>
                </div>

                {/* Terminal body */}
                <div className="p-7 font-mono text-[14px] leading-[1.8]">
                    <div style={{ color: "var(--term-cmd)" }}>$ whoami</div>
                    <div
                        className="mb-3"
                        style={{ color: "var(--term-output)" }}
                    >
                        tan-yi-jia
                    </div>

                    <div style={{ color: "var(--term-cmd)" }}>$ cat about.md</div>
                    <div
                        className="mb-3"
                        style={{ color: "var(--term-output)" }}
                    >
                        Hi! I'm <span className="text-accent">Tan Yi Jia</span>. A software engineer in Singapore
                        <br />
                        who came up through UX design and filmmaking.
                        <br />I build well-crafted interfaces that pay attention to the small things.
                    </div>

                    <div style={{ color: "var(--term-cmd)" }}>$ ls --skills</div>
                    <div
                        className="mb-3 flex flex-wrap gap-x-6 gap-y-1"
                        style={{ color: "var(--term-muted)" }}
                    >
                        {STACK.map((s) => (
                            <span key={s}>{s.toLowerCase().replace(".js", "-js")}</span>
                        ))}
                    </div>

                    <div style={{ color: "var(--term-cmd)" }}>$ status</div>
                    <div style={{ color: "#6ee07a" }}>● available · taking new projects</div>

                    <div
                        className="mt-3 flex items-center gap-0"
                        style={{ color: "var(--term-cmd)" }}
                    >
                        <span>$ </span>
                        <span
                            className="ml-1 inline-block w-2 h-4 cursor-blink"
                            style={{ background: "#f2cb05" }}
                        />
                    </div>
                </div>
            </div>

            {/* Below-terminal headline */}
            <div className="mt-14 max-w-3xl">
                <h1
                    className="font-light leading-tight"
                    style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', letterSpacing: "-0.01em", color: "var(--fg-1)" }}
                >
                    Engineering <strong>delight</strong> into
                    <br />
                    every <strong>pixel</strong>.
                </h1>
                <div className="flex flex-wrap gap-3 mt-8">
                    <a
                        href="/work"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-graphite text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:bg-accent-deep"
                    >
                        cd ./work →
                    </a>
                    <a
                        href="https://github.com/fluffysaur"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:border-accent hover:text-accent"
                        style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                    >
                        ↗ github.com/fluffysaur
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
}

function FilesGrid() {
    const featured = PROJECTS.filter((p) => p.type !== "film").slice(0, 4);
    return (
        <section className="pb-24">
            <div className="max-w-285 mx-auto px-5 md:px-16">
                <div className="flex items-baseline gap-3 mb-2">
                    <span
                        className="font-mono text-sm"
                        style={{ color: "var(--fg-7)" }}
                    >
                        ~/portfolio/
                    </span>
                </div>
                <h2
                    className="font-light mb-2"
                    style={{ fontSize: 36, color: "var(--fg-1)" }}
                >
                    Selected <strong>work</strong>
                </h2>
                <p
                    className="font-mono text-sm mb-10"
                    style={{ color: "var(--fg-5)" }}
                >
                    // {featured.length} files · work + personal. Click any to open the case study.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {featured.map((p) => (
                        <FileCard
                            key={p.id}
                            project={p}
                        />
                    ))}
                </div>
                <div className="mt-10">
                    <a
                        href="/work"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:border-accent hover:text-accent"
                        style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                    >
                        View all projects →
                    </a>
                </div>
            </div>
        </section>
    );
}

function TestimonialStrip() {
    return (
        <section className="py-24" style={{ background: "var(--bg-card)" }}>
            <div className="max-w-285 mx-auto px-5 md:px-16">
                <p
                    className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-3"
                    style={{ color: "var(--fg-6)" }}
                >
                    <span className="inline-block w-6 h-px bg-accent" />
                    Kind words
                </p>
                <h2
                    className="font-light mb-14"
                    style={{ fontSize: 'clamp(28px, 4.5vw, 48px)', color: "var(--fg-1)" }}
                >
                    From people I've <strong>worked with</strong>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <figure
                            key={i}
                            className="m-0 p-7 rounded-lg"
                            style={{ background: "var(--bg-elevated)" }}
                        >
                            <p
                                className="text-[16px] font-light leading-relaxed italic m-0"
                                style={{ color: "var(--fg-3)" }}
                            >
                                "{t.quote}"
                            </p>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <img
                                    src={t.img}
                                    alt={t.author}
                                    className="w-11 h-11 rounded-full object-cover"
                                />
                                <div>
                                    <div
                                        className="text-sm"
                                        style={{ color: "var(--fg-1)" }}
                                    >
                                        {t.author}
                                    </div>
                                    <div
                                        className="text-[12px]"
                                        style={{ color: "var(--fg-5)" }}
                                    >
                                        {t.role}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StackStrip() {
    return (
        <div
            className="max-w-285 mx-auto flex items-center gap-6 flex-wrap px-5 md:px-16 pb-12"
        >
            <div
                className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium"
                style={{ color: "var(--fg-6)" }}
            >
                <span className="inline-block w-6 h-px bg-accent" />
                Currently working with
            </div>
            <div className="flex gap-2 flex-wrap">
                {STACK.map((s) => (
                    <Tag key={s}>{s}</Tag>
                ))}
            </div>
        </div>
    );
}

export function Home() {
    return (
        <>
            <TerminalHero />
            <StackStrip />
            <FilesGrid />
            <TestimonialStrip />
            <CTABlock />
            <Footer />
        </>
    );
}
