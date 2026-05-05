interface CaseImageProps {
    src: string;
    alt: string;
}

export function CaseImage({ src, alt }: CaseImageProps) {
    return <img src={src} alt={alt} className="my-8 block w-full rounded-md" />;
}
