interface ComboSelectProps {
    label?: string
    id: string
    list: object[];
    className?: string;
    //onSelect?: (value: string) => void;
}

const baseInputClass =
    'px-4 py-2 border border-gray-300 rounded-8px shadow focus:outline-none focus:ring-4 focus:ring-primary-300 hover:transition-all';

export const ComboSelect: React.FC<ComboSelectProps> = ({ label = '', id, list, className/*, onSelect*/ }) => {
    
    return (
        <div>
            {label && <label className="block mb-2 font-medium text-base-900" htmlFor={ id }>{label}</label>}
            <select className={ `${baseInputClass} ${className}` } id={ id }>
                {list.map((item) => (
                    <option key={item.id} value={item.name} /*onClick={() => onSelect(item)}*/>{item.name}</option>
                ))}
            </select>
        </div>
    );
}