import { STACK } from "../../data/projects";
import { TerminalWindow } from "../TerminalWindow";
import { CTAButton } from "../CTAButton";

const LINE_STEP_MS = 250;
const lineDelay = (i: number) => ({ animationDelay: `${i * LINE_STEP_MS}ms` });

export function HomeTerminalHero() {
    return (
        <section className="pb-16 pt-12">
            <div className="page-wrap">
                <TerminalWindow className="max-w-3xl">
                    <div className="terminal-line" style={{ ...lineDelay(0), color: "var(--term-cmd)" }}>
                        $ whoami
                    </div>
                    <div className="terminal-line mb-3" style={{ ...lineDelay(1), color: "var(--term-output)" }}>
                        tan-yi-jia
                    </div>

                    <div className="terminal-line" style={{ ...lineDelay(2), color: "var(--term-cmd)" }}>
                        $ cat about.md
                    </div>
                    <div className="terminal-line mb-3" style={{ ...lineDelay(3), color: "var(--term-output)" }}>
                        I'm a <span className="text-accent">frontend software engineer</span> in Singapore.
                        <br />I love shipping stuff with <span className="text-accent">intention</span> and{" "}
                        <span className="text-accent">detail</span>,
                        <br />
                        telling a <span className="text-accent">story</span> through each interaction.
                    </div>

                    <div className="terminal-line" style={{ ...lineDelay(4), color: "var(--term-cmd)" }}>
                        $ ls --skills
                    </div>
                    <div
                        className="terminal-line mb-3 flex flex-wrap gap-x-6 gap-y-1"
                        style={{ ...lineDelay(5), color: "var(--term-muted)" }}
                    >
                        {STACK.map((s) => (
                            <span key={s}>{s.toLowerCase().replace(".js", "-js")}</span>
                        ))}
                    </div>

                    <div className="terminal-line" style={{ ...lineDelay(6), color: "var(--term-cmd)" }}>
                        $ status
                    </div>
                    <div className="terminal-line" style={{ ...lineDelay(7), color: "var(--color-green-400)" }}>
                        ● available · looking for work
                    </div>

                    <div
                        className="terminal-line mt-3 flex items-center gap-0"
                        style={{ ...lineDelay(8), color: "var(--term-cmd)" }}
                    >
                        <span>$ </span>
                        <span className="ml-1 inline-block w-2 h-4 cursor-blink" style={{ background: "#f2cb05" }} />
                    </div>
                </TerminalWindow>

                <div className="mt-14 max-w-3xl">
                    <h1
                        className="font-light leading-tight"
                        style={{
                            fontSize: "clamp(32px, 5.5vw, 64px)",
                            letterSpacing: "-0.01em",
                            color: "var(--fg-1)",
                        }}
                    >
                        Crafting <strong>delight</strong> into every <strong>pixel</strong>.
                    </h1>
                    <div className="flex flex-wrap gap-3 mt-8">
                        <CTAButton href="/projects" variant="primary">
                            cd ./projects →
                        </CTAButton>
                        <CTAButton href="https://github.com/fluffysaur" target="_blank" rel="noopener">
                            ↗ github.com/fluffysaur
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
