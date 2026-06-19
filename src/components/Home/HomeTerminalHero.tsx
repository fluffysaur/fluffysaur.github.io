import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { STACK } from "../../data/projects";
import { TerminalWindow } from "../TerminalWindow";
import { HomeSocialLinks } from "./HomeSocialLinks";

const TYPE_SPEED_MS = 45;
const COMMAND_SETTLE_MS = 260;
const OUTPUT_SETTLE_MS = 700;
const TERMINAL_FADE_MS = 450;

type IntroPhase = "typing" | "complete" | "idle";

interface TerminalStep {
    command: string;
    output: ReactNode;
    outputClassName: string;
}

interface HomeTerminalHeroProps {
    shouldPlayIntro: boolean;
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

const getVerticalScrollbarWidth = (element: HTMLElement) => element.offsetWidth - element.clientWidth;

const addScrollbarCompensation = (element: HTMLElement, scrollbarWidth: number) => {
    const currentPaddingRight = Number.parseFloat(window.getComputedStyle(element).paddingRight) || 0;
    element.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
};

export function HomeTerminalHero({ shouldPlayIntro, onIntroComplete }: HomeTerminalHeroProps) {
    const [typedCommands, setTypedCommands] = useState<string[]>(() => TERMINAL_STEPS.map(() => ""));
    const [visibleOutputs, setVisibleOutputs] = useState<boolean[]>(() => TERMINAL_STEPS.map(() => false));
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const [showFinalPrompt, setShowFinalPrompt] = useState(false);
    const [terminalVisible, setTerminalVisible] = useState(false);
    const [phase, setPhase] = useState<IntroPhase>(() => (shouldPlayIntro ? "typing" : "idle"));

    useEffect(() => {
        setPhase(shouldPlayIntro ? "typing" : "idle");
    }, [shouldPlayIntro]);

    useEffect(() => {
        const isPlaying = phase === "typing";
        const pageScroller = document.getElementById("page-scroll-container");
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const previousBodyOverflow = document.body.style.overflow;
        const previousBodyPaddingRight = document.body.style.paddingRight;
        const previousScrollerOverflow = pageScroller?.style.overflowY;
        const previousScrollerPaddingRight = pageScroller?.style.paddingRight;
        const hasDocumentScrollbar = window.innerWidth > document.documentElement.clientWidth;
        const hasPageScrollbar = pageScroller ? pageScroller.scrollHeight > pageScroller.clientHeight : false;

        document.documentElement.classList.toggle("home-intro-playing", isPlaying);
        window.dispatchEvent(new CustomEvent("home-intro-playing-change", { detail: isPlaying }));

        if (isPlaying) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            if (pageScroller) {
                const scrollbarWidth = getVerticalScrollbarWidth(pageScroller);
                pageScroller.style.overflowY = "hidden";
                if (hasPageScrollbar && scrollbarWidth > 0) {
                    addScrollbarCompensation(pageScroller, scrollbarWidth);
                }
            } else if (hasDocumentScrollbar) {
                addScrollbarCompensation(document.body, window.innerWidth - document.documentElement.clientWidth);
            }
        }

        return () => {
            if (isPlaying) {
                document.documentElement.style.overflow = previousHtmlOverflow;
                document.body.style.overflow = previousBodyOverflow;
                document.body.style.paddingRight = previousBodyPaddingRight;
                if (pageScroller) {
                    pageScroller.style.overflowY = previousScrollerOverflow ?? "";
                    pageScroller.style.paddingRight = previousScrollerPaddingRight ?? "";
                }
                document.documentElement.classList.remove("home-intro-playing");
                window.dispatchEvent(new CustomEvent("home-intro-playing-change", { detail: false }));
            }
        };
    }, [phase]);

    useEffect(() => {
        let cancelled = false;

        const runIntro = async () => {
            setTerminalVisible(true);

            if (!shouldPlayIntro) {
                setTypedCommands(FINAL_COMMANDS);
                setVisibleOutputs(FINAL_OUTPUT_VISIBILITY);
                setShowFinalPrompt(true);
                onIntroComplete();
                return;
            }

            window.sessionStorage.setItem("homeTerminalIntroPlayed", "true");

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

            await wait(OUTPUT_SETTLE_MS);
            setPhase("complete");
            onIntroComplete();
        };

        void runIntro();

        return () => {
            cancelled = true;
        };
    }, [onIntroComplete, shouldPlayIntro]);

    const heroContentVisible = phase === "complete" || phase === "idle";

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

                <div className={`home-reveal mt-14 max-w-3xl ${heroContentVisible ? "is-visible" : ""}`}>
                    <h1
                        className="font-light leading-tight tracking-[-0.01em] text-(--on-surface)"
                        style={{
                            fontSize: "clamp(32px, 5.5vw, 64px)",
                        }}
                    >
                        Crafting <strong>delight</strong> into every <strong>pixel</strong>.
                    </h1>
                    <HomeSocialLinks />
                </div>
            </div>
        </section>
    );
}
