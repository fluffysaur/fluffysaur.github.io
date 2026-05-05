import { Footer } from "../components/Footer";
import { CTABlock } from "../components/CTABlock";
import type { TimelineEntry } from "../types";

const TIMELINE: TimelineEntry[] = [
    {
        year: "2024–now",
        title: "Software Engineer",
        org: "React Native Migration · shipping mobile software",
        tag: "Now",
    },
    { year: "2022–23", title: "Product Designer", org: "StaffAny · 48k+ users · Growth Pod & Design Systems" },
    { year: "2020–21", title: "Frontend Developer", org: "YSI SEA / Interseed · MERN from scratch" },
    { year: "2020", title: "Web Designer & Developer", org: "Earth School Singapore" },
    { year: "2019", title: "Production Assistant", org: "Stardust Story · Mixed Signals (film)" },
];

const CURRENTLY = [
    { key: "Building", value: "React Native apps and migrating legacy mobile codebases" },
    { key: "Learning", value: "Rust, slowly, for the love of it" },
    { key: "Reading", value: '"A Philosophy of Software Design" by John Ousterhout' },
    { key: "Filming", value: "Wedding films and brand videos on the side" },
];

const SOCIAL_LINKS = [
    { label: "GitHub →", href: "https://github.com/fluffysaur", external: true },
    { label: "LinkedIn →", href: "https://linkedin.com/in/tanyijiasg", external: true },
    { label: "Vimeo →", href: "https://vimeo.com/tanyijia", external: true },
    { label: "YouTube →", href: "https://www.youtube.com/tanyijia", external: true },
    { label: "Email →", href: "mailto:tanyijia@gmail.com", external: false },
];

export function About() {
    return (
        <>
            <section className="py-20">
                <div className="max-w-220 mx-auto px-8">
                    <p
                        className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                        style={{ color: "var(--fg-6)" }}
                    >
                        <span className="inline-block w-6 h-px bg-accent" />
                        /about
                    </p>
                    <h1
                        className="font-light pb-4"
                        style={{ fontSize: 72, letterSpacing: "-0.01em", color: "var(--fg-1)" }}
                    >
                        About <strong>me</strong>.
                    </h1>

                    {/* Bio + photo */}
                    <div
                        className="grid gap-12 mb-16"
                        style={{ gridTemplateColumns: "1fr 280px" }}
                    >
                        <p
                            className="font-light text-[20px] leading-relaxed m-0"
                            style={{ color: "var(--fg-3)" }}
                        >
                            Hi! I'm Tan Yi Jia — a Singapore-based software engineer who came up through UX design and
                            filmmaking. I take delight in understanding how a product impacts its audience. It always
                            brings me immense joy to make a difference through my work.
                        </p>
                        <img
                            src="/assets/me.jpg"
                            alt="Tan Yi Jia"
                            className="w-full rounded-lg block object-cover"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="mb-16">
                        <h2
                            className="mb-4"
                            style={{ fontSize: 40, color: "var(--fg-1)" }}
                        >
                            The <strong>journey</strong>
                        </h2>
                        {TIMELINE.map((r, i) => (
                            <div
                                key={i}
                                className={`grid gap-8 py-6 items-baseline${i > 0 ? " border-t" : ""}`}
                                style={{
                                    gridTemplateColumns: "120px 1fr auto",
                                    borderColor: "var(--border-mid)",
                                }}
                            >
                                <span
                                    className="font-mono text-sm"
                                    style={{ color: "var(--fg-5)" }}
                                >
                                    {r.year}
                                </span>
                                <div>
                                    <h3
                                        className="font-light text-[22px] mb-1"
                                        style={{ color: "var(--fg-1)" }}
                                    >
                                        {r.title}
                                    </h3>
                                    <p
                                        className="text-sm m-0"
                                        style={{ color: "var(--fg-4)" }}
                                    >
                                        {r.org}
                                    </p>
                                </div>
                                {r.tag && (
                                    <span className="px-2.5 py-1 rounded text-[11px] font-medium font-mono bg-accent text-graphite">
                                        {r.tag}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Currently */}
                    <div className="mb-16">
                        <h2
                            className="mb-4"
                            style={{ fontSize: 40, color: "var(--fg-1)" }}
                        >
                            <strong>Currently</strong>
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {CURRENTLY.map(({ key, value }) => (
                                <div
                                    key={key}
                                    className="p-5 rounded-lg border"
                                    style={{ background: "var(--bg-card)", borderColor: "var(--border-mid)" }}
                                >
                                    <p
                                        className="text-[11px] tracking-[0.2em] uppercase font-medium mb-2"
                                        style={{ color: "var(--fg-6)" }}
                                    >
                                        {key}
                                    </p>
                                    <p
                                        className="text-[15px] font-light m-0"
                                        style={{ color: "var(--fg-1)" }}
                                    >
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Find me elsewhere */}
                    <div>
                        <h2
                            className="font-light mb-4"
                            style={{ fontSize: 40, color: "var(--fg-1)" }}
                        >
                            Find me <strong>elsewhere</strong>
                        </h2>
                        <div className="flex gap-3 flex-wrap">
                            {SOCIAL_LINKS.map(({ label, href, external }) => (
                                <a
                                    key={label}
                                    href={href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all hover:border-accent hover:text-accent"
                                    style={{ borderColor: "var(--border)", color: "var(--fg-2)" }}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <CTABlock />
            <Footer />
        </>
    );
}
