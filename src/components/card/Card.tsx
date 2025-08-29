interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="p-4 pb-5 rounded-25px shadow-md bg-secondary-50 transition-all hover:shadow-xl">{ children }</div>;
}