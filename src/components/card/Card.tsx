interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="p-4 rounded-25px shadow-2xl bg-white">{ children }</div>;
}