import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "./Button";

export function CTABlock() {
    return (
        <section className="py-24">
            <div className="page-wrap">
                <div
                    className="relative overflow-hidden rounded-2xl border bg-(--surface-container-low) px-10 py-11 md:py-12"
                    style={{
                        borderColor: "var(--outline-variant)",
                        boxShadow: "inset 3px 0 0 var(--color-primary)",
                    }}
                >
                    <p className="m-0 font-mono text-[12px] tracking-wider text-(--on-surface-muted)">~/contact/</p>

                    <h2 className="mt-3 mb-4 max-w-2xl text-[32px] font-light leading-tight tracking-[-0.01em] text-(--on-surface) md:text-[44px]">
                        Let's <strong className="font-black">build something</strong>.
                    </h2>

                    <p className="mb-7 max-w-xl text-[17px] leading-relaxed text-(--on-surface-medium)">
                        Always looking for new opportunities and collaborations. Whether you have a project in mind or
                        just want to say hi, feel free to reach out!
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                        <Button href="mailto:tanyijia@gmail.com" variant="primary">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Email
                        </Button>
                        <Button
                            href="https://linkedin.com/in/tanyijiasg"
                            target="_blank"
                            rel="noopener"
                            variant="secondary"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            LinkedIn
                        </Button>
                        <Button href="https://github.com/fluffysaur" target="_blank" rel="noopener" variant="secondary">
                            <FontAwesomeIcon icon={faGithub} />
                            GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
