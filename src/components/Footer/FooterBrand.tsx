import { Link } from "react-router-dom";
import { LogoMark } from "../LogoMark";

export function FooterBrand() {
    return (
        <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-3 no-underline text-(--on-surface)">
                <LogoMark size="md" linked={false} className="h-9 w-9 rounded-lg" />
                <span className="text-[15px] font-medium tracking-wider">Tan Yi Jia</span>
            </Link>
            <p className="m-0 text-sm max-w-xs leading-relaxed text-(--on-surface-variant)">
                I'm a frontend software engineer and designer building thoughtful, accessible interfaces for web and
                mobile.
            </p>
        </div>
    );
}
