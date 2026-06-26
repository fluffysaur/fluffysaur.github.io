import interseed from "./Interseed";
import staffany from "./StaffAnyLearnAndEarn";
import launchpad from "./Launchpad";
import rnMigration from "./GeRnMigration";
import type { CaseEntry, CaseNeighbour } from "./types";

export const CASES: CaseEntry[] = [interseed, staffany, launchpad, rnMigration];

export interface ResolvedCase {
    entry: CaseEntry;
    prev: CaseNeighbour;
    next: CaseNeighbour;
}

export function findCase(id: string): ResolvedCase | null {
    const index = CASES.findIndex((c) => c.meta.id === id);
    if (index === -1) return null;
    const entry = CASES[index];
    const prev = index > 0 ? { id: CASES[index - 1].meta.id, title: CASES[index - 1].meta.title } : null;
    const next =
        index < CASES.length - 1 ? { id: CASES[index + 1].meta.id, title: CASES[index + 1].meta.title } : null;
    return { entry, prev, next };
}
