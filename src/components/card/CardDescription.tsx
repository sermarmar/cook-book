interface CardDescriptionProps {
    children: React.ReactNode;
}

export const CardDecription: React.FC<CardDescriptionProps> = ({ children }) => {
    return <p className="mx-4 text-base-900 text-left">{ children }</p>;
}