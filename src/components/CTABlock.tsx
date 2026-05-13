import { CTAButton } from "./CTAButton";

export function CTABlock() {
    return (
        <section className="py-24">
            <div className="page-wrap">
                <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-10 text-tertiary md:px-14 md:pt-16 md:pb-20">
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[rgba(var(--color-tertiary-rgb),0.6)]">
                        Get in touch
                    </p>
                    <h2 className="mt-3 mb-4 max-w-2xl text-[32px] font-light leading-tight tracking-[-0.01em] text-tertiary md:text-[56px]">
                        Let's build <strong className="font-black">something</strong> that lasts.
                    </h2>
                    <p className="mb-8 max-w-xl text-lg leading-relaxed text-[rgba(var(--color-tertiary-rgb),0.7)]">
                        I'm currently taking on freelance frontend & UX engagements, plus a small number of full-time
                        conversations.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <CTAButton href="mailto:tanyijia@gmail.com" target="_blank" rel="noopener">
                            Email me
                        </CTAButton>
                        <CTAButton
                            href="https://linkedin.com/in/tanyijiasg"
                            target="_blank"
                            rel="noopener"
                            variant="secondary"
                            className="bg-transparent text-tertiary"
                            style={{
                                borderColor: "rgba(var(--color-tertiary-rgb),0.25)",
                            }}
                        >
                            LinkedIn
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
