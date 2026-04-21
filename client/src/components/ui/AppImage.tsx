'use client';

import React, { useState } from 'react';

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  onClick?: () => void;
  fallbackSrc?: string;
  secondaryFallbackSrc?: string;
}

function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  onClick,
  fallbackSrc = '/assets/images/no_image.png',
  secondaryFallbackSrc = '/assets/images/no_image.png',
  ...props
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [triedProxy, setTriedProxy] = useState(false);
  const [triedRawFromProxy, setTriedRawFromProxy] = useState(false);

  // Sync state when src prop changes
  React.useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
  }, [src]);

  // More reliable external URL detection
  const isExternal =
    imageSrc && (imageSrc.startsWith('http://') || imageSrc.startsWith('https://'));

  const handleError = () => {
    const isCurrentlyProxied = imageSrc && imageSrc.startsWith('/api/image-proxy?url=');
    if (isExternal && !isCurrentlyProxied && !triedProxy) {
      const proxiedCurrent = `/api/image-proxy?url=${encodeURIComponent(imageSrc || '')}`;
      setImageSrc(proxiedCurrent);
      setTriedProxy(true);
      return;
    }
    // If the proxied fetch failed, try the original source directly once
    if (isCurrentlyProxied && !triedRawFromProxy) {
      try {
        const u = new URL(
          imageSrc,
          typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
        );
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
      return;
    }
    if (secondaryFallbackSrc && imageSrc !== secondaryFallbackSrc) {
      setImageSrc(secondaryFallbackSrc);
      return;
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`;

  const validImgProps = props;

  if (fill) {
    return (
      <div className={`relative`} style={{ width: width || '100%', height: height || '100%' }}>
        {(() => {
          const baseSrc = imageSrc && imageSrc.length > 0 ? imageSrc : fallbackSrc;
          const resolvedSrc =
            baseSrc && baseSrc.startsWith('/api/image-proxy?url=') ? baseSrc : baseSrc;
          return (
            // eslint-disable-next-line @next/next/no-img-element
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

  return (() => {
    const baseSrc = imageSrc && imageSrc.length > 0 ? imageSrc : fallbackSrc;
    const resolvedSrc = baseSrc && baseSrc.startsWith('/api/image-proxy?url=') ? baseSrc : baseSrc;
    return (
      // eslint-disable-next-line @next/next/no-img-element
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
  })();
}

export default AppImage;
