import { Link } from "react-router-dom";

export function FooterBrand() {
    return (
        <div>
            <Link to="/" className="mb-4 flex items-center gap-3 no-underline text-(--on-surface)">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-base font-black tracking-[-0.04em] text-tertiary">
                    YJ
                </span>
                <span className="text-[15px] font-medium tracking-wider">
                    tanyijia<span className="text-primary">.</span>me
                </span>
            </Link>
            <p className="m-0 max-w-xs text-sm leading-relaxed text-(--on-surface-variant)">
                Software engineer & designer based in Singapore. Building thoughtful, accessible interfaces.
            </p>
        </div>
    );
}
