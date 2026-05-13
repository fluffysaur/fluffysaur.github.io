import type { ReactNode } from "react";
import { Footer } from "./Footer";

interface PageShellProps {
    children: ReactNode;
    sectionClassName?: string;
    contentClassName?: string;
    afterSection?: ReactNode;
    showFooter?: boolean;
}

function joinClasses(...classes: Array<string | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export function PageShell({
    children,
    sectionClassName,
    contentClassName,
    afterSection,
    showFooter = true,
}: PageShellProps) {
    return (
        <>
            <section className={joinClasses("py-14", sectionClassName)}>
                <div className={joinClasses("page-wrap", contentClassName)}>{children}</div>
            </section>
            {afterSection}
            {showFooter && <Footer />}
        </>
    );
}
