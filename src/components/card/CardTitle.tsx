
interface CardTitleProps {
    children: React.ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
    return <h2 className="text-2xl font-berlin-bold mb-4 mx-4 text-left">{ children }</h2>;
}