import { Link } from "react-router-dom";
import { LogoMark } from "../LogoMark";

export function FooterBrand() {
    return (
        <div>
            <Link to="/" className="mb-4 flex items-center gap-3 no-underline text-(--on-surface)">
                <LogoMark size="md" linked={false} className="h-9 w-9 rounded-lg" />
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
