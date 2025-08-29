interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="p-4 pb-5 rounded-25px shadow-md bg-secondary-50 transition-all hover:shadow-xl">{ children }</div>;
}

interface CardTitleProps {
    children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
    return <h2 className="text-2xl font-berlin-bold mb-4 mx-4 text-left">{ children }</h2>;
}

interface CardDescriptionProps {
    children: React.ReactNode;
}

export const CardDecription: React.FC<CardDescriptionProps> = ({ children }) => {
    return <p className="mx-4 text-base-900 text-left">{ children }</p>;
}

interface CardImageProps {
    src: string;
    alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
    return <img src={ src } alt={ alt } className="w-full h-auto rounded-20px mb-4 shadow-md" />;
}