'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    [key: string]: any;
}

function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png',
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Sync state when src prop changes
    React.useEffect(() => {
        setImageSrc(src);
        setHasError(false);
        setIsLoading(true);
    }, [src]);

    // More reliable external URL detection
    const isExternal = imageSrc.startsWith('http://') || imageSrc.startsWith('https://');
    const isLocal = imageSrc.startsWith('/') || imageSrc.startsWith('./') || imageSrc.startsWith('data:');
    
    // Check if the domain is allowed in next.config.mjs for optimization
    const isOptimizedDomain = imageSrc.includes('images.unsplash.com') || 
                              imageSrc.includes('images.pexels.com') || 
                              imageSrc.includes('images.pixabay.com') ||
                              imageSrc.includes('img.rocket.new');

    const handleError = () => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    };

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`;

    // For external URLs, prefer standard img tag unless strictly required otherwise
    // This improves reliability when Next.js Image Optimization fails or is misconfigured
    if (isExternal && !isLocal) {
        // Extract props that shouldn't be passed to standard img tag
        const { priority, quality, placeholder, blurDataURL, unoptimized, ...validImgProps } = props;

        if (fill) {
            return (
                <div className={`relative ${className}`} style={{ width: width || '100%', height: height || '100%' }}>
                    <img
                        src={imageSrc}
                        alt={alt}
                        className={`${commonClassName} absolute inset-0 w-full h-full object-cover`}
                        onError={handleError}
                        onLoad={handleLoad}
                        onClick={onClick}
                        {...validImgProps}
                    />
                </div>
            );
        }

        return (
            <img
                src={imageSrc}
                alt={alt}
                width={width}
                height={height}
                className={commonClassName}
                onError={handleError}
                onLoad={handleLoad}
                onClick={onClick}
                loading={priority ? 'eager' : 'lazy'}
                {...validImgProps}
            />
        );
    }

    // For local images and data URLs, use Next.js Image component
    const imageProps = {
        src: imageSrc,
        alt,
        className: commonClassName,
        priority,
        quality,
        placeholder,
        blurDataURL,
        unoptimized: false,
        onError: handleError,
        onLoad: handleLoad,
        onClick,
        ...props,
    };

    if (fill) {
        return (
            <div className={`relative ${className}`}>
                <Image
                    {...imageProps}
                    fill
                    sizes={sizes || '100vw'}
                    style={{ objectFit: 'cover' }}
                />
            </div>
        );
    }

    return (
        <Image
            {...imageProps}
            width={width || 400}
            height={height || 300}
        />
    );
}

export default AppImage;