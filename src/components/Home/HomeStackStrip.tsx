import { Tag } from "../Tag";
import { STACK } from "../../data/projects";

export function HomeStackStrip() {
    return (
        <div className="page-wrap flex items-center gap-6 flex-wrap pb-12">
            <div
                className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-medium"
                style={{ color: "var(--fg-6)" }}
            >
                <span className="inline-block w-6 h-px bg-accent" />
                Currently working with
            </div>
            <div className="flex gap-2 flex-wrap">
                {STACK.map((s) => (
                    <Tag key={s}>{s}</Tag>
                ))}
            </div>
        </div>
    );
}
