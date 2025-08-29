interface CardDescriptionProps {
    children: React.ReactNode;
}

export const CardDecription: React.FC<CardDescriptionProps> = ({ children }) => {
    return <p className="text-gray-700">{ children }</p>;
}