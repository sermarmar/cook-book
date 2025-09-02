import React, { useEffect } from 'react';


interface InputProps {
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string) => void;
}

const baseInputClass =
    'px-3 py-2 border border-gray-300 rounded-8px shadow focus:outline-none bg-base-50 focus:ring-4 focus:ring-primary-300 hover:transition-all';

export const Input: React.FC<InputProps> = ({ type, placeholder = '', value, disabled = false, className = '', onChange }) => {
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
        <input
            type={ type }
            placeholder={ placeholder }
            value={ value !== undefined ? value : internalValue }
            onChange={ handleChange }
            disabled={ disabled }
            className={ `${baseInputClass} ${className}` }
        />
    );
}