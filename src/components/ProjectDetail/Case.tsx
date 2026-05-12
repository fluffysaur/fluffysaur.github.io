import { useRef } from "react";
import { Footer } from "../Footer";
import type { CaseEntry, CaseNeighbour } from "../../case-studies/types";
import { CaseBackLink } from "./CaseBackLink";
import { CaseMetaHeader } from "./CaseMetaHeader";
import { CaseToc } from "./CaseToc";
import { CasePrevNextNav } from "./CasePrevNextNav";
import { CaseSection } from "./CaseSection";
import { CaseTagRow } from "./CaseTagRow";
import { CaseContent } from "./CaseContent";
import { useActiveCaseSection } from "./useActiveCaseSection";

interface CaseProps {
    entry: CaseEntry;
    prev: CaseNeighbour;
    next: CaseNeighbour;
}

export function Case({ entry, prev, next }: CaseProps) {
    const { meta, sections } = entry;
    const contentRef = useRef<HTMLDivElement>(null);
    const headings = sections.map((s) => s.heading);
    const { activeSection, setActiveSection } = useActiveCaseSection(contentRef, headings);

    return (
        <>
            <article className="py-14 pb-24">
                <div className="page-wrap">
                    <CaseBackLink />
                    <CaseMetaHeader meta={meta} />

                    {meta.cover && <img src={meta.cover} alt={meta.title} className="mt-8 w-full rounded-lg" />}

                    <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_200px]">
                        <CaseContent>
                            <div ref={contentRef}>
                                {sections.map((s) => (
                                    <CaseSection key={s.heading} heading={s.heading} tldr={s.tldr}>
                                        {s.content}
                                    </CaseSection>
                                ))}
                                <CaseTagRow tags={meta.tags} />
                            </div>
                        </CaseContent>

                        <CaseToc
                            headings={headings}
                            activeSection={activeSection}
                            onSectionSelect={setActiveSection}
                        />
                    </div>

                    <CasePrevNextNav prev={prev} next={next} />
                </div>
            </article>
            <Footer />
        </>
    );
}
