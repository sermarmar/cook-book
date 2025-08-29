
interface ComboSelectProps {
    list: string[];
    className?: string;
    onSelect: (value: string) => void;
}

const baseInputClass =
    'px-4 py-2 border border-gray-300 rounded-8px shadow focus:outline-none focus:ring-4 focus:ring-primary-300 hover:transition-all';

export const ComboSelect: React.FC<ComboSelectProps> = ({ list, className, onSelect }) => {
    return <select className={ `${baseInputClass} ${className}` }>
        {list.map((item, index) => (
            <option key={index} value={item} onClick={() => onSelect(item)}>{item}</option>
        ))}
    </select>;
}