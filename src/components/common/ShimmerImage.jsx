import { useState, useRef, useEffect } from 'react';
import './ShimmerImage.css';

/**
 * Reusable Shimmer Image Component
 * Shows a warm golden-cream shimmer skeleton while image is loading,
 * then smoothly fades the image in once loaded.
 */
export default function ShimmerImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  borderRadius,
  aspectRatio,
  minHeight,
  style = {},
  imgStyle = {},
  loading = 'lazy',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if image is already cached or completed
    if (imgRef.current && (imgRef.current.complete || imgRef.current.naturalWidth > 0)) {
      setIsLoaded(true);
    }
  }, [src]);

  const customStyles = {
    ...(borderRadius ? { borderRadius } : {}),
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(minHeight ? { '--shimmer-min-h': minHeight } : {}),
    ...style,
  };

  return (
    <div
      className={`shimmer-img-wrapper ${isLoaded ? 'is-loaded' : 'is-loading'} ${wrapperClassName}`}
      style={customStyles}
    >
      {!isLoaded && (
        <div 
          className="shimmer-img-skeleton" 
          style={{ ...(borderRadius ? { borderRadius } : {}) }}
          aria-hidden="true" 
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={`shimmer-img-element ${isLoaded ? 'is-visible' : 'is-hidden'} ${className}`}
        style={imgStyle}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
