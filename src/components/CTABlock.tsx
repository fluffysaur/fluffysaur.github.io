export function CTABlock() {
    return (
        <section className="py-24">
            <div className="max-w-285 mx-auto px-8">
                <div
                    className="rounded-2xl px-14 pt-16 pb-20 relative overflow-hidden"
                    style={{ background: "#f2cb05", color: "#262626" }}
                >
                    <p
                        className="text-[11px] tracking-[0.22em] uppercase font-medium mb-3"
                        style={{ color: "rgba(38,38,38,0.6)" }}
                    >
                        Get in touch
                    </p>
                    <h2
                        className="text-[56px] font-light leading-tight mt-3 mb-4 max-w-2xl"
                        style={{ color: "#262626", letterSpacing: "-0.01em" }}
                    >
                        Let's build <strong className="font-black">something</strong> that lasts.
                    </h2>
                    <p
                        className="text-lg mb-8 max-w-xl leading-relaxed"
                        style={{ color: "rgba(38,38,38,0.7)" }}
                    >
                        I'm currently taking on freelance frontend & UX engagements, plus a small number of full-time
                        conversations.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="mailto:tanyijia@gmail.com"
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all"
                            style={{ background: "#262626", color: "#f2cb05" }}
                        >
                            Email me
                        </a>
                        <a
                            href="https://linkedin.com/in/tanyijiasg"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all border"
                            style={{ background: "transparent", color: "#262626", borderColor: "rgba(38,38,38,0.25)" }}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
