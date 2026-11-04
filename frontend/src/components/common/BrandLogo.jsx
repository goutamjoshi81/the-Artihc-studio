import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'dark', showText = true, size = 'default', className = '' }) {
  // Variant: 'dark' (for light backgrounds) or 'light' (for dark backgrounds)
  const isLight = variant === 'light';
  const strokeColor = isLight ? '#FFFFFF' : '#0C0C0A';
  const textColor = isLight ? '#FFFFFF' : '#0C0C0A';
  const subColor = isLight ? 'rgba(255, 255, 255, 0.65)' : '#66645E';

  const monogramSize = size === 'large' ? 48 : size === 'small' ? 28 : 36;

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.85rem' }}
      aria-label="THE ARTIHC STUDIO Homepage"
    >
      {/* High-Precision Architectural Monogram Vector */}
      <div 
        style={{ 
          width: monogramSize, 
          height: monogramSize, 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          width={monogramSize} 
          height={monogramSize} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
          className="group-hover:scale-105"
        >
          {/* Architectural Colonnade & Vault Arch from Logo Anatomy */}
          {/* Left Vertical Spine Pillar */}
          <rect x="14" y="24" width="8" height="52" fill={strokeColor} />
          {/* Fluted Middle Column */}
          <rect x="27" y="29" width="8" height="47" fill={strokeColor} />
          {/* Fluted Inner Column */}
          <rect x="40" y="29" width="8" height="47" fill={strokeColor} />
          {/* Sweeping Vaulted Arch & Right Monolith Leg */}
          <path 
            d="M14 24 H56 C74 24 82 36 82 52 V76 H94 V79 H58 V76 H74 V52 C74 38 68 30 54 30 H14 V24 Z" 
            fill={strokeColor} 
          />
        </svg>
      </div>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span 
            style={{ 
              fontFamily: "var(--font-heading, 'Syne', sans-serif)",
              fontSize: size === 'large' ? '1.15rem' : size === 'small' ? '0.85rem' : '0.98rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: textColor,
              transition: 'color 0.2s ease'
            }}
          >
            THE ARTIHC STUDIO
          </span>
          <span 
            style={{ 
              fontFamily: "var(--font-sans, sans-serif)",
              fontSize: '0.62rem',
              fontWeight: 400,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: subColor,
              marginTop: '0.2rem'
            }}
          >
            Architecture &bull; Interiors
          </span>
        </div>
      )}
    </Link>
  );
}
