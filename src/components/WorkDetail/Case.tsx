import { useRef } from "react";
import { Footer } from "../Footer";
import type { CaseContentComponent, CaseMeta } from "../../case-studies/types";
import { CaseBackLink } from "./CaseBackLink";
import { CaseMetaHeader } from "./CaseMetaHeader";
import { CaseToc } from "./CaseToc";
import { CasePrevNextNav } from "./CasePrevNextNav";
import { useActiveCaseSection } from "./useActiveCaseSection";

interface CaseProps {
    meta: CaseMeta;
    Content: CaseContentComponent;
}

export function Case({ meta, Content }: CaseProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const { activeSection, setActiveSection } = useActiveCaseSection(contentRef, meta.toc);

    return (
        <>
            <article className="py-14 pb-24">
                <div className="mx-auto max-w-220 px-8">
                    <CaseBackLink />
                    <CaseMetaHeader meta={meta} />

                    {meta.mainImage && <img src={meta.mainImage} alt={meta.title} className="mt-8 w-full rounded-lg" />}

                    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_200px]">
                        <div ref={contentRef}>
                            <Content />
                        </div>

                        <CaseToc toc={meta.toc} activeSection={activeSection} onSectionSelect={setActiveSection} />
                    </div>

                    <CasePrevNextNav meta={meta} />
                </div>
            </article>
            <Footer />
        </>
    );
}
