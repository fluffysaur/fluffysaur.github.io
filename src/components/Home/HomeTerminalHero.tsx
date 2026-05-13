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
                    <div className="terminal-line text-(--term-cmd)" style={lineDelay(0)}>
                        $ whoami
                    </div>
                    <div className="terminal-line mb-3 text-(--term-output)" style={lineDelay(1)}>
                        tan-yi-jia
                    </div>

                    <div className="terminal-line text-(--term-cmd)" style={lineDelay(2)}>
                        $ cat about.md
                    </div>
                    <div className="terminal-line mb-3 text-(--term-output)" style={lineDelay(3)}>
                        I'm a <span className="text-primary">frontend software engineer</span> in Singapore.
                        <br />I love shipping stuff with <span className="text-primary">intention</span> and{" "}
                        <span className="text-primary">detail</span>,
                        <br />
                        telling a <span className="text-primary">story</span> through each interaction.
                    </div>

                    <div className="terminal-line text-(--term-cmd)" style={lineDelay(4)}>
                        $ ls --skills
                    </div>
                    <div
                        className="terminal-line mb-3 flex flex-wrap gap-x-6 gap-y-1 text-(--term-muted)"
                        style={lineDelay(5)}
                    >
                        {STACK.map((s) => (
                            <span key={s}>{s.toLowerCase().replace(".js", "-js")}</span>
                        ))}
                    </div>

                    <div className="terminal-line text-(--term-cmd)" style={lineDelay(6)}>
                        $ status
                    </div>
                    <div className="terminal-line text-green-400" style={lineDelay(7)}>
                        ● available · looking for work
                    </div>

                    <div className="terminal-line mt-3 flex items-center gap-0 text-(--term-cmd)" style={lineDelay(8)}>
                        <span>$ </span>
                        <span className="ml-1 inline-block w-2 h-4 cursor-blink bg-primary" />
                    </div>
                </TerminalWindow>

                <div className="mt-14 max-w-3xl">
                    <h1
                        className="font-light leading-tight tracking-[-0.01em] text-(--on-surface)"
                        style={{
                            fontSize: "clamp(32px, 5.5vw, 64px)",
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
