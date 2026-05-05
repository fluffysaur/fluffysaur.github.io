import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer
            className="pt-16 pb-12 mt-auto border-t"
            style={{ borderColor: "var(--border-mid)" }}
        >
            <div className="max-w-285 mx-auto px-5 md:px-8">
                <div className="grid gap-8 mb-12 grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    {/* Brand col */}
                    <div>
                        <Link
                            to="/"
                            className="flex items-center gap-3 no-underline mb-4"
                            style={{ color: "var(--fg-1)" }}
                        >
                            <span
                                className="w-9 h-9 rounded-lg bg-accent text-graphite grid place-items-center font-black text-base"
                                style={{ letterSpacing: "-0.04em" }}
                            >
                                YJ
                            </span>
                            <span className="font-medium text-[15px] tracking-wider">
                                tanyijia<span className="text-accent">.</span>me
                            </span>
                        </Link>
                        <p
                            className="text-sm max-w-xs leading-relaxed m-0"
                            style={{ color: "var(--fg-4)" }}
                        >
                            Software engineer & designer based in Singapore. Building thoughtful, accessible interfaces.
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h5
                            className="text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                            style={{ color: "var(--fg-6)" }}
                        >
                            Sitemap
                        </h5>
                        <ul className="list-none p-0 m-0 space-y-2.5">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/work"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Elsewhere */}
                    <div>
                        <h5
                            className="text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                            style={{ color: "var(--fg-6)" }}
                        >
                            Elsewhere
                        </h5>
                        <ul className="list-none p-0 m-0 space-y-2.5">
                            <li>
                                <a
                                    href="https://github.com/fluffysaur"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/in/tanyijiasg"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://vimeo.com/tanyijia"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    Vimeo
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/tanyijia"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5
                            className="text-[11px] tracking-[0.2em] uppercase font-medium mb-4"
                            style={{ color: "var(--fg-6)" }}
                        >
                            Get in touch
                        </h5>
                        <ul className="list-none p-0 m-0 space-y-2.5">
                            <li>
                                <a
                                    href="mailto:tanyijia@gmail.com"
                                    className="text-sm no-underline transition-colors hover:text-accent"
                                    style={{ color: "var(--fg-3)" }}
                                >
                                    tanyijia@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="flex flex-wrap justify-between items-center gap-y-1 pt-6 border-t text-[13px]"
                    style={{ borderColor: "var(--border-sub)", color: "var(--fg-6)" }}
                >
                    <span>© {new Date().getFullYear()} Tan Yi Jia · Singapore 🇸🇬</span>
                    <span className="font-mono text-[12px]">Built with React + a lot of ☕</span>
                </div>
            </div>
        </footer>
    );
}
