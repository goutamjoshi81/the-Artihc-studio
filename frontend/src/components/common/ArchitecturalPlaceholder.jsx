import React from 'react';

export default function ArchitecturalPlaceholder({
  src = null,
  alt = 'Architectural Spatial Study',
  aspect = 'aspect-cinema', // aspect-cinema (16:9), aspect-editorial (4:5), aspect-portrait (3:4), aspect-banner (21:9), aspect-square (1:1)
  theme = 'arch-placeholder-warm', // arch-placeholder-warm, arch-placeholder-stone, arch-placeholder-dark, arch-placeholder-blueprint
  title = '',
  category = 'Spatial Architecture',
  tag = 'Architectural Perspective',
  scale = '1:50 VOLUMETRIC',
  className = '',
  overlayContent = null,
  hoverZoom = true
}) {
  const [imgError, setImgError] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const hasRealImage = src && !imgError && typeof src === 'string' && (src.startsWith('http') || src.startsWith('/') || src.startsWith('data:'));

  return (
    <div 
      className={`arch-placeholder ${aspect} ${theme} ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '2px',
        border: '1px solid var(--stone-border)'
      }}
    >
      {/* If real image is supplied, render it with smooth transitions and subtle architectural framing */}
      {hasRealImage ? (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }} className="group">
          <img
            src={src}
            alt={alt || title}
            onError={() => setImgError(true)}
            onLoad={() => setIsLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
              opacity: isLoaded ? 1 : 0,
              transform: 'scale(1)'
            }}
            className={hoverZoom ? 'group-hover:scale-105' : ''}
            loading="lazy"
          />

          {/* Subtle architectural gradient scrim */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(12, 12, 10, 0.45) 0%, rgba(12, 12, 10, 0.05) 50%, rgba(12, 12, 10, 0.2) 100%)',
              pointerEvents: 'none',
              transition: 'opacity 0.4s ease'
            }}
          />

          {/* Top Architectural Category Badge */}
          {category && (
            <div 
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 3,
                pointerEvents: 'none'
              }}
            >
              <span 
                style={{
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.75rem',
                  background: 'rgba(12, 12, 10, 0.75)',
                  color: '#FFFFFF',
                  borderRadius: '1px',
                  backdropFilter: 'blur(6px)',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                {category}
              </span>
            </div>
          )}

          {/* Top Right Scale Tag */}
          {scale && (
            <div 
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 3,
                pointerEvents: 'none'
              }}
            >
              <span 
                style={{
                  fontFamily: "var(--font-sans, sans-serif)",
                  fontSize: '0.62rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.65rem',
                  background: 'rgba(12, 12, 10, 0.6)',
                  color: 'rgba(255, 255, 255, 0.85)',
                  borderRadius: '1px',
                  backdropFilter: 'blur(6px)',
                  fontWeight: 500
                }}
              >
                {scale}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* State-of-the-Art Procedural Architectural Canvas */
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(1rem, 2.5vw, 2rem)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="group"
        >
          {/* Subtle Top Metadata Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 3 }}>
            <span 
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '0.3rem 0.65rem',
                background: 'rgba(12, 12, 10, 0.75)',
                color: '#FFFFFF',
                borderRadius: '1px',
                backdropFilter: 'blur(6px)',
                fontWeight: 500
              }}
            >
              {category}
            </span>

            <span 
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: '0.62rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: theme.includes('dark') || theme.includes('blueprint') ? 'rgba(255, 255, 255, 0.6)' : 'var(--muted)',
                fontWeight: 500
              }}
            >
              {scale}
            </span>
          </div>

          {/* Architectural Drawing Watermark & Crosshairs */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '85%',
              pointerEvents: 'none',
              zIndex: 2
            }}
          >
            {/* Elegant SVG Crosshair & Horizon Indicator */}
            <div style={{ margin: '0 auto 0.75rem', width: '48px', height: '48px', opacity: 0.35 }}>
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="50" cy="50" r="38" strokeDasharray="3 3" />
                <line x1="50" y1="5" x2="50" y2="95" />
                <line x1="5" y1="50" x2="95" y2="50" />
                <rect x="42" y="42" width="16" height="16" />
              </svg>
            </div>

            {title && (
              <h4 
                style={{
                  fontFamily: "var(--font-display, serif)",
                  fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: theme.includes('dark') || theme.includes('blueprint') ? '#FFFFFF' : 'var(--noir)',
                  marginBottom: '0.35rem',
                  lineHeight: 1.2
                }}
              >
                {title}
              </h4>
            )}

            <p 
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: theme.includes('dark') || theme.includes('blueprint') ? 'rgba(255, 255, 255, 0.5)' : 'var(--muted)',
                fontWeight: 400
              }}
            >
              {tag} &bull; Image Ready
            </p>
          </div>

          {/* Bottom Technical Coordinates */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-end', 
              zIndex: 3,
              borderTop: theme.includes('dark') || theme.includes('blueprint') ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(12, 12, 10, 0.08)',
              paddingTop: '0.6rem'
            }}
          >
            <span 
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: '0.58rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: theme.includes('dark') || theme.includes('blueprint') ? 'rgba(255, 255, 255, 0.45)' : 'var(--muted-light)'
              }}
            >
              TAS ARCHIVE &bull; STUDIO MONOGRAPH
            </span>

            <span 
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: '0.58rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--bronze)',
                fontWeight: 600
              }}
            >
              PROPORTIONAL 1.618
            </span>
          </div>
        </div>
      )}

      {/* Custom Overlay Content if passed */}
      {overlayContent && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 4 }}>
          {overlayContent}
        </div>
      )}
    </div>
  );
}
