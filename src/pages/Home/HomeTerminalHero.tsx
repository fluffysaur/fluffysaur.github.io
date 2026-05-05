import { STACK } from "../../data/projects";

export function HomeTerminalHero() {
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
                        style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.01em", color: "var(--fg-1)" }}
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
