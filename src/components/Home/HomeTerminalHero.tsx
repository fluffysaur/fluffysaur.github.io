import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { STACK } from "../../data/projects";
import { TerminalWindow } from "../TerminalWindow";
import { Button } from "../Button";

const TYPE_SPEED_MS = 45;
const COMMAND_SETTLE_MS = 260;
const OUTPUT_SETTLE_MS = 600;
const TERMINAL_FADE_MS = 450;

let hasPlayedHomeTerminalIntro = false;

interface TerminalStep {
    command: string;
    output: ReactNode;
    outputClassName: string;
}

interface HomeTerminalHeroProps {
    introComplete: boolean;
    onIntroComplete: () => void;
}

const TERMINAL_STEPS: TerminalStep[] = [
    {
        command: "$ whoami",
        output: (
            <>
                Tan Yi Jia
                <br />
                I&apos;m a <span className="text-primary">frontend software engineer</span> in Singapore.
                <br />I love building <span className="text-primary">functional</span> and{" "}
                <span className="text-primary">delightful</span> interfaces.
            </>
        ),
        outputClassName: "mb-3 text-(--term-output)",
    },
    {
        command: "$ ls --skills",
        output: (
            <>
                {STACK.map((s) => (
                    <span key={s}>{s.toLowerCase().replace(".js", "-js")}</span>
                ))}
            </>
        ),
        outputClassName: "mb-3 flex flex-wrap gap-x-6 gap-y-1 text-(--term-muted)",
    },
    {
        command: "$ status",
        output: <>● available · looking for work</>,
        outputClassName: "text-green-400",
    },
];

const FINAL_COMMANDS = TERMINAL_STEPS.map((step) => step.command);
const FINAL_OUTPUT_VISIBILITY = TERMINAL_STEPS.map(() => true);

const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

export function HomeTerminalHero({ introComplete, onIntroComplete }: HomeTerminalHeroProps) {
    const [typedCommands, setTypedCommands] = useState<string[]>(() => TERMINAL_STEPS.map(() => ""));
    const [visibleOutputs, setVisibleOutputs] = useState<boolean[]>(() => TERMINAL_STEPS.map(() => false));
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [showFinalPrompt, setShowFinalPrompt] = useState(false);
    const [terminalVisible, setTerminalVisible] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const runIntro = async () => {
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            setTerminalVisible(true);

            if (hasPlayedHomeTerminalIntro || reducedMotion) {
                setTypedCommands(FINAL_COMMANDS);
                setVisibleOutputs(FINAL_OUTPUT_VISIBILITY);
                setShowFinalPrompt(true);
                onIntroComplete();
                return;
            }

            await wait(TERMINAL_FADE_MS);
            if (cancelled) return;

            for (let i = 0; i < TERMINAL_STEPS.length; i += 1) {
                const command = TERMINAL_STEPS[i].command;
                setActiveStep(i);

                for (let charIndex = 1; charIndex <= command.length; charIndex += 1) {
                    if (cancelled) return;
                    setTypedCommands((prev) => {
                        const next = [...prev];
                        next[i] = command.slice(0, charIndex);
                        return next;
                    });
                    await wait(TYPE_SPEED_MS);
                }

                await wait(COMMAND_SETTLE_MS);
                if (cancelled) return;

                setVisibleOutputs((prev) => {
                    const next = [...prev];
                    next[i] = true;
                    return next;
                });

                await wait(OUTPUT_SETTLE_MS);
                if (cancelled) return;
            }

            setActiveStep(null);
            setShowFinalPrompt(true);
            hasPlayedHomeTerminalIntro = true;
            onIntroComplete();
        };

        void runIntro();

        return () => {
            cancelled = true;
        };
    }, [onIntroComplete]);

    return (
        <section className="pb-16 pt-12">
            <div className="page-wrap">
                <TerminalWindow className={`terminal-reveal max-w-3xl ${terminalVisible ? "is-visible" : ""}`}>
                    <div className="relative">
                        <div className="invisible pointer-events-none select-none" aria-hidden="true">
                            {TERMINAL_STEPS.map((step) => (
                                <div key={step.command}>
                                    <div className="text-(--term-cmd)">{step.command}</div>
                                    <div className={step.outputClassName}>{step.output}</div>
                                </div>
                            ))}
                            <div className="mt-3 flex items-center gap-0 text-(--term-cmd)">
                                <span>$ </span>
                                <span className="ml-1 inline-block h-4 w-2 bg-primary" />
                            </div>
                        </div>

                        <div className="absolute inset-0">
                            {TERMINAL_STEPS.map((step, index) => (
                                <div key={step.command}>
                                    <div className="text-(--term-cmd)">
                                        {typedCommands[index]}
                                        {activeStep === index ? (
                                            <span className="ml-1 inline-block h-4 w-2 translate-y-px cursor-blink bg-primary" />
                                        ) : null}
                                    </div>

                                    {visibleOutputs[index] ? (
                                        <div className={step.outputClassName}>{step.output}</div>
                                    ) : null}
                                </div>
                            ))}

                            {showFinalPrompt ? (
                                <div className="mt-3 flex items-center gap-0 text-(--term-cmd)">
                                    <span>$ </span>
                                    <span className="ml-1 inline-block h-4 w-2 cursor-blink bg-primary" />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </TerminalWindow>

                <div className={`home-reveal mt-14 max-w-3xl ${introComplete ? "is-visible" : ""}`}>
                    <h1
                        className="font-light leading-tight tracking-[-0.01em] text-(--on-surface)"
                        style={{
                            fontSize: "clamp(32px, 5.5vw, 64px)",
                        }}
                    >
                        Crafting <strong>delight</strong> into every <strong>pixel</strong>.
                    </h1>
                    <div className="flex flex-wrap gap-3 mt-8">
                        <Button to="/projects" variant="primary">
                            cd ./projects →
                        </Button>
                        <Button href="https://github.com/fluffysaur" target="_blank" rel="noopener">
                            ↗ github.com/fluffysaur
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
