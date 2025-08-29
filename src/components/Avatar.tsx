import React from 'react';

interface AvatarProps {
    src?: string;
    alt?: string;
    shape?: 'circle' | 'rounded';
    shadow?: boolean;
    size?: number; // px
    className?: string;
};

const DEFAULT_IMAGE = '/foto.jpg';

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    shape = 'circle',
    shadow = false,
    size = 48,
    className = '',
}) => {
    const [imgSrc, setImgSrc] = React.useState(src || DEFAULT_IMAGE);

    const handleError = () => {
        setImgSrc(DEFAULT_IMAGE);
    };

    const classesBase = 'object-cover block transition duration-200 hover:brightness-75';

    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-xl';
    const shadowClass = shadow ? 'shadow-lg' : '';
    const sizeClass = `w-[${size}px] h-[${size}px]`;

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            className={`${classesBase} ${sizeClass} ${shapeClass} ${shadowClass} ${className}`}
            width={size}
            height={size}
        />
    );
};