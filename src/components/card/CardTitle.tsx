
interface CardTitleProps {
    children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
    return <h2 className="text-2xl font-bold mb-4">{ children }</h2>;
}