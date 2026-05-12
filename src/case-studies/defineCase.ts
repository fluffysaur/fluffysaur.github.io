import type { CaseEntry, CaseMeta, CaseSection } from "./types";

interface DefineCaseInput extends CaseMeta {
    sections: CaseSection[];
}

export function defineCase(input: DefineCaseInput): CaseEntry {
    const { sections, ...meta } = input;
    return { meta, sections };
}
