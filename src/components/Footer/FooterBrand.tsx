import { Link } from "react-router-dom";

export function FooterBrand() {
    return (
        <div>
            <Link to="/" className="mb-4 flex items-center gap-3 no-underline" style={{ color: "var(--fg-1)" }}>
                <span
                    className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-base font-black text-graphite"
                    style={{ letterSpacing: "-0.04em" }}
                >
                    YJ
                </span>
                <span className="text-[15px] font-medium tracking-wider">
                    tanyijia<span className="text-accent">.</span>me
                </span>
            </Link>
            <p className="m-0 max-w-xs text-sm leading-relaxed" style={{ color: "var(--fg-4)" }}>
                Software engineer & designer based in Singapore. Building thoughtful, accessible interfaces.
            </p>
        </div>
    );
}
