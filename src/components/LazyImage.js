import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  fallback = null,
  style = {},
  onError = null,
  placeholder = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  return (
    <div ref={imgRef} className={className} style={style} {...props}>
      {hasError && fallback ? (
        fallback
      ) : (
        <>
          {(!isLoaded || !isInView) && placeholder && (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px'
            }}>
              {placeholder}
            </div>
          )}
          {isInView && (
            <img
              src={src}
              alt={alt}
              style={{
                ...style,
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease',
                display: hasError ? 'none' : 'block'
              }}
              onLoad={handleLoad}
              onError={handleError}
            />
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;
