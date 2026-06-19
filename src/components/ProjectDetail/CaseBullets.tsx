interface CaseBulletsProps {
    items: string[];
}

export function CaseBullets({ items }: CaseBulletsProps) {
    return (
        <ul className="my-3 list-disc pl-5 marker:text-primary">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}
