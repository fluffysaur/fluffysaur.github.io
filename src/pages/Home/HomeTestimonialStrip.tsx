import { TESTIMONIALS } from "../../data/testimonials";

export function HomeTestimonialStrip() {
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
                <h2 className="font-light mb-14" style={{ fontSize: "clamp(28px, 4.5vw, 48px)", color: "var(--fg-1)" }}>
                    From people I've <strong>worked with</strong>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <figure key={i} className="m-0 p-7 rounded-lg" style={{ background: "var(--bg-elevated)" }}>
                            <p
                                className="text-[16px] font-light leading-relaxed italic m-0"
                                style={{ color: "var(--fg-3)" }}
                            >
                                "{t.quote}"
                            </p>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <img src={t.img} alt={t.author} className="w-11 h-11 rounded-full object-cover" />
                                <div>
                                    <div className="text-sm" style={{ color: "var(--fg-1)" }}>
                                        {t.author}
                                    </div>
                                    <div className="text-[12px]" style={{ color: "var(--fg-5)" }}>
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
