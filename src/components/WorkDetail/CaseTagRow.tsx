import { TagRow } from "../Tag";

interface CaseTagRowProps {
    tags: string[];
}

export function CaseTagRow({ tags }: CaseTagRowProps) {
    return (
        <div className="mt-10">
            <TagRow tags={tags} />
        </div>
    );
}
