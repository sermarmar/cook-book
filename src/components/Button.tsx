import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    circle?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', color = 'primary', circle = false, disabled = false, onClick }) => {
    let baseClasses = 'px-4 py-2 rounded-8px hover:transition';
    switch (color) {
        case 'primary':
            baseClasses += ' bg-blaze-orange-600 hover:bg-blaze-orange-700 text-white';
            break;
        case 'secondary':
            baseClasses += ' bg-yellow-600 hover:bg-yellow-700 text-black';
            break;
        case 'success':
            baseClasses += ' bg-lima-500 hover:bg-lima-700 text-white';
            break;
        case 'danger':
            baseClasses += ' bg-mexican-red-600 hover:bg-mexican-red-700 text-white';
            break;
    }
    if (circle) {
        baseClasses += ' rounded-full aspect-square flex items-center justify-center p-0';
    }
    if (disabled) {
        baseClasses += ' opacity-50 cursor-not-allowed';
    }
    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${className}`}
        >
            {children}
        </button>
    );
};