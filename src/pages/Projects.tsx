import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { PageShell } from "../components/PageShell";
import { FilterTabs } from "../components/FilterTabs";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { PROJECTS } from "../data/projects";

type FilterId = "dev" | "film";

const FILTERS = [
    { id: "dev" as const, label: "/Dev" },
    { id: "film" as const, label: "/Film" },
];

function normalizeTrack(track: string | null): FilterId {
    return track === "film" ? "film" : "dev";
}

export function Projects() {
    const [searchParams, setSearchParams] = useSearchParams();
    const active = normalizeTrack(searchParams.get("track"));

    const setTrack = (track: FilterId) => {
        const next = new URLSearchParams(searchParams);
        next.set("track", track);
        setSearchParams(next);
    };

    const counts: Record<FilterId, number> = {
        dev: PROJECTS.filter((p) => p.cat === "dev").length,
        film: PROJECTS.filter((p) => p.cat === "film").length,
    };

    const filtered = PROJECTS.filter((project) => project.cat === active);

    return (
        <PageShell>
            <PageHeader
                slug="projects"
                title={
                    <>
                        Stuff I've <strong>shipped</strong>.
                    </>
                }
                subtitle="some projects I've worked on, from software to film."
            />

            <div className="mt-14">
                <FilterTabs filters={FILTERS} active={active} counts={counts} onSelect={setTrack} />

                <ProjectsGrid projects={filtered} />
            </div>
        </PageShell>
    );
}
