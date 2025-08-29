interface BadgeProps {
    children?: React.ReactNode;
    className?: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'small' | 'medium' | 'large';
}

export const Bagde: React.FC<BadgeProps> = ({ children, className, color, size }) => {
    const colorClasses = {
        primary: 'bg-primary-500 text-base-50',
        secondary: 'bg-secondary-500 text-base-950',
        success: 'bg-success-500 text-base-50',
        danger: 'bg-danger-500 text-base-50',
    };

    const sizeClasses = {
        small: 'px-4 py-1 text-xs',
        medium: 'px-6 py-1.5 text-sm',
        large: 'px-8 py-2 text-base',
    };

    const classes = [
        'inline-block rounded-full font-semibold',
        color ? colorClasses[color] : colorClasses['primary'],
        size ? sizeClasses[size] : sizeClasses['small'],
        className || '',
    ].join(' ');

    return <div className={ classes }>{ children }</div>;
}