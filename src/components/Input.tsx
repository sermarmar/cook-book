import React, { useEffect } from 'react';


interface InputProps {
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    label?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string) => void;
}

const baseInputClass =
    'px-3 py-2 border border-gray-300 rounded-8px shadow focus:outline-none focus:ring-4 focus:ring-primary-300 hover:transition-all';

export const Input: React.FC<InputProps> = ({ type, label = '', placeholder = '', value, disabled = false, className = '', onChange }) => {
    const [internalValue, setInternalValue] = React.useState(value ?? '');

    useEffect(() => {
        if (value !== undefined) {
            setInternalValue(value);
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        onChange?.(e.target.value);
    };

    return (
        <div className="flex flex-col gap-2">
            {label && <label className="block font-medium text-base-900">{label}</label>}
            <input
                type={ type }
                placeholder={ placeholder }
                value={ value !== undefined ? value : internalValue }
                onChange={ handleChange }
                disabled={ disabled }
                className={ `${baseInputClass} ${className}` }
            />
        </div>
    );
}