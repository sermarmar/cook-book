interface ComboSelectProps {
    label?: string
    id: string
    list: object[] | string[];
    className?: string;
    //onSelect?: (value: string) => void;
}

const baseInputClass =
    'w-full px-4 py-[11px] border border-gray-300 rounded-8px shadow focus:outline-none focus:ring-4 focus:ring-primary-300 hover:transition-all';

export const ComboSelect: React.FC<ComboSelectProps> = ({ label = '', id, list, className/*, onSelect*/ }) => {
    
    return (
        <div>
            {label && <label className="block mb-2 font-medium text-base-900" htmlFor={ id }>{label}</label>}
            <select className={ `${baseInputClass} ${className}` } id={ id }>
                {
                    list && typeof list[0] === 'string' 
                        ? (list as string[]).map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))
                        : (list as Array<{id: string | number, name: string}>).map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))
                }
            </select>
        </div>
    );
}