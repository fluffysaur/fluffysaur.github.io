import { meta as interseedMeta, InterseedContent } from "./interseed";
import { meta as staffanyMeta, StaffanyContent } from "./staffany";
import { meta as launchpadMeta, LaunchpadContent } from "./launchpad";
import { meta as rnMeta, RnMigrationContent } from "./rn-migration";
import type { CaseEntry } from "./types";

export const CASES: Record<string, CaseEntry> = {
    interseed: { meta: interseedMeta, Content: InterseedContent },
    staffany: { meta: staffanyMeta, Content: StaffanyContent },
    launchpad: { meta: launchpadMeta, Content: LaunchpadContent },
    "rn-migration": { meta: rnMeta, Content: RnMigrationContent },
};
