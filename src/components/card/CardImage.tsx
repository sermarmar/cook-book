interface CardImageProps {
    src: string;
    alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
    return <img src={ src } alt={ alt } className="w-full h-auto rounded-20px mb-4" />;
}