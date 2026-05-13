import { TESTIMONIALS } from "../../data/testimonials";

export function HomeTestimonialStrip() {
    return (
        <section className="py-24 bg-(--surface-container-low)">
            <div className="page-wrap">
                <p className="mb-3 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-(--on-surface-subtle)">
                    <span className="inline-block w-6 h-px bg-primary" />
                    Kind words
                </p>
                <h2 className="mb-14 font-light text-(--on-surface)" style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}>
                    From people I've <strong>worked with</strong>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <figure key={i} className="m-0 p-7 rounded-lg bg-(--surface-container)">
                            <p className="m-0 text-[16px] font-light leading-relaxed italic text-(--on-surface-medium)">
                                "{t.quote}"
                            </p>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <img src={t.img} alt={t.author} className="w-11 h-11 rounded-full object-cover" />
                                <div>
                                    <div className="text-sm text-(--on-surface)">{t.author}</div>
                                    <div className="text-[12px] text-(--on-surface-muted)">{t.role}</div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
