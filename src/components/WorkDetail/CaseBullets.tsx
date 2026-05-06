interface CaseBulletsProps {
    items: string[];
}

export function CaseBullets({ items }: CaseBulletsProps) {
    return (
        <ul className="mt-3.5 pl-4.5">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}
