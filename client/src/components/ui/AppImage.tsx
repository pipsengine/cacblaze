'use client';

import React, { useState } from 'react';

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
  secondaryFallbackSrc?: string;
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
  secondaryFallbackSrc = '/assets/images/no_image.png',
  ...props
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [triedProxy, setTriedProxy] = useState(false);
  const [triedRawFromProxy, setTriedRawFromProxy] = useState(false);

  // Sync state when src prop changes
  React.useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  // More reliable external URL detection
  const isExternal = imageSrc.startsWith('http://') || imageSrc.startsWith('https://');
  const isLocal =
    imageSrc.startsWith('/') || imageSrc.startsWith('./') || imageSrc.startsWith('data:');

  // Check if the domain is allowed in next.config.mjs for optimization
  const isOptimizedDomain =
    imageSrc.includes('images.unsplash.com') ||
    imageSrc.includes('images.pexels.com') ||
    imageSrc.includes('images.pixabay.com') ||
    imageSrc.includes('img.rocket.new');

  const handleError = () => {
    const isCurrentlyProxied = imageSrc.startsWith('/api/image-proxy?url=');
    if (isExternal && !isCurrentlyProxied && !triedProxy) {
      const proxiedCurrent = `/api/image-proxy?url=${encodeURIComponent(imageSrc)}`;
      setImageSrc(proxiedCurrent);
      setTriedProxy(true);
      return;
    }
    // If the proxied fetch failed, try the original source directly once
    if (isCurrentlyProxied && !triedRawFromProxy) {
      try {
        const u = new URL(imageSrc, typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
        const raw = u.searchParams.get('url');
        if (raw) {
          setImageSrc(raw);
          setTriedRawFromProxy(true);
          return;
        }
      } catch {
        // fall through to fallbacks
      }
    }
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
      return;
    }
    if (secondaryFallbackSrc && imageSrc !== secondaryFallbackSrc) {
      setImageSrc(secondaryFallbackSrc);
      setHasError(true);
      return;
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`;

  const {
    priority: _priority,
    quality: _quality,
    placeholder: _placeholder,
    blurDataURL: _blurDataURL,
    unoptimized: _unoptimized,
    ...validImgProps
  } = props;

  if (fill) {
    return (
      <div
        className={`relative`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        {(() => {
          const resolvedSrc = imageSrc.startsWith('/api/image-proxy?url=')
            ? imageSrc
            : imageSrc;
          return (
        <img
          src={resolvedSrc}
          alt={alt}
          className={`${commonClassName} absolute inset-0 w-full h-full object-cover`}
          onError={handleError}
          onLoad={handleLoad}
          onClick={onClick}
          loading={priority ? 'eager' : 'lazy'}
          {...validImgProps}
        />
          );
        })()}
      </div>
    );
  }

  return (
    (() => {
      const resolvedSrc = imageSrc.startsWith('/api/image-proxy?url=')
        ? imageSrc
        : imageSrc;
      return (
    <img
      src={resolvedSrc}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={commonClassName}
      onError={handleError}
      onLoad={handleLoad}
      onClick={onClick}
      loading={priority ? 'eager' : 'lazy'}
      {...validImgProps}
    />
      );
    })()
  );
}

export default AppImage;
